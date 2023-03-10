import { createStore } from 'vuex'
import axios from 'axios'
const foodies = 'https://capstoneproject-l3bw.onrender.com/';

export default createStore({
  state: {
    products: null,
    product:null,
    message:null,
    users:null,
    user:null
  
  },
  getters: {

  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setMessage(state,message){
      state.message = message;
    },
    setProduct(state, product) {
      state.product = product;
    }
  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(`${foodies}products`);
      const { results,err} =await res.data;
      if(results) {
        context.commit('setProducts', results)
      }else {
        context.commit('setProducts',err)
      }
    },
    fetchProduct: async (context,id) => {
      const res = await axios.get(`${foodies}product/${id}`)
      const { results,err} =await res.data;
      if(results) {
        context.commit('setProduct', results[0])
      }else {
        context.commit('setProduct',err)
      }

  }  
},
  modules: {
  }

})
