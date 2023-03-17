<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          src="https://i.postimg.cc/hjgmLH8X/logo.png"
          alt="logo"
          width="75"
          height="75"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/products">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Sign Up</a>
          </li>
        </ul>

        <ul class="navbar-nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login"
              >Sign In</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/admin">Manage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile" v-if="user">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart" v-if="user">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
nav {
  background-color: #f1f864 !important;
  font-size: 1.2rem !important;
  color: black !important;
}
</style>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    loggedUser() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.user =
      this.loggedUser || JSON.parse(localStorage.getItem("loggedUser"));
  },
};
</script>
