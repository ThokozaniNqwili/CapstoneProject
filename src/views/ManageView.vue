<template>
  <div id="manage" class="panel-body">
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
                <button
                  type="button"
                  class="btnDelete"
                  @click.prevent="deleteUser(user.userId)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <h2>Products</h2>
      <AddProdComp />

      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Nutrition</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.productId">
              <td>
                <img :src="product.imgURL" alt="product image" class="image" />
                {{ product.productName }}
              </td>
              <td>{{ product.price }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.prodNutrition }}</td>
              <td type="button" class="btnUpdate">
                <UpdateProdComp :productData="product" />
              </td>
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
// import SpinnerComp from '@/components/SpinnerComp.vue'

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
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
  },
};
</script>

<style scoped>
.image {
  width: 5rem;
}
.btnDelete {
  border: none;
  color: #7cbd1e;
  background-color: transparent;
  font-size: 1.5rem;
}
#manage h2 {
  color: #7cbd1e;
  text-align: center;
  font-size: 3rem;
}
@media screen and (min-width: 300px) and (max-width: 719px) {
  .image {
    width: 2rem;
  }
  .btnDelete {
    font-size: 0.6rem;
  }
  th {
    font-size: 0.6rem;
    padding: 0rem;
  }
  td {
    font-size: 0.5rem;
    padding: 0 !important;
  }
}
</style>
