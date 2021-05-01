import React, { useState } from 'react';
import _ from 'lodash';
import Header from '../components/common/Header';
import { useGlobalContext } from '../../context/context';
import BottomFunctions from '../components/common/BottomFunctions';
import { SET_CONTENT } from '../../redux/actions';
import { CATEGORY } from '../components/common/constant';
export default function CaseConverter() {
  var {
    content,
    isCopied,
    handleState,
    deleteTexts,
    handleCopy,
    getFeature,
  } = useGlobalContext();

  const feature = getFeature(CATEGORY.CASE_GENERATOR);

  const sentenceCase = () => {
    lowerCase();
    content = content
      .match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g)
      .map((sentence) =>
        sentence.replace(/[a-z]/i, (letter) => letter.toUpperCase())
      )
      .join('');
    handleState(SET_CONTENT, content);
  };
  const capitalizeCase = () => {
    lowerCase();
    content = content
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    handleState(SET_CONTENT, content);
  };

  const upperCase = () => {
    content = content.toUpperCase();
    handleState(SET_CONTENT, content);
  };

  const lowerCase = () => {
    content = content.toLowerCase();
    handleState(SET_CONTENT, content);
  };
  const camelCase = () => {
    content = content
      .split('\n')
      .map((word) => _.camelCase(word))
      .join('\n');
    handleState(SET_CONTENT, content);
  };
  const snakeCase = () => {
    content = content
      .split('\n')
      .map((word) => _.snakeCase(word))
      .join('\n');
    handleState(SET_CONTENT, content);
  };
  const kebabCase = () => {
    content = content
      .split('\n')
      .map((word) => _.kebabCase(word))
      .join('\n');
    handleState(SET_CONTENT, content);
  };
  const inverseCase = () => {
    content = content
      .split('')
      .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
      .join('');
    handleState(SET_CONTENT, content);
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
          <form className="form-bg">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => sentenceCase()}
              >
                Sentence case
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => capitalizeCase()}
              >
                Capitalize Case
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => upperCase()}
              >
                UPPER CASE
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => lowerCase()}
              >
                lower case
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => camelCase()}
              >
                camelCase
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => snakeCase()}
              >
                snake_case
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => kebabCase()}
              >
                kebab-case
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => inverseCase()}
              >
                iNVERSE cASE
              </button>
            </div>
            <div className="d-block my-4">
              <textarea
                placeholder="Type your content here..."
                onChange={(e) => handleState(SET_CONTENT, e.target.value)}
                value={content}
                className="textarea"
              />
            </div>
            <BottomFunctions
              content={content}
              isCopied={isCopied}
              handleCopy={handleCopy}
              deleteTexts={deleteTexts}
            />
          </form>
          <div className="my-5">
            <p className="s-description">{feature.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
