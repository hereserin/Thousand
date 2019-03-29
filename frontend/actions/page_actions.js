import * as PagesAPIUtil from "../util/pages_api_util";

export const RECEIVE_PAGES = "RECEIVE_PAGES";

export const fetchPages = () => {
  return dispatch => {
    return PagesAPIUtil.fetchPages().then(pages => {
      return dispatch(receivePages(pages));
    });
  };
};
// export const fetchPages = () => {
//   return dispatch => {
//     () => console.log("HELLO.");
//   };
// };

const receivePages = ({ pages }) => {
  return {
    type: RECEIVE_PAGES,
    pages: pages
  };
};
