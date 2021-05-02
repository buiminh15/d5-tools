import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import { diffJson, diffLines, diffWords, diffArrays, diffCss } from "diff";
import { useGlobalContext } from '../../context/context';
import Header from '../components/common/Header';
import { useEffect } from 'react';
import { CATEGORY } from '../components/common/constant';

export default function DataComparer() {
    var {
      firstDataComparer,
      secondDataComparer,
      amountAddedDataComparer,
      amountDeletedDataComparer,
      getFeature,
    } = useGlobalContext();

    const feature = getFeature(CATEGORY.DATA_COMPARER);
    var optionsValues = [
        'JSON', 'XML', 'CSV', 'YAML', 'TXT', 'ARRAY', 'CSS'
    ];
    var [option, setOption] = useState(optionsValues[0]);
    var [firstData, setFirstData] = useState(firstDataComparer);
    var [secondData, setSecondData] = useState(secondDataComparer);
    var [amountAdded, setAmountAdded] = useState(amountAddedDataComparer);
    var [amountDeleted, setAmountDeleted] = useState(amountDeletedDataComparer);
    var [isDisable, setIsDisable] = useState(true);

    useEffect(() => {
        if (firstData && secondData) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
            var result = document.getElementById("result");
            result.textContent = "";
        }
    }, [firstData, secondData])

    var compare = (e) => {
        e.preventDefault()
        var result = document.getElementById("result");
        result.textContent = "";
        amountAdded = amountDeleted = 0;
        getDiff().forEach((part) => {
            var span = document.createElement("span");
            if (part.added) {
                span.style.color = "#406619";
                span.style.background = "#eaf2c2";
                amountAdded += part.count;
                setAmountAdded(amountAdded)
            } else if (part.removed) {
                span.style.color = "#b30000";
                span.style.background = "#fadad7";
                amountDeleted += part.count;
                setAmountDeleted(amountDeleted)
            }
            span.appendChild(document.createTextNode(part.value));
            result.appendChild(span);
        });
    }

    var getDiff = () => {
        if (option === "JSON") {
            return diffJson(firstData, secondData);
        } else if (option === "XML" || option === "YAML") {
            return diffLines(firstData, secondData);
        } else if (option === "CSV" || option === "TXT") {
            return diffWords(firstData, secondData);
        } else if (option === "ARRAY") {
            return diffArrays(firstData, secondData);
        } else if (option === "CSS") {
            return diffCss(firstData, secondData);
        }
    }

    return (
        <>
            <Header />
            <div>
                <div className="container">
                    <h1 className="s-title text-center text-capitalize">
                        {feature.title}
                    </h1>
                    <h2 className="s-sub-title text-center text-capitalize">
                        {feature.subTitle}
                    </h2>
                    <form className="form-bg" onSubmit={compare}>
                        <div className="pl-15">
                            <div className="row">
                                <Dropdown
                                    options={optionsValues}
                                    onChange={(e) => setOption(e.value)}
                                    value={option}
                                    className="dropdown mx-3"
                                />
                                <button type="submit" className="btn btn-primary" disabled={isDisable}>
                                    Compare
                                </button>
                            </div>
                        </div>
                        <div className="d-block my-4">
                            <div className="row">
                                <div className="col">
                                    <textarea
                                        placeholder="Type your data here..."
                                        value={firstData}
                                        onChange={e => setFirstData(e.target.value)}
                                        className="textarea data-comparer-height"
                                    />
                                </div>
                                <div className="col">
                                    <textarea
                                        placeholder="Type your data here..."
                                        value={secondData}
                                        onChange={e => setSecondData(e.target.value)}
                                        className="textarea data-comparer-height"
                                    />
                                </div>
                                {/* <div className="col">
                                    <textarea
                                        placeholder=""
                                        value={content}
                                        className="textarea data-comparer-height"
                                    />
                                </div> */}
                                <div className="col">
                                    <pre id="result" className="textarea data-comparer-textarea data-comparer-height"></pre>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
