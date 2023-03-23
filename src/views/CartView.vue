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
              <td>{{item.imgURL}}</td>
              <td>{{item.productName}}</td>
              <td>
                <form class="form-inline">
                    <input class="form-control" type="text" value="1">
                    <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                    <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
                </form>
                </td>
                <td>{{item.price}}</td>
                <td>{{item.amout}}</td>



            </tr>
            
            
                  
                  
                 
                  
           
            
              <tr>
                  <td colspan="6">&nbsp;</td>
              </tr>
             
              
              <tr>
                  <td colspan="4" class="text-right"><strong>Total</strong></td>
                  <td>$88.00</td>
              </tr>
          </tbody>
      </table>
  </div>
</div>

<a href="#" class="btn btn-success"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
<a href="#" class="btn btn-primary pull-right">Next<span class="glyphicon glyphicon-chevron-right"></span></a>



</template>

<style>
</style>

<script>
export default {
 
 computed: {
   loggedUser(){
       return JSON.parse(localStorage.getItem("loggedUser"));
     },
   cart(){
          return this.$store.state.cart;
      }

 },
 created(){
      this.$store.dispatch('fetchCart')
  },

};

</script>