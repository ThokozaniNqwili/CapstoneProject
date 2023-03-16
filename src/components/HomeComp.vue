<template>
    <div class="container-fluid home">
      <h1>Foodies Market</h1>
      <p>You are what you eat</p>
      <div class="item">
        <div><img src="https://i.postimg.cc/SNTtHJSp/banana-removebg-preview.png" alt="banana" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/cJFzx4YQ/cauliflower-removebg-preview.png" alt="cauliflower" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/YqHpjDYS/onion-removebg-preview.png" alt="onion" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/9fF00g39/peppers-removebg-preview.png" alt="pepper" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/ydxK42Mf/grapes-removebg-preview.png" alt="grapes" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/kMjVSmM5/orange-removebg-preview.png" alt="orange" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/FHv75sDD/tomato-removebg-preview.png" alt="tomato" width="75" height="75"></div>
      </div>
      <div class="item item1">
        <div><img src="https://i.postimg.cc/SNTtHJSp/banana-removebg-preview.png" alt="banana" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/cJFzx4YQ/cauliflower-removebg-preview.png" alt="cauliflower" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/YqHpjDYS/onion-removebg-preview.png" alt="onion" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/9fF00g39/peppers-removebg-preview.png" alt="pepper" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/ydxK42Mf/grapes-removebg-preview.png" alt="grapes" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/kMjVSmM5/orange-removebg-preview.png" alt="orange" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/FHv75sDD/tomato-removebg-preview.png" alt="tomato" width="75" height="75"></div>
      </div>
      <div class="item item2">
        <div><img src="https://i.postimg.cc/SNTtHJSp/banana-removebg-preview.png" alt="banana" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/cJFzx4YQ/cauliflower-removebg-preview.png" alt="cauliflower" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/YqHpjDYS/onion-removebg-preview.png" alt="onion" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/9fF00g39/peppers-removebg-preview.png" alt="pepper" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/ydxK42Mf/grapes-removebg-preview.png" alt="grapes" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/kMjVSmM5/orange-removebg-preview.png" alt="orange" width="75" height="75"></div>
        <div><img src="https://i.postimg.cc/FHv75sDD/tomato-removebg-preview.png" alt="tomato" width="75" height="75"></div>
      </div>
   
    </div>
  </template>
  
  <script>
  
  
  </script>
  <style>
  .home{
    height:100%;
    width:100%;
    position:absolute ;  background:radial-gradient(#f1f864,#fcf9f9);
    }
  
  .item{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }
  .item div{
  position:absolute ;
  display:block ;
  }
  .item div:nth-child(1){
    left:20%; 
    animation:animate 15s linear infinite ;
    animation-delay:-2s;
  
  }
  .item div:nth-child(2){
    left:70%; 
    animation:animate 15s linear infinite ;
    animation-delay:-4s;
  }
  .item div:nth-child(3){
    left:10%; 
    animation:animate 20s linear infinite ;
    animation-delay:-7s;
    
  }
  .item div:nth-child(4){
    left:50%; 
   animation:animate 18s linear infinite ; 
   animation-delay:-5s;
  }
  .item div:nth-child(5){
    left:85%; 
    animation:animate 14s linear infinite ;
    animation-delay:-5s;
  }
  .item div:nth-child(6){
    left:15%; 
    animation:animate 16s linear infinite ;
    animation-delay:-10s;
  }
  .item div:nth-child(7){
    left:90%; 
    animation:animate 15s linear infinite ;
    animation-delay:-4s;
  }
  
  @keyframes animate{
    0%{
        opacity:1;
        top:-10%;
        transform:translateX (20px) rotate(0deg);
    }
    20%{
        opacity:0.8;
        transform:translateX (-20px) rotate(45deg);
    }
    40%{
  
        transform:translateX (-20px) rotate(90deg);
    }
    60%{
        
       transform:translateX (-20px) rotate(135deg); 
    }
    80%{
    
        transform:translateX (-20px) rotate(180deg);
    }
    100%{
        
        top:110%;
        transform:translateX (-20px) rotate(225deg);
    }
    }
  .item1{
    transform: rotateX(90deg);
  }
  .home h1{
    position:absolute ;
    top:30%;
    font-weight: bolder;
    width:100%;
    font-size:4em;
    text-align:center;
    color:black;
    transform:translateY (-50%);
  }
  .home p{
    position:absolute ;
    font-style: oblique;
    top:40%;
    font-size:2em;
    text-align:center;
    color:black;
    left: 37%;
  }
  </style>