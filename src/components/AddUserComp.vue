<template>
  <div>
   
<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus"></i> New User
  </button>
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label>First Name:</label><br>
          <input type="text" class="input" placeholder="First Name" required > <br><br>
          <label>Last Name:</label><br>
          <input type="text" class="input" placeholder="last Name" required > <br><br>
          <label>Email Address:</label><br>
          <input type="email" class="input" placeholder="Email Address" required > <br><br>
          <label>Phone Number:</label><br>
          <input type="number" class="input" placeholder="+27 648 534 8978" required > <br><br>
          <label>User Role</label><br>
          <input type="text" class="input" placeholder="Admin/User" required > <br><br>
          <label>Password</label><br>
          <input type="password" class="input" placeholder="" required > <br><br>
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
.input{
  width:100%;
}
</style>