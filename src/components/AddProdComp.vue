<template>
    <div>
     
  <button type="button" data-bs-toggle="modal" class="btnAddProd" data-bs-target="#addProdModal"><i class="fa-solid fa-plus"></i> New Product
    </button>
    
    
    <div class="modal fade" id="addProdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="addProduct">
            <div class="modal-body">
            <label>Product Name:</label><br>
            <input type="text" class="input" placeholder="Product Name" v-model="payload.productName" required > <br><br>
            <label>Nutrition:</label><br>
            <textarea class="input" id="message-text" placeholder="Nutrition" style="height: 100px" v-model="payload.prodNutrition" required ></textarea>
            <label>Price:</label><br>
            <input type="input" class="input" placeholder="Price" v-model="payload.price" required > <br><br>
            <label>category:</label><br>

            <select typpe="input" name="category" id="category" v-model="payload.category" required>
              <option value="Fruit" >Fruit</option>
              <option value="Vegetable" >Vegetable</option>
            </select><br>
            <label>Image</label><br>
            <input type="text" class="input" placeholder="imgURL" v-model="payload.imgURL" required > <br><br>
            
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
  <style >
  .input{
    width:100%;
  }
  #category{
    width: 100%;
  }
 
  </style>

  <script>
  export default{
    data(){
      return {
        payload:{
        productName: '',
        prodNutrition: '',
        price:'',
        category:'',
        imgURL:''
        }
      }
      },
      computed:{
        message(){
          return this.$store.state.message
  
        }
      },
    methods:{
      addProduct(){
        this.$store.dispatch('addProduct',this.payload)
      }
    }
  
    }
  
  </script>
  <style>
  .btnAddProd{
    border: none;
    color: #7cbd1e;
    background-color: transparent;
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem;
  
  }
</style>

