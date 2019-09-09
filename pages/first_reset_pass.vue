<template>
<section class="reset is-fullheight">
    <div class="rest-body">
        <div class="container v-middle">
        <div class="columns reset-page is-centered is-mobile">
            <div class="column is-7 reset-form-wrapper">
            <div class="column is-12 field-box is-centered">
                <div class="has-text-centered form" style="padding-top: 20%">
                    <h1 class="reset-heading">Reset Your Password</h1>
                    <p class="reset-subheading" >Please Enter Your Email Address</p> <br> 
                
                <form method="post" @submit.prevent="reset_email">
                  <Notification :message="pesan" v-if="pesan" />
                    <div class="field" style="margin-bottom: 3em">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input"
                         type="email" 
                         placeholder="Email" 
                         v-model="email"
                         required>
                        <span class="icon is-left">
                          <i class="fa fa-envelope"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered is-mobile">
                      <div class="control">
                        <button class="reset-btn">
                          Reset Password
                        </button>
                    </div>
                      <nuxt-link to="/">
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
const Cookie = process.client ? require('js-cookie') : undefined
  import Notification from '../components/Notification'

  export default { 
    components: {
      Notification,
    },
    data() {
      return{
        email:'',
        pesan: null
      }
    },
    
    methods: {
      async reset_email(){
        try{
          var self = this
            const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user/reset`, {
             email: this.email
            })
            this.pesan = data.code
            if (this.pesan = 200){
              self.$router.push('/first_reset_pass2')
              
            }
            this.pesan = "Invalid Email Address"
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
  margin-bottom: 5em;font-size: 1em;color: #787877;
}

.reset-form-wrapper .field-box .reset-btn{
  background: #6472A5;color: #ffffff;border-radius: 10px;padding: 0.5em 3em;
}
.reset-form-wrapper .field-box .cancel-btn{
    background: #8c8c8c;color:  #ffffff;border-radius: 10px;padding: 0.5em 3em;
}

</style>