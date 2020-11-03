import { callApi } from '../helpers/callApi';

export const ORDER = {
  async GET_LIST_ORDER({router = '', page = '1', limit = '10', idRole = ''}) {
    const link_query = `list/${router}?page=${page}&limit=${limit}&idRole=${idRole}`;
    const result = callApi({}, {endpoint: link_query, method: 'GET'});
    if (result) return result;
  },
  async UPDATE_DEFECTIVE_RETURN({body = {}, id_order = ''}) {
    const result = callApi(body, {
      endpoint: `order/defective-return/${id_order}`,
      method: 'PUT'
    });
    if (result) return result;
  },

  async UPDATE_REPORT({body = {}, id_order = ''}) {
    const result = callApi(body, {
      endpoint: `order/update-report/${id_order}`,
      method: 'PUT'
    });
    if (result) return result;
  }
};