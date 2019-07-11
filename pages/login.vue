<template>
  <div>
    
  <div class="container has-margin-top-100 justify-center">
        <div class="columns is-centered ">
            <div class="column hero has-background-primary is-5 has-text-white">
              <p class="is-size-2 has-text-centered"><br>
                Hello!
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>
              <div class="control is-centered" style="padding-left:35%; padding-right:20%; padding-bottom:20%"> 
                  <button class="button has-background-white is-medium" style="border-radius:30px" id="ShowModal">
                     Lorem Ipsum </button>
                </div>
            </div>
            <div class="column">
              <div class="columns is-centered">
                <div class="column">
                    <div class="is-size-1 has-text-primary has-text-centered has-text-weight-bold"> 
                        <font>WEBBBOOOO!!</font>
                        <br><br><br>
                      </div>
                      <Notification :message="error" v-if="error" />
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
                                <button type="submit" class="button has-background-primary is-fullwidth has-text-white">
                                  Log In
                                </button>
                              </div>
                        </div>
                    </form>
                    <div class="has-text-centered" style="margin-top: 30px">
                          <p> Don't have an account?
                            <nuxt-link to="/signin"> Register   </nuxt-link>
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

    <div class="modal" id="welc">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title"> Welcome! </p>
          </header>
          <section class="modal-card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </section>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>
<script>
  import Notification from '../components/Notification'
  export default { 
    components: {
      Notification,
    },
    data() {
      return{
        email: '',
        password:'',
        error: null
      }
    },
    methods: {
      async login(){
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })

          this.$router.push('/home')
        } catch (e){
          this.error = e.response.data.message;
        }
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

