<template>  
  <section class="login is-fullheight">
    <div class="login-body">
      <div class="container v-middle">
        <div class="columns login-page">
          <div class="column is-5 login-sidebar is-hidden-mobile">
            <div class="login-gradient-background">
              <h1>Login</h1>
            </div>
          </div>
          <div class="column is-7 login-form-wrapper">
              <div class="column is-12 field-box is-centered">
                <div class="column is-9 has-text-centered is-offside-1" style="padding-top: 20%">
                  <h1 class="login-heading" style="padding-left: 25%">Login Your Account</h1>
                  <p class="login-subheading" style="padding-left: 25%">Enter your username and password to log in</p> <br>
                  <div class="field">
                    <Notification :message="pesan" v-if="pesan" />
                  </div>
                  <form method="post" @submit.prevent="login" style="padding-left: 25%">
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input is-medium"
                         type="email" 
                         placeholder="Email" 
                         v-model="email"
                         required>
                        <span class="icon is-medium is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input is-medium" 
                        type="password" 
                        placeholder="Password" 
                        v-model="password" required>
                        <span class="icon is-medium is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                        <a class="login-btn">
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

  import Notification from '../components/Notification'
  export default { 
    components: {
      Notification,
    },
    data() {
      return{
        email: '',
        password:''
      }
    },
    methods: {
      async login(){
        try{
          await this.$axios.post("https://192.168.3.146:3000/api/user/login", {
              email: this.email,
              password: this.password
          })
        let auth = {
          accessToken: 'response.id'
        }
        this.$store.commit('setAuth', auth)

         
        Cookie.set('auth', auth) 

        this.$router.push('/profile')
        }

        catch (e) {
        this.pesan = e.response.data.error.statusCode ;
        }
      }
    }
  }
</script>
<style>
.login{
  min-height: 100vh;
  background-color: #f7f7f7;
}
.login .login-page{
  height: 100vh;display: flex;align-items: center;
}
.login .login-sidebar, .login-form-wrapper{
  background: #fff;height: 80vh;
}
.login .login-sidebar{
  background:  url(../static/logbag.jpg)center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login .login-sidebar::before{
  content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  z-index: 1;
	background-image: linear-gradient(to bottom right,#21AEA2,#6472A5);
	opacity: .8;
}
.login .login-sidebar .login-gradient-background{
  position: absolute;z-index: 2;
}
.login .login-sidebar .login-gradient-background h1{
  font-size: 2em;font-weight: 600;text-transform: uppercase;color: #ffffff;
}

.field-box .field{margin-bottom: 2.1em;}
.login-form-wrapper .field-box{
  display: flex;
  height: 80%;
  align-items: center;
}
.login-form-wrapper .field-box .login-heading{
  font-size: 1.95em;
}
.login-form-wrapper .field-box .login-subheading{
  margin-bottom: 2em;font-size: 1em;color: #787877;
}

.login-form-wrapper .field-box .login-btn{
  background: #6472A5;color: #ffffff;border-radius: 18px;padding: 0.6em 3em;
}
</style>

