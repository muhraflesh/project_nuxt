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
  
</style>

