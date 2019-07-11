<template>
  <section>
  
    <div class="container">
      

      <Logo_index/>

    </div>
   </section>
 
</template>
<script>
  import Logo_index from '../components/Logo_index'
  export default { 
    components: {
      Logo_index,
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
  .links {
  padding-top: 15px;
  }
  .container{
  justify-content: center;
  align-items: center;
  text-align: center;
  }
</style>

