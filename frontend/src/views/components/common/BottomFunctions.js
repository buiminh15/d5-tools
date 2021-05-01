import React from 'react'
import { FaCopy, FaSave } from 'react-icons/fa';
import { featureMixin } from '../../../mixins/feature';
import { AiFillDelete } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function BottomFunctions({ content, isCopied, handleCopy, deleteTexts }) {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="col-11">
          <span>
            Character Count: {content.length}
            {' | '}
          </span>
          <span>
            Word Count: {content ? content.trim().split(/\s+/).length : 0}
            {' | '}
          </span>
          <span>
            Line Count: {content ? content.split(/\r\n|\r|\n/).length : 0}
          </span>
        </div>
        <div className="col-1 d-flex justify-content-between">
          <span
            onClick={() =>
              featureMixin.methods.downloadFileFromClient('text.txt', content)
            }
          >
            <FaSave />
          </span>
          <CopyToClipboard text={content} onCopy={() => handleCopy()}>
            <span className="copy-icon">
              <FaCopy />
            </span>
          </CopyToClipboard>
          {isCopied ? <span className="alert-copied">Copied</span> : null}
          <span onClick={() => deleteTexts()}>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </div>
  );
}
