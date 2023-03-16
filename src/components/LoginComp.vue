<template>
    <div class="login">
      <h1>Login</h1>
      <div class="container" id="login">
        <div class="row justify-content-md-center">
          <div class="col">
            <img src="https://i.postimg.cc/hjgmLH8X/logo.png" alt="logo" class="img-fluid" id="loginLogo" >
            <div class="col-md-auto">
              <form @submit.prevent="signIn">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email Address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="loginEmail"
                    placeholder="Email Address"
                    name="email"
                    v-model="payload.emailAdd"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="loginPass"
                    placeholder=""
                    name="password"
                    v-model="payload.userPass"
                    required
                  />
                </div>
                <div class="mb-3">
                  <p class="lead">{{ message }}</p>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btnLogin" >Login</button>
                  
                </div>
                <a class="small text-muted" href="#!">Forgot password?</a>
                <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                    style="color: #393f81;">Register here</a></p>
              </form>
            </div>
  
          </div>
           
       
        </div>
      </div>
    </div>
  </template>
  <style>
  
  .login{
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #f1f864, white);
    
  }
  #login{
    background-color: white;
    width: 40%;
    
  }
  #loginLogo{
   width: 10rem !important;
  }
  
  .btnLogin,
  .btnPassword {
    width: 100%;
    background-color: #bceb3c;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    ;
  }
  
  </style>
  
  <script>
  export default {
    data() {
      return {
        payload:{
        emailAdd: "",
        userPass: "",
        }
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
        
      },
      message() {
        return this.$store.state.message;
      },
    },
    methods: {
      signIn() {
        this.$store.dispatch("login",this.payload)
        
      },
    },
  };
  </script>
  