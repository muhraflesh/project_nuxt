<template>
    <section class="section">
        <div class="container">
            <div class="columns is-centered is-mobile"> 
                <div class="column is-5 box has-background-light">
                    <div class="field has-text-centered">
                            <p class="is-size-3 has-text-weight-bold"> Forgot Password? </p>
                            <br>
                            <figure class="image is-128x128 is-flex is-inline-block">
                                <img src="../components/fp.jpg">
                            </figure>
                            <br> <br>
                            <p>Don't Worry. Resetting your password is easy. </p>
                            <p>Tell us your registered email address below here!</p>
                            <br>
                            <Notification :message="pesan" v-if="pesan"/>
                        </div>
                        <form method="post" @submit.prevent="register">
                            <div class="field">
                                    <input
                                    class="input has-text-centered"
                                    type="email"
                                    placeholder="Email"
                                    v-model="email">
                            </div>
                            <div class="field">
                                <div class="control">
                                    <button class="button has-background-primary is-fullwidth has-text-white" to="#">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.is-horizontal-center {
  justify-content: center;
}
</style>

<script>
export default {
        components: {
            Notification,
        },
        data(){
            return {
                email:'',
                password:'',
                pesan: null

                

            }
        },

        methods: {
            async register(){
                try{
                    await this.$axios.post('',{
                        username: this.username,
                        email: this.email,
                        password: this.password

                    })
                  

                    this.$router.push('/')
                } catch (e) {
                    this.pesan = e.response.data.error.statusCode ;
                    if (this.pesan === 500) {
                    this.pesan = 'Server Error, Check Your Connection.'
                    } else if (this.pesan === 401) {
                    this.pesan = 'Invalid Email / Password.'
                    } else if (this.pesan === 400) {
                    this.pesan = 'Success!'
                    }
                }
            }
        }
    }
</script>