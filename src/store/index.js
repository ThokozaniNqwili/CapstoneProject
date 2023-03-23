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
    cart:null
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCart(state,cart){
      state.cart = cart;
    },
    sortProductPrice:(state) =>{
      state.products.sort((a,b)=>{
        return a.price - b.price;
      })
      if(!state.asc){
        state.products.reverse()
      }
      state.asc =!state.asc

    }
  
    

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
    fetchCart: async (context, id) => {
      const res = await axios.get(`${foodies}/user/${id}/carts`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setCart", results);
      } else {
        context.commit("setCart", err);
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
    async createUser(context, payload) {
      const res = await axios.post(`${foodies}signup`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async login(context, payload) {
      const res = await axios.post(`${foodies}login`, payload);
      const { result, msg, err } = await res.data;
      if (result) {
        context.commit("setMessage", msg);
        context.commit("setUser", result);
        localStorage.setItem("loggedUser", JSON.stringify(result));
        console.log(result, msg);
      } else {
        context.commit("setMesage", err);
        console.log(err);
      }
    },

    addProduct: async (context, payload) => {
      const res = await axios.post(`${foodies}product`, payload);
      const { msg, err } = await res.data;

      if (msg) {
        console.log(msg);
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },

    updateProduct: async (context, payload) => {
      const res = await axios.put(`${foodies}product/${payload.productId}}`, payload);
      console.log(payload);
      const { msg, err } = await res.data;
      
      if (msg) {
        context.commit("setProduct", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    updateUser: async (context, payload) => {
      const res = await axios.put(`${foodies}product/${payload}`, payload);
      console.log(payload);
      const { result, err } = await res.data;
      console.log(result);
      if (result) {
        context.commit("setMessage", result[0]);
      } else {
        context.commit("setMessage", err);
      }
    },

    deleteProduct: async (context, id) => {
      const { data } = await axios.delete(`${foodies}product/${id}`);
      if (data) {
        context.commit("setMessage", data.msg);
        context.dispatch("fetchProducts");
      } else {
        context.commit("setMessage", data.err);
      }
      // const res = await axios.delete(`${foodies}product/${id}`);
      // const { msg, err } = await res.data;
      // console.log()
      // if (result) {
      //   context.commit("setProduct", result);
      //   console.log(result);
      // } else {
      //   context.commit("setProduct", err);
      //   console.log(err);
      // }
    },
    deleteUser: async(context, id)=>{
      const { data } = await axios.delete(`${foodies}user/${id}`);
      if (data) {
        context.commit("setMessage", data.msg);
        context.dispatch("fetchUsers");
      
      } else {
        context.commit("setMessage", data.err);
      }
      

    }
  },
  modules: {},
});
