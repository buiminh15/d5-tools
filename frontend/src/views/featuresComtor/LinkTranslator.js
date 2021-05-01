import React, { useEffect } from 'react';
import { URL_LINK_TRANSLATOR } from '../../helpers/constant'
export default function LinkTranslator(props) {
  useEffect(() => {    
    window.open(URL_LINK_TRANSLATOR, "_blank")
    props.history.push('/')
  });
    return (
      <div>

      </div>
    )
  }
