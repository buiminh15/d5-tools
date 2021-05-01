import React, { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import { CATEGORY } from '../components/common/constant';
import Header from '../components/common/Header';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import request from "../../helpers/request";
import { featureMixin } from '../../mixins/feature'
import FileSaver from 'file-saver';
export default function FileGenerator() {
  var {
    fileName,
    format,
    items,
    unit,
    isFileSizeExceeded,
    isFileGenerating,
    getFeature,
  } = useGlobalContext();
  const feature = getFeature(CATEGORY.FILE_GENERATOR);
  const optionsValues = ['TXT'];
  const optionsUnitValues = ['Bytes', 'KBytes', 'MBytes'];

  var [fileName, setFileName] = useState('');
  var [inputValue, setinputValue] = useState(0);
  var [itemsArr, setItemsArr] = useState(items);
  var [option, setOption] = useState(optionsValues[0]);
  var [optionUnit, setOptionUnit] = useState(optionsUnitValues[0]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const item = {
      size: inputValue,
      unit: optionUnit
    }
    const file = {
      file_name: `${fileName}.${option}`,
      size: convertItemSizeToBytes(item)
    };
    const res = await request.post(`/file/txt`, file )

    if (res.status === 200) {
      FileSaver.saveAs(
        new Blob([res.data], { type: 'text/plain' }),
        `${fileName}.${option}`
      );
    }

  };

  const generate = async () => {
    isFileGenerating = true;
    // let finalFileName = fileName
    //   ? `${fileName}.${format.toLowerCase()}`
    //   : `file.${format.toLowerCase()}`;
    // const response = await request.post("/api/file", {size: convertFileSizeToBytes});
    // isFileGenerating = false;
    // if (response.status === 200) {
    //   downloadFileFromServer(finalFileName, response);
    // }
  };
  const deleteItemFromList = (list, id) => {
    list.splice(id, 1);
    if (list.length > 0) {
      setItemsArr([...list]);
    }
  };

  const handleAddItem = () => {
    setItemsArr([...itemsArr, { size: '', unit: 'Bytes' }]);
  }

  const convertItemSizeToBytes = (item) => {
    if (item.unit === 'Bytes') {
      return +item.size;
    } else if (item.unit === 'KBytes') {
      return +item.size * unit.kByte;
    } else if (item.unit === 'MBytes') {
      return +item.size * unit.mByte;
    }
  };

  const convertFileSizeToBytes = () => {
    const fileSize = itemsArr.reduce((totalSize, item) => {
      return totalSize + convertItemSizeToBytes(item);
    }, 0);
    isFileSizeExceeded = fileSize > unit.gByte;
    return fileSize;
  };

  const convertFileSizeForUser = () => {
    const fileSize = convertFileSizeToBytes();
    if (fileSize === 0) return '0 B';
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(fileSize) / Math.log(unit.kByte));
    return (
      parseFloat((fileSize / Math.pow(unit.kByte, i)).toFixed(2)) +
      ' ' +
      sizes[i]
    );
  };

  const handleSizeInput1 = () => {


  }

  const handleSizeInput = (value, index) => {
    const filteredItems = itemsArr.filter(
      (item, indexItem) => indexItem !== index
    );
    let changedItem = itemsArr.find((item, indexItem) => indexItem === index);
    changedItem.size = value;
    setItemsArr([...filteredItems, changedItem]);
  };


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
          <form onSubmit={handleSubmit} className="form-bg">
            <div className="file-gen-center-items center">
              <div className="d-flex justify-content-around">
                <input type="text" className="input" placeholder="File name" value={fileName} onChange={(e) => setFileName(e.target.value)} />
                <DropdownButton style={{ minWidth: 60 }} id="dropdown-basic-button" title={option}>
                  {optionsValues.map((option) => (
                    <Dropdown.Item
                      key={option}
                      onClick={() => setOption(option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isFileGenerating || isFileGenerating}
                >
                  {isFileGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
              {/* <div className="d-flex justify-content-center my-3">
                <span>The total file size is {''} B.</span>
                {isFileSizeExceeded && (
                  <span className="">
                    The maximum file size can be no more than 1 GB.
                  </span>
                )}
              </div> */}
              <div
                className=" file-gen-center-items center"
                style={{ width: '60%' }}
              >
                <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input
                            required
                            maxLength="10"
                            type="text"
                            value={inputValue}
                            className="input file-size-input"
                            onChange={(e) =>
                              setinputValue(e.target.value)
                            }
                            style={{ width: 110 }}
                            placeholder="Size"
                          />
                        </label>
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ minWidth: 40 }}
                          title={optionUnit}
                        >
                          {optionsUnitValues.map((optionUnit) => (
                            <Dropdown.Item
                              key={optionUnit}
                              onClick={() => setOptionUnit(optionUnit)}
                            >
                              {optionUnit}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      </td>
                    </tr>
                    {/* {itemsArr.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <label>
                            <input
                              required
                              maxLength="10"
                              type="text"
                              value={
                                item.size && item.size.replace(/[^\d]/, '')
                              }
                              className="input file-size-input"
                              onChange={(e) =>
                                handleSizeInput(e.target.value, index)
                              }
                              style={{ width: 110 }}
                              placeholder="Size"
                            />
                          </label>
                        </td>
                        <td>
                          <DropdownButton
                            id="dropdown-basic-button"
                            style={{minWidth: 40}}
                            title={optionUnit}
                          >
                            {optionsUnitValues.map((optionUnit) => (
                              <Dropdown.Item
                                key={optionUnit}
                                onClick={() => setOptionUnit(optionUnit)}
                              >
                                {optionUnit}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        </td>
                        <td class="delete-icon">
                          <span
                            onClick={() => deleteItemFromList(itemsArr, index)}
                          >
                            <AiFillDelete />
                          </span>
                        </td>
                      </tr>
                    ))} */}
                    <tr>
                      <td>
                        <span onClick={() => handleAddItem()}>
                          <AiOutlinePlus />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div className="row">
                  <div className="col-6 font-weight-bold text-center">Size</div>
                  <div className="col-6 font-weight-bold text-center">Unit</div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                    <input
                      type="text"
                      className="input "
                      style={{ width: 110 }}
                      placeholder="Size"
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={optionUnit}
                    >
                      {optionsUnitValues.map((option) => (
                        <Dropdown.Item onClick={() => setOptionUnit(option)}>
                          {option}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                </div> */}
              </div>
            </div>
          </form>
          <div className="my-5">
            <p className="s-description">{feature.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
