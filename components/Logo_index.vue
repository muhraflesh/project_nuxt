<template>
  <div class="VueToNuxtLogo box">
    <img src="Alam.jpg" class="image is-128x60">
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  
  position: relative;
  overflow: hidden;
  height: 40%;
  width: 70%;
}



@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>

