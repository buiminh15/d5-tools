import React, { useContext, useEffect, useReducer, useState } from 'react';
import { features } from '../models/features';
import { featuresComtor } from '../models/featuresComtor';
import { featuresExcel } from '../models/featuresExcel';
import reducer from '../redux/reducer';
import { DELETE_TEXTS, SET_CONTENT, HANDLE_COPY, SET_SELECTED_ITEM_LEFT_CONTENT_TAB_COMPONENT } from '../redux/actions';

const initialState = {
  content: '',
  isCopied: false,
  number: null,
  maxNumberForTextArea: 10000,
  maxNumber: 100000,
  // data comparer
  initFormatData: 'JSON',
  firstDataComparer: '',
  secondDataComparer: '',
  amountAddedDataComparer: null,
  amountDeletedDataComparer: null,
  // file generator
  items: [{ size: '', unit: 'Bytes' }],
  unit: { byte: 1, kByte: 1024, mByte: 1024 ** 2, gByte: 1024 ** 3 },
  isFileSizeExceeded: false,
  isFileGenerating: false,
  initFormatFile: 'TXT',
  fileName: '',
  indexOfSelectedItemLeftContentTabComponent: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTexts = () => {
    dispatch({ type: DELETE_TEXTS });
  };
  const handleCopy = () => {
    dispatch({ type: HANDLE_COPY, payload: true });
    setTimeout(() => {
      dispatch({ type: HANDLE_COPY, payload: false });
    }, 1000);
  };
  const handleState = (type, content) => {
    dispatch({ type: type, payload: content });
  };
  const getFeature = (category) => {
    return features.filter((item) => item.name === category)[0];
  }
  const getFeatureComtor = (category) => {
    return featuresComtor.filter((item) => item.name === category)[0];
  }
  const getFeatureExcel = (category) => {
    return featuresExcel.filter((item) => item.name === category)[0];
  }
  const selectedItemLeftContentTabComponent = (index) => {
    dispatch({ type: SET_SELECTED_ITEM_LEFT_CONTENT_TAB_COMPONENT, payload: index });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleState, deleteTexts,
        handleCopy, getFeature,
        selectedItemLeftContentTabComponent,
        getFeatureComtor, getFeatureExcel
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
