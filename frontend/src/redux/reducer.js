import { DELETE_TEXTS, SET_CONTENT, HANDLE_COPY, SET_NUMBER, SET_SELECTED_ITEM_LEFT_CONTENT_TAB_COMPONENT } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TEXTS:
      return { ...state, content: '' };
    case SET_CONTENT:
      return { ...state, content: action.payload };
    case HANDLE_COPY:
      return { ...state, isCopied: action.payload };
    case SET_NUMBER:
      return { ...state, number: action.payload };
    case SET_SELECTED_ITEM_LEFT_CONTENT_TAB_COMPONENT:
      return { ...state, indexOfSelectedItemLeftContentTabComponent: action.payload };
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;