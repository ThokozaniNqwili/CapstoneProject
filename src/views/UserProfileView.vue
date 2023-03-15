<template>
    <div class="profile"  >
        <div class="container" >
            <div class="row d-flex justify-content-center">
                <img src="https://i.postimg.cc/mZ70qtgL/profile.webp" alt="User" class="img-fluid img-thumbnail" >
            </div>
            <div class="row">
                <h3>Profile Details</h3>
                <p class="text-sm-start">First Name : {{user?.firstName}}</p>
                <p class="text-sm-start">Last Name :{{user?.lastName}}</p>
                <p class="text-sm-start">Email Address :{{user?.emailAdd}}</p>
                <p class="text-sm-start">Phone Number :{{user?.phoneNumber}}</p>
                
            </div>

        </div>

    </div>

</template>
<script>

export default {
   
  computed: {
    user(){
        return JSON.parse(localStorage.getItem("loggedUser"));

      }
  },
 
};

</script>
<style>
.profile{
    text-align: center;
}

.img-fluid{
    width: 20rem !important;
}
</style>