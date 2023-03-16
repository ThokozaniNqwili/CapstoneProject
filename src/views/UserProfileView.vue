<template>
    <div class="profile">
      <UserProfileComp/>
    </div>
  </template>
  
  <script>
  import UserProfileComp from "@/components/UserProfileComp.vue";
  
  export default {
    name: "UserProfileView",
    components: {
       UserProfileComp,
    },
  };
  </script>