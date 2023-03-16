<template>
    <div class="contact">
      <h1>Contact Us</h1>
  
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <form action="https://formspree.io/f/myyvbwyw" method="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name and Surname"
                  name="Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email_address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                  name="email"
                  required
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
                  maxlength="12"
                  placeholder="+27 82 656 5465"
                  name="number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
  
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#messageModal"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="col-sm-4">
            <img src="https://i.postimg.cc/Y2J65pd8/basket1-removebg-preview.png" alt="contact" class="img-fluid">

          </div>
          
        </div>
      </div>
    </div>
  </template>
  
<style>
.contact{
  background: linear-gradient(to right,#f1f864 , white);
}

.container {
    margin-bottom: 2rem;
  }

  
.contact h1{
    text-align: center;
}
  

.contact .btn {
    border: 1px solid transparent;
    background-color:  #bceb3c;
    border-radius: 1rem;
    justify-content: space-between;
    padding: 1rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color:black;
  }
  </style>
  