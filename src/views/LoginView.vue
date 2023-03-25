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
                  type="password"
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
              <p class="newAccount">Don't have an account? <a href="/register"
                  >Register here</a></p>
            </form>
          </div>

        </div>
         
     
      </div>
    </div>
  </div>
</template>
<style scoped>

.login{
  height: 100%;
  width: 100%;
 
  
}
#login{
  background-color: white;
  width: 50%;
  box-shadow: 0px 0px 23px 10px #7cbd1e;
  padding: 2rem;
  
  
}
#loginLogo{
 width: 10rem !important;
}

.btnLogin{
  width: 100%;
  height: 2.5rem;
  background-color: #bceb3c;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  ;
}

.newAccount{
  font-size: 1.5rem;
  color: black;

}
.newAccount a{
    text-decoration: none;
    color:#7cbd1e;
}
@media screen and (min-width: 300px) and (max-width: 719px) {
  #login{
    width: 90%;

  }
  .newAccount{
    font-size: 1rem;
  }

}
@media screen and (min-width: 720px) and (max-width: 1079px) {
  #login{
    width: 70%;
  }
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
