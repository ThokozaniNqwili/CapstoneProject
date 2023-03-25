<template>
  <div>
    <button
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="'#updateProdModal' + `${productData?.productId}`"
      class="btnUpdateProd"
    >
      <i class="fa-solid fa-pen-to-square"></i>
    </button>

    <div
      class="modal fade"
      :id="'updateProdModal' + `${productData?.productId}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UpdateModal">Update Product</h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form @submit.prevent="update">
            <div class="modal-body">
              <label>Product Name:</label><br />
              <input
                type="text"
                class="input"
                
                :v-value="productData.productName"
                required
              />
              <br /><br />
              <label>Nutrition:</label><br />
              <textarea
                class="input"
                id="message-text"

                :value="productData.prodNutrition"
                style="height: 100px"
                required
              ></textarea
              ><br />
              <label>Price:</label><br />
              <input type="input" class="input" placeholder="Price" :value="productData.price" required />
              <br /><br />
              <label>category:</label><br />
              <input
                type="input"
                class="input"
                
                :value="productData.category"
                required
              />
              <br /><br />

              <label>Image</label><br />
              <input type="text" class="input"  :value="productData.imgURL" required />
              <br /><br />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" @click.prevent="update()" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      payload: {
        productName: "",
        prodNutrition: "",
        price: "",
        category: "",
        imgURL: "",
      },
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    product() {
      return this.$store.state.product;
    },
  },

  methods: {
    update(id) {
      this.$store.dispatch("updateProduct",id);
    },
  },
};
</script>

<style>
.btnUpdateProd {
  border: none;
  color: #7cbd1e;
  background-color: transparent;
  font-size: 1.5rem;
}
@media screen and (min-width: 300px) and (max-width: 719px) {
  .btnUpdate {
    font-size: 0.6 rem;
  }
}
</style>
