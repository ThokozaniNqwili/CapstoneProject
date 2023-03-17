<template>
    <div class="about">
      <CartComp />
    </div>
  </template>
  
  <script>
  import CartComp from "@/components/CartComp.vue";
  
  export default {
    name: "CartView",
    components: {
      CartComp,
    },
  };
  </script>