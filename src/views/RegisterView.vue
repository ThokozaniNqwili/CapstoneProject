<template>
    <div class="signup">
      <h1>Sign Up</h1>
      
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                <form @submit.prevent="signup">
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
                      v-model="firstName"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >LastName</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="LastName"
                      name="LastName"
                      required
                      v-model="lastName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Email Address</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email Address"
                      name="Email"
                      required
                      v-model="emailAdd"
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
                        maxlength="12"
                        required
                        v-model="phoneNumber"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                        name="password"
                        required
                        v-model="userPass"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Confirm Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                        name="password1"
                        v-model="confirmPass"
                      />
                    </div>
                  
      
                  <div class="col-auto">
                    <router-link to="/login"><button
                      type="submit"
                      class="btnSignUp"
        
                    >
                      Sign Up
                    </button></router-link>>
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
<script>
export default{
  data(){
    return {
      firstName: '',
      lastName: '',
      emailAdd:'',
      phoneNumber:'',
      userPass:'',
      confirmPass:''
    }
    },
    computed:{
      message(){
        return this.$store.state.message

      }
    },
  methods:{
    signup(){
      this.$store.dispatch('createUser',{
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        phoneNumber: this.phoneNumber
      })
    }
  }

  }


</script>