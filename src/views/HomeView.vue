<template>
  <div class="container-fluid home">
    <h1>Foodies Market</h1>
    <p>You are what you eat</p>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img src="https://i.postimg.cc/d3LCYnLw/home7.jpg" class="d-block rounded mx-auto d-block w-75" alt="CapeTown">
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://i.postimg.cc/mrbCjJ06/home11.png" class="d-block rounded mx-auto d-block w-75" alt="...">
        </div>  
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://i.postimg.cc/XY6Fyfr7/home4.jpg" class="d-block rounded mx-auto d-block w-75" alt="...">
        </div>               
        

        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://i.postimg.cc/gkSDxYQk/home10.jpg" class="d-block rounded mx-auto d-block w-75" alt="...">
        </div>
      </div>

      
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
 
  </div>
</template>

<script>


</script>
<style>
.home{
  text-align: center;
}
.home h1{
font-weight: bold;
margin: 1.5rem;
margin-bottom: 0 !important;
font-size: 5rem;
}
.home p{
margin: 1rem;
margin-top: 0 !important;
font-size: 2rem;

}

.carousel-control-prev-icon,
.carousel-control-next-icon {

background-color:#7CBB1E;

}

</style>
