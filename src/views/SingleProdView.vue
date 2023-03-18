<template>
  <div id="productpage">
      <h1 class="card-title "> {{product?.productName}}</h1>
      
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                  <div class="card">
                      <img :src="product?.imgURL" class="card-img-top" alt="product" />
                    </div>
              </div>
                  <div class="col-sm-6">
                      <div class="card info">
                          <h5 class="card-title "> {{product?.productName}}</h5>
                          <h5 class="card-text">R {{product?.price}}</h5><br>
                          <h5 class="card-text">Nutrition </h5><h6>{{product?.prodNutrition}}</h6> 
                          <button type="submit" class="btnCheckout"><i class="fa-solid fa-cart-shopping"></i></button>
                          
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
// methods:{
//   addToCart(){
//     this.$store.dispatch('addToCart')
//   }
// }
};
</script>

<style>
#productpage .card{
border: none !important;

}
#productpage .card-title{
margin: 1rem;
text-decoration:solid;
}
.info{
text-align: center;

}
.btnCheckout{
border: none;
background-color: transparent;
}
#productpage .fa-solid {
font-size: 3rem;
margin: 2rem;
color: #BCEB3C;


}
</style>
