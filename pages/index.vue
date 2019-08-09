<template>
  <div>
    <div class="hero-body flex-center is-mobile">
      <div class="container has-text-centered">
        <div class="column is-5" style="padding-top: 10%">
          <div class="image">
            <img src="../static/247.png" alt="Logo"><br>
          </div>
          <div>
            <p class="title is-size-5 has-text-left">
            SOLUSI247 is an ICT company established in 2000 focusing on large scale data processing applying RDBMS and massive parallel flat file processing.
            </p><br>
          </div>
          <div class="has-text-centered" >
            <a href="/login" class="button is-medium is-pulled-left is-rounded is-link is-outlined" style="padding-left:60px; padding-right: 60px">
              LOGIN
            </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

  <style>
  .hero-body::before {
  background-image: url(../static/comp.jpg);
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  }
  
  .button {
  font-weight: 500;
  box-shadow: 0 8px 6px rgba(50,50,93,.11);
  }
  </style>
  
  