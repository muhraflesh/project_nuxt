<template>  
  <section class="reset is-fullheight">
    <div class="reset-body">
      <div class="container v-middle">
        <div class="columns reset-page is-centered is-mobile">
          <div class="column is-7 reset-form-wrapper">
              <div class="column is-12 field-box is-centered is-offside-1">
                <div class="column is-9 has-text-centered" style="padding-top: 20%">
                  <h1 class="reset-heading" style="padding-left: 25%">Reset Your Password</h1>
                  <p class="reset-subheading" style="padding-left: 25%">Please Reset Your Password</p> <br>
                  <div class="field">
                    <Notification :message="pesan" v-if="pesan" />
                  </div>
                  <form method="post" @submit.prevent="reset" style="padding-left: 25%">
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input is-medium"
                         type="password" 
                         placeholder="New Password" 
                         v-model="first_pass"
                         required>
                        <span class="icon is-medium is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input is-medium" 
                        type="password" 
                        placeholder="Confirm Password" 
                        v-model="sec_pass" required>
                        <span class="icon is-medium is-left">
                          <i class="fa fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                I agree to the <a href="#">Terms of Use & Privacy Policy</a>
                            </label>
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-centered reset-btn-group">
                      <p class="control">
                        <a class="reset-btn">
                          Reset Password
                        </a>
                      </p>
                      <p class="control">
                        <a class="cancel-btn">
                        Cancel
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
        first_pass:'',
        sec_pass:''
      }
    },
    methods: {
      async reset(){
        try{
            if (this.first_pass != this.sec_pass) {
                this.pesan = "Your Password is not match"
            }
            await this.$axios.post('https://192.168.3.166:3000/api/user/reset-password?access_token=' + env.accessToken ,{
                newPassword: this.first_pass,         
            }) 
        } catch (e) {       
      }
      }
    }
  }
</script>
<style>
.reset{
  min-height: 100vh;
  background-color: #f7f7f7;
}
.reset .reset-page{
  height: 100vh;display: flex;align-items: center;
}
.reset .reset-form-wrapper{
  background: #fff;height: 80vh;
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
  margin-bottom: 2em;font-size: 1em;color: #787877;
}

.reset-form-wrapper .field-box .reset-btn-group .reset-btn{
  background: #6472A5;color: #ffffff;border-radius: 10px;padding: 0.57em 2em;
}
.reset-form-wrapper .field-box .reset-btn-group .cancel-btn{
    background: #8c8c8c;color:  #ffffff;border-radius: 10px;padding: 0.57em 2em;
}

</style>

