<template>
    <section class="section">
            <div class="container">  
                
                    <div class="columns is-centered is-mobile">
                            <div class="column is-5 box has-background-light">
                                <div class="field ">
                                    <p class="is-size-3 has-text-weight-bold has-text-primary">Sign Up</p>
                                    <p class="has-text-weight-bold">Please fill in this form to create an account!</p>
                                    <br>
                                </div>
                                <div class="is-divider"></div>
                                <Notification :message="pesan" v-if="pesan"/>
                                <form method="post" @submit.prevent="register">
                                    <div class="field">
                                        <input 
                                        class="input" 
                                        type="text" 
                                        placeholder="Username"
                                        v-model="username"
                                        required>
                                    </div>
                                    <div class="field">
                                        <input 
                                        class="input" 
                                        type="email" 
                                        placeholder="Email"
                                        v-model="email"
                                        required>
                                    </div>
                                    <div class="field">
                                        <input
                                        class="input"
                                        type="password"
                                        placeholder="Password"
                                        v-model="password"
                                        required>
                                    </div>
                                    <div class="field">
                                        <div class="control"> 
                                            <label class="checkbox">
                                                <input type="checkbox">
                                                I agree to the <a href="#">Terms of Use & Privacy Policy</a>
                                            </label>
                                            <br><br>
                                        </div>
                                    </div>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <a class="button has-background-primary has-text-white" @click="register"> Sign Up </a>
                                        </div>
                                        <div class="control">
                                            <a class="button has-background-primary has-text-white" href="/"> Cancel </a>
                                        </div>
                                    </div>
                                </form>
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
                username:'',
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