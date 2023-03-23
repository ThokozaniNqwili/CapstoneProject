
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

#app h1{
  text-align: center;
  color: #7cbd1e;
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
}



</style>
