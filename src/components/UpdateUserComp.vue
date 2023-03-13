<template>
    <div>
     
  <button type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal"><i class="fa-solid fa-user-pen"></i>
    </button>
    
    
    <div class="modal fade" id="UpdateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eUpdateModalLabel">Add User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label>First Name:</label><br>
            <input type="text" class="update" ><br><br>
            <label>Last Name:</label><br>
            <input type="text" class="update" > <br><br>
            <label>Email Address:</label><br>
            <input type="email" class="update" > <br><br>
            <label>Phone Number:</label><br>
            <input type="number" class="update" > <br><br>
            <label>User Role</label><br>
            <input type="text" class="update" > <br><br>
            <label>Password</label><br>
            <input type="password" class="update"  > <br><br>
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
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  created() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  },
};
</script>