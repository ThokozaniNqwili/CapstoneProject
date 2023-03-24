<template>
  <div class="panel-body">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.cartId">
            <td><img :src="item.imgURL" alt="item image" class="image" /></td>
            <td>{{ item.productName }}</td>
            <td>
              <form class="form-inline">
                <input
                  class="form-control"
                  type="text"
                  :value="item.cartQuantity"
                />
                <button rel="tooltip" class="btn btn-default">
                  <i class="fa fa-pencil"></i>
                </button>
                <button
                  @click.prevent="deleteCartItem(item?.cartId)"
                  class="btnDelete"
                >
                  <i class="fa fa-trash-o"></i>
                </button>
              </form>
            </td>
            <td>{{ item.price }}</td>
            <td>{{ item.total }}</td>
          </tr>
          <br />
          <tr>
            <td colspan="4" class="text-right"><strong>Total</strong></td>
            <td id="sum"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br />

  <div class="d-flex justify-content-between">
    <a href="/products" class="btnShop">Continue Shopping</a>

    <!-- Button trigger modal -->
<button type="button" @click.prevent="deleteCart(loggedUser?.userId)" class="btnCheckoutCart" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Checkout Cart
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">Thank you for shopping with us</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img src="https://i.postimg.cc/Vkf1VPP2/success-removebg-preview.png" alt="success" width="50" height="50"><br>
        We'll send you payment information and delivery arrangement via email
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<style>
.image {
  width: 10rem;
}

.btnShop,
.btnCheckoutCart {
  border: 1px solid transparent;
  background-color: #7cbd1e;
  border-radius: 1rem;
  justify-content: space-between;
  text-decoration: none;
  padding: 1rem;

  color: black;
}

.btnShop:hover {
  background-color: #bceb3c;
}
.btnCheckoutCart:hover {
  background-color: #bceb3c;
}
.btnDelete {
  border: none;
  color: #7cbd1e;
  background-color: transparent;
}
.btnDelete:hover {
  color: black;
}
</style>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser"));
    },
  },
  created() {
    this.$store.dispatch("fetchCart", this.loggedUser.userId);
  },
  totalSum() {
    let sum = eval(this.cart.total.replace(/\s/g, "")).toFixed(2);
    return sum;
  },
  methods: {
    deleteCartItem(id) {
      this.$store.dispatch("deleteCartItem",id);
      console.log(id)
    },
    deleteCart() {
      this.$store.dispatch("deleteCart", this.loggedUser.userId);
      
    },
  },
};
</script>
