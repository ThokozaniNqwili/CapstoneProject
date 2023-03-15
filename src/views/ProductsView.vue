<template>
    <div class="products">
        <SpinnerComp/>
         <div class="filterbox">  
            <input class="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search">
            <button type="button" class="btnPrice">
                <i class="fas fa-sort"></i> Price
              </button>
         
        </div> 
        <div class="row">
            <div class="col-6 col-sm-4 " v-for="product in products" :key="product.productId">
                <div class="card" >
                  <img :src="product.imgURL" class="card-img-top" alt="product" >
                  <div class="card-body text-center">
                    <h5 class="card-title "> {{product.productName}}</h5>
                    <p class="card-text">R {{product.price}}</p>
                    <RouterLink :to="{name: 'product', params: {id: product.productId}}" class="btnView">View Me</RouterLink>
                  </div> 
                </div>
                </div>
              </div>

    </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
export default{
    components: {
    SpinnerComp
    },

    computed:{
        products(){
            return this.$store.state.products
        }
    },
    created(){
        this.$store.dispatch('fetchProducts')
    }
}
</script>
<style>
.btnPrice{
    border: none;
    background-color: #bceb3c;
    width: 100%;
    font-size: 1.3rem;
}

.card{
    margin-top: 10%;
}
.filterbox{
    margin-top: 2%;
    text-align: center;
    border: 1px solid #bceb3c;
    width: 40%;
    transform: translateX(28rem);
}




</style>