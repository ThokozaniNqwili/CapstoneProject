<template>
  <div id="manage">
    <div class="container">
      <h2>Users</h2>

      <div class="row">
        <table class="table-responsive">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Cell Number (+27)</th>
              <th scope="col">User Role</th>

              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userId">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.phoneNumber }}</td>
              <td>{{ user.userRole }}</td>

              <td>
                <button type="button" class="btnDelete"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <h2>Products</h2>
      <AddProdComp />
      <button class="btnSort"><i class="fas fa-sort"></i> Sort by Price</button>
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
            <tr v-for="product in products" :key="product.productId">
              <td>
                <img :src="product.imgURL" alt="product image" class="image" />
              </td>
              <td>{{ product.productName }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.category }}</td>

              <td>{{ product.prodNutrition }}</td>
              <td type="button" class="btnUpdate"><UpdateProdComp /> </td>
              <td>
                <button
                  type="button"
                  class="btnDelete"
                  @click.prevent="deleteProduct(product.productId)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>


 
</template>

<script>
import AddProdComp from "@/components/AddProdComp.vue";
import UpdateProdComp from "@/components/UpdateProdComp.vue";

export default {
  components: {
    UpdateProdComp,
    AddProdComp,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
  },
};
</script>

<style>
.image {
  width: 5rem;
  height: 5rem;
}
.btnDelete{
  border: none;
  color: #7cbd1e;
  background-color: transparent;
  font-size: 2rem;
}
#manage h2{
  color: #7cbd1e;
  text-align: center;
  font-size: 3rem;


}
</style>
