<template>
    <div id="products">
        <SpinnerComp/>
         <div class="filterbox">  
            
                <div class="row">
                  <div class="col">
                    <input class="search form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  </div>
                  <div class="col">
                    <button type="button" class="btnPrice"><i class="fas fa-sort"></i> Price </button>
                  </div>
                  <div class="col">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="filter" data-bs-toggle="dropdown" aria-expanded="false">
                          Filter by Category
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#">Fruits</a></li>
                          <li><a class="dropdown-item" href="#">Vegetables</a></li>
                          
                        </ul>
                      </div>
                  </div>
               
              </div>
            

            
          
         
        </div> 
        <div class="row">
            <div class="col-6 col-sm-4 " v-for="product in products" :key="product.productId">
                <div class="card" >
                  <img :src="product.imgURL" class="card-img-top" alt="product" >
                  <div class="card-body text-center fw-bold">
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
    width: 100%;
    height: 2.8rem;
    background-color: #bceb3c;
    font-size: 1.3rem;
    border: 1px solid grey;
    border-radius: 1.5%;
}
#filter, .dropdown-menu{
    width: 100%;
    font-size: 1.3rem;
    background-color:#bceb3c ;
    color: black;
    
}

#products .card{
    margin-top: 10%;
    height: 28rem;
    background-color: #f1f864;
}

#products .card:hover{
    animation: animate 2.5s 0.3s ease-in-out forwards;
}

#products .card-img-top{
    width: 100%;
    height: 20rem;

}

.filterbox{
    margin-top: 2%;
    text-align: center;
    
}
.search{
    height: 2.8rem;
}
.btnView{
    border: 1px solid black;
    padding: 0.6rem;
    text-decoration: none;
    color: black;
    background-color: #bceb3c;
    
}
@keyframes animate {
    0%{
        scale:0.6;
    }
    50%{
        scale:1.1;
    }
    100%{
        scale:0.8;
    }
}


</style>