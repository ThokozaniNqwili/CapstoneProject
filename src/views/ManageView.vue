<template>
    <div>
        <div class="container">
          <h2>Users</h2>
          <AddUserComp/>


           

  <div class="row">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Cell Number (+27)</th>
      <th scope="col">User Role</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="user in users" :key="user.userId">
      <td> {{ user.firstName }}</td>
      <td> {{ user.lastName }}</td>
      <td> {{ user.emailAdd }}</td>
      <td> {{ user.phoneNumber }}</td>
      <td> {{ user.userRole }}</td>
      <td><UpdateUserComp :userData="user" /></td>
      <td><button type="button" ><i class="fa-solid fa-trash"></i></button></td>
    </tr>
  </tbody>
</table>
  </div>
  </div>
    </div>

    <div>
      <div class="container">
        <h2>Products</h2>
          <button
        class="btnAddProduct"
        data-bs-toggle="modal"
        data-bs-target="#addProduct"
      >
        <i class="fa-solid fa-plus"></i> Add Product
      </button>
      <button  class="btnSort">
        <i class="fas fa-sort"></i> Sort by Price
      </button>
<div class="row">
  <table class="table">
<thead>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
    <th scope="col">Category</th>
    <th scope="col">QTY</th>
    <th scope="col">Nutrition</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
<tbody>
  <tr  v-for="product in products" :key="product.id">
    <td> {{ product.productName }}</td>
    <td> {{ product.price }}</td>
    <td> {{ product.category }}</td>
    <td> {{ product.prodQuantity }}</td>
    <td> {{ product.prodNutrition }}</td>
    <td><button type="button" ><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button type="button" ><i class="fa-solid fa-trash"></i></button></td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>
</template>
<script>
import AddUserComp from '@/components/AddUserComp.vue'
import UpdateUserComp from '@/components/UpdateUserComp.vue'
export default{
    components: {
    AddUserComp, UpdateUserComp
    },

    
    
    computed:{
        products(){
            return this.$store.state.products
        },
        users(){
            return this.$store.state.users
        }
      },
    created(){
        this.$store.dispatch('fetchProducts');
        this.$store.dispatch('fetchUsers');

       }, 
    }


</script>