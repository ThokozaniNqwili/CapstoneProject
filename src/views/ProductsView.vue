<template>
    <div class="products">
      <ProductsComp />
    </div>
  </template>
  
  <script>
  import ProductsComp from "@/components/ProductsComp.vue";
  
  export default {
    name: "ProductsView",
    components: {
      ProductsComp,
    },
  };
  </script>