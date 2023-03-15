
<template>
  <NavbarComp/>
  <RouterView/>
 
 
  
  
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'

export default {
  
  components: {
    NavbarComp,
}
}
</script>

<style>
#app{
  font-family: 'Courier New', Courier, monospace;
  
}

h1{
  text-align: center;
  font-weight: bolder;
}



</style>
