<template>
  <div id="productpage">
    <div class="container">
      <h1 class="card-title">{{ product?.productName }}</h1>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <img :src="product?.imgURL" class="card-img-top" alt="product" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card info">
            <h5 class="card-title">{{ product?.productName }}</h5>
            <h5 class="card-text">R {{ product?.price }}</h5>
            <br />
            <h5 class="card-text">Nutrition</h5>
            <p>{{ product?.prodNutrition }}</p>
            <button
              type="submit"
              @click.prevent="addToCart"
              class="btnCheckout"
            >Add to<i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: "",
      userId: "",
    };
  },

  computed: {
    product() {
      return this.$store.state.product;
    },
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser"));
    },
  },
  created() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  },
  methods: {
    addToCart() {
    

      this.$store.dispatch("addToCart", {
        userId: this.loggedUser.userId,
        productId: this.product.productId,
        cartQuantity : 1
      });
    },
  },
};
</script>

<style scoped>
#productpage .card {
  border: none !important;
}
#productpage .card-title {
  margin: 1rem;
  text-decoration: solid;
}
.info {
  text-align: center;
}
.btnCheckout {
  border: none;
 font-size: 2rem;
 background-color: transparent;
 color: #7cbd1e;
  margin: 1.5rem;
  padding: 1rem;
  font-weight: bold;
  
}
#productpage .fa-solid {
  font-size: 2rem;
  color: #7cbd1e;
  padding: 1rem;
  
  
}
.btnCheckout:hover{
  background-color: #f1f864;
}
@media screen and (min-width: 300px) and (max-width: 719px) {
  #productpage h1{
    font-size: 2rem ;
  }
  .info{
    font-size: 1rem !important;
  }

}
</style>
