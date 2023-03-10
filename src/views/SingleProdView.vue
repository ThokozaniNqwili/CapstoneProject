<template>
    <div class="container">
        
    </div>
</template>
<script>
export default {
    computed:{
        product(){
            return this.$store.state.product
        }
    },
    created(){
        this.$store.dispatch('fetchProduct', this.$route.params.id)
    }
}
</script>