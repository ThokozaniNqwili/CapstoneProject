<template>
    <div>
  <button type="button" data-bs-toggle="modal" class="btnUpdateUser" :data-bs-target="'#UpdateUserModal' + `${userData.userId}` "><i class="fa-solid fa-user-pen"></i>
    </button>
    
    
    <div class="modal fade" :id=" 'UpdateUserModal' + `${userData.userId}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eUpdateModalLabel">Update User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" >
            <label>First Name:</label><br>
            <input type="text" id="firstName" class="update" :value="userData.firstName" ><br><br>
            <label>Last Name:</label><br>
            <input type="text" id="lastName" class="update" :value="userData.lastName"> <br><br>
            <label>Email Address:</label><br>
            <input type="email" id="emailAdd" class="update" :value="userData.emailAdd" > <br><br>
            <label>Phone Number:</label><br>
            <input type="number" id="phoneNumber" class="update" :value="userData.phoneNumber" > <br><br>
            <label>User Role</label><br>
            <input type="text" id="userRole" class="update" :value="userData.userRole" > <br><br>
           
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click.prevent="updateUser(userData.userId)" class="btn btn-primary">Save changes</button>
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
  .btnUpdateUser{
    border: none;
    color: #7cbd1e;
    background-color: transparent;
    font-size: 1rem;
  }
 
  </style>
  <script>
  export default {
    props: ["userData"],
   
    data(){
      return {
        firstName: '',
        lastName: '',
        emailAdd:'',
        phoneNumber:'',
        userRole:''
    }
  },
  computed:{
      message(){
        return this.$store.state.message

      },
    },
 
  
    methods:{
      updateUser(id) {
      this.$store.dispatch("updateUser", id);
    },
    
  }
  
};
</script>