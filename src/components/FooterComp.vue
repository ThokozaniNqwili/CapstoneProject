<template>
    <footer>
        <ul class="user">
            <li><a href="/">Sign In</a></li>
            <li><a href="/products">Manage</a></li>
            <li><a href="/abouut">Profile</a></li>
            <li><a href="/contact">Cart</a></li>
            
          </ul>
          <ul class="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/admin">Manage</a></li>
          </ul>
          <p>&copy;2023 Thokozani Nqwili | All Rights Reserved</p>
    </footer>
    
     
    
</template>
  
<style>
footer {
    position: relative;
    background-color:#FED049;
    min-height: 10%;
    padding: 1em 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  footer .navbar,
  footer .user {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  footer .navbar,
  footer .user li {
    list-style: none;
  }
  footer .navbar,
  footer .user li a {
    font-size: 1em;
    color: black;
    margin: 0 1em;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;
  }
  footer .navabar,
  footer .user li a:hover {
    opacity: 1;
  }
  footer p {
    color: black;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 0.7em;
  }
  
    

</style>
  