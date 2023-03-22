<template>
    <div>
     
        <button type="button" data-bs-toggle="modal" data-bs-target="#updateProdModal" class="btnUpdate"><i class="fa-solid fa-pen-to-square"></i>
          </button>
          
          
          <div class="modal fade" id="updateProdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="UpdateModal">Update Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="update">
                  <div class="modal-body">
                  <label>Product Name:</label><br>
                  <input type="text" class="input" placeholder="Product Name"  v-model="productName" required > <br><br>
                  <label>Nutrition:</label><br>
                  <textarea class="input" id="message-text" placeholder="Nutrition" style="height: 100px" v-model="prodNutrition" required ></textarea>
                  <label>Price:</label><br>
                  <input type="input" class="input" placeholder="Price" v-model="price"  required > <br><br>
                  <label>category:</label><br>
                  <input type="input" class="input" placeholder="Fruit/Vegetable" v-model="category"  required > <br><br>
                  
                  <label>Image</label><br>
                  <input type="text" class="input" placeholder="imgURL" v-model="img" required > <br><br>
                  
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
  data(){
    return{
      payload:{
        productName:"",
        prodNutrition:"",
        price:"",
        category:"",
        imgURL:""

      }

    }
  },
  computed: {
  message() {
    return this.$store.state.message;
  },
},



 methods:{
  update(){
    this.$store.dispatch('updateProduct',{
      productName: this.productName,
      prodNutrition: this.prodNutrition,
      price: this.price,
      category: this.category,
      imgURL: this.imgURL
    })
  }
}
}


</script>

<style>
.btnUpdate{
  border: none;
  color: #7cbd1e;
  background-color: transparent;
  font-size: 2rem;

}
</style>