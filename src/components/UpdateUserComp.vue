<template>
    <div>
     
  <button type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal"><i class="fa-solid fa-user-pen"></i>
    </button>
    
    
    <div class="modal fade" id="UpdateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eUpdateModalLabel">Update User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" >
            <label>First Name:</label><br>
            <input type="text" id="firstName" class="update" v-model="firstName" ><br><br>
            <label>Last Name:</label><br>
            <input type="text" id="lastName" class="update" v-model="lastName" > <br><br>
            <label>Email Address:</label><br>
            <input type="email" id="emailAdd" class="update" v-model="emailAdd" > <br><br>
            <label>Phone Number:</label><br>
            <input type="number" id="phoneNumber" class="update" v-model="phoneNumber" > <br><br>
            <label>User Role</label><br>
            <input type="text" id="userRole" class="update" v-model="userRole"> <br><br>
           
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div> 
    </div>
   </div>
  </template>
  <style>
  .update{
    width:100%;
  }
  </style>
  <script>
  export default {
    props: ['userData'],
    data(){
      return {
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        emailAdd:this.userData.emailAdd,
        phoneNumber:this.userData.phoneNumber,
        userRole:this.userData.userRole
    }
  },
  computed:{
      message(){
        return this.$store.state.message

      },
      user() {
      return this.$store.state.user;
      }
    },
  created() {
     this.$store.dispatch("updateUser", this.$route.params.id);
  },
    methods:{
    signup(){
      this.$store.dispatch('updateUser',{
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        phoneNumber: this.phoneNumber,
        userRole: this.userRole
      })
    }
  }
  
};
</script>