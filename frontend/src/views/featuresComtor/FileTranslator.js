import React, { useState } from 'react';

import Header from '../components/common/Header';
import { useGlobalContext } from '../../context/context';
import { CATEGORY_COMTOR } from '../components/common/constant';
import Upload from '../components/upload_file/Upload';
export default function FileTranslator(props) {
  var {
    getFeatureComtor
  } = useGlobalContext();

  const feature = getFeatureComtor(CATEGORY_COMTOR.FILE_TRANSLATOR);
 
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
          <Upload />
         
        </div>
      </div>
    </>
  );
}
