<template>
    <div>
     
        <button type="button" data-bs-toggle="modal" data-bs-target="#updateProdModal"><i class="fa-solid fa-pen-to-square"></i>
          </button>
          
          
          <div class="modal fade" id="updateProdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="UpdateModal">Update Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form >
                  <div class="modal-body">
                  <label>Product Name:</label><br>
                  <input type="text" class="input" placeholder="Product Name"  required >{{product?.productName}} <br><br>
                  <label>Nutrition:</label><br>
                  <!-- <textarea class="input" id="message-text" placeholder="Nutrition" style="height: 100px" required >{{product?.prodNutrition}}</textarea> -->
                  <label>Price:</label><br>
                  <input type="input" class="input" placeholder="Price"  required >{{product?.price}} <br><br>
                  <label>category:</label><br>
                  <input type="input" class="input" placeholder="Fruit/Vegetable"  required >{{product?.category}} <br><br>
                  <!-- <select typpe="input" name="category" id="category" v-model="category" required>
                    <option value="Fruit" >Fruit</option>
                    <option value="Vegetable" >Vegetable</option>
                  </select><br> -->
                  <label>Image</label><br>
                  <input type="text" class="input" placeholder="imgURL"  required >{{product?.imgURL}} <br><br>
                  
                </div>
        
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary" >Save changes</button>
                  </div>
                </form>
               
                 
                </div>
              </div>
            </div> 
          </div>
</template>

<script>
export default{ 
  computed: {
  product() {
    return this.$store.state.product;
  },
},
    created() {
  this.$store.dispatch("fetchProduct", this.$route.params.id);
},

}
</script>