import { LIST_INVOICE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  results: [],
  page_count: 0,
  current_page: 0
};

export default function invoices(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_INVOICE_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.results],
        page_count: action.page_count,
        current_page: state.current_page++
      };
    default:
      return state;
  }
}
