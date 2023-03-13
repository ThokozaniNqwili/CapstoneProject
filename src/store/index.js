import { createStore } from "vuex";
import axios from "axios";
const foodies = "https://capstoneproject-l3bw.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null,
    message: null,
    users: null,
    user: null,
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(`${foodies}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProducts", err);
      }
    },
    fetchUsers: async (context) => {
      const res = await axios.get(`${foodies}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setUsers", err);
      }
    },
    fetchProduct: async (context, id) => {
      const res = await axios.get(`${foodies}product/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProduct", result[0]);
      } else {
        context.commit("setProduct", err);
      }
    },
    fetchUser: async (context, id) => {
      const res = await axios.get(`${foodies}user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result[0]);
      } else {
        context.commit("setUser", err);
      }
    },
    async createUser(context,payload){
      const res = await axios.post(`${foodies}signup`,payload)
      const {msg,err} = await res.data;
      if(msg){
        context.commit("setMesage",msg);  
      }else{
        context.commit("setMesage",err);
      }
    }
  },
  modules: {},
});
