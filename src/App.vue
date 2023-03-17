
<template>
  <NavbarComp/>
  <RouterView/>
  <FooterComp/>

 
 
  
  
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  
  components: {
    NavbarComp, FooterComp
},
computed: {
    loggedUser(){
        return JSON.parse(localStorage.getItem("loggedUser"));
      }
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
