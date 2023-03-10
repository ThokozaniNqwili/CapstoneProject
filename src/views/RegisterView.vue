<template>
    <div class="signup">
      <h1>Sign Up</h1>
      
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                <form>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >FirstName</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="FirstName"
                      name="FirstName"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >LastName</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="LastName"
                      name="LastName"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Email Address</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email Address"
                      name="Email"
                    />
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Phone Number</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="+27 833 449 1237"
                        name="number"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Password</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                        name="password"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Confirm Password</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                        name="password1"
                      />
                    </div>
                  
      
                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btnSignUp"
                      data-bs-toggle="modal"
                      data-bs-target="#messageModal"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-sm-4">
              <img src="https://i.postimg.cc/5ycXRtfC/basket-removebg-preview.png" alt="contact" class="img-fluid" >


                </div>

              
            </div>
              


          </div>

            
    </div>
          
</template>
<style>
.signup{
  background: linear-gradient(to right,#f1f864 , white);
}

.signup h1{
    text-align: center;
}

</style>