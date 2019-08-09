<template>  
  <div class="container has-margin-top-50 justify-center is-mobile">
        <div class="columns is-centered ">
            <div class="column hero has-background-primary is-5 has-text-white">
              <p class="is-size-2 has-text-centered"><br>
                Hello!
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>
              <div class="control is-centered" style="padding-left:35%; padding-right:20%; padding-bottom:20%"> 
                  <button class="button has-background-white is-medium is-hovered is-centered is-rounded">
                     Lorem Ipsum </button>
                </div>
            </div>
            <div class="column">
              <div class="columns is-centered">
                <div class="column">
                    <div class="has-text-primary has-text-centered"> 
                        <a href="#" class="image is-10x4">
                        <img src="solusi.png" >
                        </a>
                        <br>
                      </div>
                      <div class="field">
                      <Notification :message="pesan" v-if="pesan" />
                      </div>
                    <form method="post" @submit.prevent="login" style="padding-left: 25%; padding-right:25%">
                        <div class="field">
                            <p class="control has-icons-left">
                              <input 
                              class="input" 
                              type="email" 
                              placeholder="Email"
                              v-model="email">
                              <span class="icon is-small is-left">
                                <i class="fa fa-user"></i>
                              </span>
                              <br> 
                            </p>
                        </div>
                        <div class="field">
                          <p class="control has-icons-left">
                              <input 
                              class="input" 
                              type="password" 
                              placeholder="Password"
                              v-model="password">
                              <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                              </span>
                              <br>
                          </p>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button type="login" class="button has-background-primary is-fullwidth has-text-white">
                                  Log In
                                </button>
                              </div>
                        </div>
                    </form>
                    <div class="has-text-centered" style="margin-top: 30px">
                          <p> Don't have an account?
                            <nuxt-link to="/register"> Register   </nuxt-link>
                            <nuxt-link to="/forgotpass"> Forgot Password </nuxt-link>
                          </p>
                          <p>or Sign in with social network</p>
                            <ul class="lis-inline">
                                <a target="_blank" href="https://www.facebook.com/" class="btn-social btn-outline">
                                  <i class="fa fa-fw fa-facebook circle"></i></a>
                                <a target="_blank" href="https://www.google.com/" class="btn-social btn-outline">
                                  <i class="fa fa-fw fa-google circle"></i></a>
                                <a target="_blank" href="https://www.twitter.com/" class="btn-social btn-outline">
                                  <i class="fa fa-fw fa-twitter circle"></i></a>
                            </ul>
                    </div>
                </div>
                
              </div>
            </div>
            </div>
    </div>

    
  
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

  import Notification from '../components/Notification'
  export default { 
    middleware: 'notAuthenticated',
    components: {
      Notification,
    },
    data() {
      return{
        email: '',
        password:'',
        pesan: null,
      }
    },
    methods: {
      async login(){
        setTimeout(() => { 
          this.$axios.post('https://192.168.3.106:3000/api/user/login', {
       
              email: this.email,
              password: this.password
           
          })
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
          

        
        this.$store.commit('setAuth', auth)
        
         
        Cookie.set('auth', auth) 

        this.$router.push('/profile')
        }, 1000)
        
      
        
        
      }
    }
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

