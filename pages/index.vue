
<template>
  <section class="section">
  
    <div class="container">
      
      <figure class="image is-128x60">
        <img src="Alam.jpg" class="image is-128x60">
      </figure>

      <nuxt-link to="/login">
      Login
      </nuxt-link>

      
    </div>
  </section>
</template>
<script>
  import Navbar from '../components/Navbar'
  export default { 
    components: {
      Navbar,
    },
    
  }
</script>
<style>
  
  .circle{
	border-radius: 50%;
	margin: 0.15em;
	font-size: 1.5em;
	}
  .fa-facebook{
  background: #3B5998;
	color: #FFFFFF;
  padding: 0.05em;
  }
  .fa-google{
  color: #FFFFFF;
  background: #dd4b39;
  padding: 0.05em 0.05em;
  }
  .fa-twitter{
  background: #4099FF;
	color: #FFFFFF;
  padding: 0.05em;
  }
</style>

