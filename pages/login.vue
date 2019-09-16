<template>  
  <section class="login is-fullheight">
    <div class="login-body">
      <div class="container v-middle">
        <div class="columns login-page">
          <div class="column is-5 login-sidebar is-hidden-mobile">
            <div class="login-gradient-background">
              <div class="image" style="padding-top: 40%">
                <img src="putih247.png" alt="Logo"><br>
              </div>
            </div>
          </div>
          <div class="column is-7 login-form-wrapper">
              <div class="column is-12 field-box is-centered">
                <div class="column is-9 has-text-centered" style="padding-top: 20%">
                  <h1 class="login-heading" style="padding-left: 25%">Login Your Account</h1>
                  <p class="login-subheading" style="padding-left: 25%">Enter your username and password to log in</p> <br>
                  <form method="post" @submit.prevent="login" style="padding-left: 25%">
                    <Notification :message="pesan" v-if="pesan" />                    
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input"
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
                        <input 
                        class="input"
                        placeholder="password"
                        :type="showPassword ? 'text' : 'password'" 
                        label="Password"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-slash'"
                        @click:append="showPassword = !showPassword">
                        
                          
                      </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                      <div class="control">
                        <button class="button login-btn is-primary is-fullwidth">
                          Login
                        </button>
                      </div>
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

const passwordField = document.querySelector('#password')

const Cookies = process.client ? require('js-cookie') : undefined
import axios from 'axios'
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
        passwordFieldType: 'password',
        showPassword: false,
        
        
      }
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      async login(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/pengguna/login?include=user`, {
              email: this.email,
              password: this.password
          })
        const auth = data.id
        const user = data.userId
        const team = data.user.team_name_id
        const role = data.user.role
        console.log(auth)
        console.log(user)
        console.log(team)
        console.log(role)

        if(role === "admin") {
          var admin = role
          self.$store.commit('setAdmin', admin)
          Cookies.set('admin', admin);
        } else if (role === "leader") {
          var leader = role
          self.$store.commit('setLeader', leader)
          Cookies.set('leader', leader);
        }

        self.$store.commit('setAuth', auth)
        Cookies.set('auth', auth);

        self.$store.commit('setUser', user)
        Cookies.set('user', user);

        self.$store.commit('setTeam', team)
        Cookies.set('team', team);
        
        await this.$axios.get(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/profil?access_token=`+this.$store.state.auth)
        .then(resp => {
          const datauser = resp.data
          this.$store.commit('setData', datauser)
          Cookies.set('datauser', datauser);
        
          console.log(this.$store.state.data);
        })
    
        self.$router.push('/profile')
        }
        catch (e) {
          this.pesan = e.response.data.error.statusCode
          if (this.pesan = 401){
            this.pesan="Invalid Email or Password"
          }
        }
      },
    
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
  background: #6472A5;color: #ffffff;border-radius: 18px;padding: 0em 3em;
}

.image{
  height: 350px;
  width: 350px
}
</style>


