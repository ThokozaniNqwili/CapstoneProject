<template>
    <div class="product">
        <h1 class="card-title "> {{product.productName}}</h1>
        
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <img :src="product.imgURL" class="card-img-top" alt="product" />
                      </div>
                </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 class="card-title "> {{product.productName}}</h5>
                            <h5 class="card-text">R {{product.price}}</h5>
                            <h5 class="card-text">Quantity Available </h5><br><h5>{{product.prodQuantity}}</h5> 
                            <h5 class="card-text">Nutrition </h5><br><h5>{{product.prodNutrition}}</h5> 
                            <button type="btnCheckout" >Checkout</button>
                            
                        </div>



                    
                
  
  
                  </div>
  
                
              </div>
                
  
  
            </div>
  
              
      </div>



</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  created() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  },
};
</script>
