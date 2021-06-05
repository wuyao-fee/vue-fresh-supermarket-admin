// @所有商品类目的接口
import axios from '@/axios';

export default {
  list(params) {
    return axios.get('products/all', { params });
  },
  remove(params) {
    return axios.delete(`products/${params.id}`);
  },
};
