<template>
    <div>
     
  <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus"></i> New Product
    </button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="addProduct">
            <div class="modal-body">
            <label>Product Name:</label><br>
            <input type="text" class="input" placeholder="Product Name" v-model="productName" required > <br><br>
            <label>Nutrition:</label><br>
            <input type="text" class="input" name="message" placeholder="Nutrition" v-model="prodNutrition" required > <br><br>
            <label>Price:</label><br>
            <input type="email" class="input" placeholder="Price" v-model="price" required > <br><br>
            <label>category:</label><br>
            <select name="category" id="category" v-model="price" required>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
            </select>
            <label>Image</label><br>
            <input type="text" class="input" placeholder="imgURL" v-model="imgURL" required > <br><br>
            
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
  <style>
  .input{
    width:100%;
  }
  </style>

  <script>
  export default{
    data(){
      return {
        productName: '',
        prodNutrition: '',
        price:'',
        category:'',
        imgURL:''
        
      }
      },
      computed:{
        message(){
          return this.$store.state.message
  
        }
      },
    methods:{
      addProduct(){
        this.$store.dispatch('addProduct',{
          productName: this.productName,
          prodNutrition: this.productNutrition,
          price: this.price,
          category: this.category,
          imgURL: this.imgURL
          
        })
      }
    }
  
    }
  
  </script>