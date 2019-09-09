<template>
<section class="reset is-fullheight">
    <div class="rest-body">
        <div class="container v-middle">
        <div class="columns reset-page is-centered is-mobile">
            <div class="column is-7 reset-form-wrapper">
            <div class="column is-12 field-box is-centered">
                <div class="has-text-centered form" style="padding-top: 20%">
                    <h1 class="reset-heading">Reset Your Password</h1>
                    <p class="reset-subheading" >Please Fill The Form to Reset Your Password</p>
                <div class="notification is-info">
                  Check your email to get your <strong>Token</strong>
                </div> 
                <form method="post" @submit.prevent="reset">
                    <Notification :message="pesan" v-if="pesan" />

                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input"
                         type="password" 
                         placeholder="New Password" 
                         v-model="new_pass"
                         required>
                        <span class="icon is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" 
                        type="password" 
                        placeholder="Confirm Password" 
                        v-model="confr_pass" required>
                        <span class="icon is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" 
                        type="text" 
                        placeholder="Token" 
                        v-model="token" required>
                        <span class="icon is-left">
                          <i class="fa fa-key"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered is-mobile">
                      <div class="control">
                        <button class="reset-btn">
                          Reset Password
                        </button>
                    </div>
                      <nuxt-link to="/reset_pass">
                        <button class="cancel-btn">
                        Cancel
                        </button>
                      </nuxt-link>
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
  const Cookies = process.client ? require('js-cookie') : undefined
  import Notification from '../components/Notification'
  export default {
    components: {
      Notification,
    },
    data() {
      return{
        new_pass:'',
        confr_pass:'',
        token:'',
        pesan: null
      }
    },
    methods: {
      async reset(){
        try{
          var self = this
            await this.$axios.post(`${this.$axios.defaults.baseURL}/user/reset-password?access_token=`+this.token ,{
                newPassword: this.new_pass,         
            }) 
            if (this.new_pass != this.confr_pass) {
                this.pesan = "Your Password is not match"
            } else {
                self.$router.push('/first_login')
            }
        } 
        catch (e) {       
      }
      }
    }
  }
</script>

<style>
.form{
justify-content: center;
margin-left: auto;
margin-right: auto;
}
.reset{
  min-height: 100vh;
  background-color: #f7f7f7;
}
.reset .reset-page{
  height: 100vh;
  display: flex;
  align-items: center;
}
.reset .reset-form-wrapper{
  background: #fff;
  height: 80vh;
}

.field-box .field{margin-bottom: 2.1em;}
.reset-form-wrapper .field-box{
  display: flex;
  height: 80%;
  align-items: center;
}
.reset-form-wrapper .field-box .reset-heading{
  font-size: 1.95em;
}
.reset-form-wrapper .field-box .reset-subheading{
 font-size: 1em;color: #787877;
}

.reset-form-wrapper .field-box .reset-btn{
  background: #6472A5;color: #ffffff;border-radius: 10px;padding: 0.5em 3em;
}
.reset-form-wrapper .field-box .cancel-btn{
    background: #8c8c8c;color:  #ffffff;border-radius: 10px;padding: 0.5em 3em;
}
</style>
