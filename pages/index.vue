<template>
  <section>
  
    <div class="container">
      <div>
        <br/>
        <h1 class="has-text-weight-bold has-text-primary is-size-3 title"> </h1>
      </div>
      <carousel :per-page="1"
                :autoplay="true"
                :loop="true"
                :pagination-padding="5"
                :autoplay-timeout="2500"
                :pagination-active-color=blue>
        <slide>
          <img src="247_1.jpg" />
        </slide>
        <slide>
          <img src="247_2.jpg" />
        </slide>
        <slide>
          <img src="247_3.jpg" />
        </slide>
        <slide>
          <img src="247_4.jpg" />
        </slide>
        <slide>
          <img src="solusi.png" />
        </slide>
      </carousel>

    </div>
   </section>
 
</template>
<script>
  import { Carousel, Slide } from '~/node_modules/vue-carousel';
  export default { 
    components: {
      Carousel,
      Slide
    },

    data() {
      return {
      
      }
    },
  
    methods: {
    
    },
    
  }
</script>
<style>
  .title{
    padding-top: 2px;
    padding-bottom: 2px;
  }
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
  .VueCarousel-slide {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
  height: 500px;
  }
</style>

