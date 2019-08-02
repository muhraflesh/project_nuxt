<template>
    <section class="section">
            <div class="container">  


                
                    <div class="columns is-centered is-mobile">

                            <div class="column is-5 box has-background-light">
                                <div class="field ">
                                    <p class="is-size-3 has-text-weight-bold has-text-primary">Reset Password</p>
                                    <p class="has-text-weight-bold">Please Reset Your Password</p>
                                    <br>
                                </div>
                                <div class="is-divider"></div>


                                <Notification :message="pesan" v-if="pesan"/>

                                <form method="post" @submit.prevent="reset">

                                   
                                    <div class="field">
                                        <input 
                                        class="input" 
                                        type="password" 
                                        placeholder="New Password"
                                        v-model="first_pass"
                                        required>
                                    </div>
                                    <div class="field">
                                        <input
                                        class="input"
                                        type="password"
                                        placeholder="Confirm Password"
                                        v-model="sec_pass"
                                        required>
                                    </div>
                                    <div class="field">
                                        <div class="control"> 
                                            <label class="checkbox">
                                                <input type="checkbox">
                                                I agree to the <a href="#">Terms of Use & Privacy Policy</a>
                                            </label>

                                            <br>
                                          

                                            <br><br>
                                        </div>
                                    </div>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button has-background-primary has-text-white" type="submit"> Reset Password </button>
                                        </div>
                                        <div class="control">
                                            <button class="button has-background-primary has-text-white" href="/reset_pass"> Cancel </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
</div>
    </div>
    </section>
</template>

<script>
    import Notification from '../components/Notification'
    export default {
        components: {
            Notification,
        },
        data(){
            return {
                first_pass:'',
                sec_pass:'',
                pesan: null
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