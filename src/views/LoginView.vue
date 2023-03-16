<template>
  <div class="login">
    <LoginComp />
  </div>
</template>

<script>
import LoginComp from "@/components/LoginComp.vue";

export default {
  name: "LoginView",
  components: {
    LoginComp,
  },
};
</script>