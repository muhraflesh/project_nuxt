as<template>
<section>
  <div>
    
    <div class="hero background background-img is-large" style="background-image: url('kota.jpg')">
  <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="img">
            <img src="putih247.png"><br>
          </div>
            <button class="button is-medium is-rounded is-light is-outlined" style="padding-left:60px; padding-right: 60px">
              <a v-if="!$store.state.auth" href="/login" class="has-text-white">LOGIN</a>
              <a v-if="$store.state.auth" href="/profile" class="has-text-white">PROFILE</a>
            </button>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    
    <div class="container">
      <div class="card-columns">
        <div class="card is-shady" v-for="item in posts" v-bind:key="item.key" @click="openDetail(item)">
          <img class="card-img-top" :src="item.urlToImage" alt="Card image cap">
          <div class="card-body">
            <p class="card-text"><small class="text-muted">{{ item.author }} - {{ item.source.name }}</small></p>
            <h5 class="card-title subtitle has-text-weight-semibold"><a :href="item.url">{{ item.title }}</a></h5>
            <p class="card-text"><small class="text-muted">{{ item.publishedAt }}</small></p>
          </div>
        </div>        
      </div> <br>
      <div style="padding-left:30%">
        <button class="button btn-more is-rounded" @click="loadMore">Load More</button>
      </div>
      </div>
  <br/>
  
  </div>
  </section>
  </template>

  <script>
  import axios from 'axios'
  export default {
  methods: {
    
  },

  data () {
    return {
      allPost: [],
      posts: [],
      current: 9,
    }
  },
  mounted () {
    axios('https://newsapi.org/v2/top-headlines?country=id&apiKey=2d776f39c12a4ad1b4039016395b8b3c', {
      crossDomain: true
    }).then( ({ data }) => {
      this.allPost = data.articles
      data.articles.map((item, key) => {
        if (item.description !== null && this.posts.length < 9) {
          this.posts.push(item)
        }
      })
    })
  }  
}
  </script>

  <style>
  .img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  width: 500px
  }  
  
  .background::before {
  content: "";
  display: block;
  top: 0;
  left: 0;
  width: 1920px;
  height: 100%;
  opacity: 0.5;
  }
  .button {
  font-weight: 500;
  box-shadow: 0 8px 6px rgba(50,50,93,.11);
  }
  .button.is-rounded {
    padding-left: 10em;
    padding-right: 10em;}
.footer {
  border-top: 1px solid #EFEFEF;
  padding: 10px;
  text-align: center;
  color: #ABABAB;
}

  @media (min-width: 768px) {  
  .card-columns {column-count: 3;}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
 .card-columns {column-count: 3;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
   .card-columns {column-count: 3;} 
}
  </style>
  
  
