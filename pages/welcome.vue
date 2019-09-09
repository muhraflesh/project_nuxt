<template>
    <section class="section main-content columns is-fullheight">
         <a class="button is-success is-outlined">Success</a>
                            <div class="modal is-active" id="modal">
                                <div class="modal-background" @click="closemodal"></div>
                                <div class="modal-card modcard">
                                    <header class="modal-card-head">
                                    <p class="modal-card-title">WELCOME</p>
                                    <button class="delete" aria-label="close" @click="closemodal"></button>
                                    </header>
                                    <section class="modal-card-body">
                                    <!-- MODAL CONTENT-->
                                    
                                    <div class="field is-horizontal">
                                        <div class="field-label is-normal">
                                            <p class="subtitle">
                                                WELCOME!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="field is-horizontal">
                                        <div class="field-label">
                                            <!-- Left empty for spacing -->
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                
                                                <a href="/profile">
                                                <button class="button is-primary">
                                                Profile
                                                </button>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </section>
                                    <footer class="modal-card-foot">
                                    </footer>
                                </div>
                        </div>
    </section>
</template>

<style>
.user{
    height: 100%;
    width: 100%
}
.is-horizontal-center {
  justify-content: center;
}
.is-rounded{
    border-radius: 50%
}
</style>

<script>
import axios from 'axios'
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"
export default {
    middleware : 'authenticated',
    data() {
      return {
        member : true,
        project : false,
        perusahaan : false,
        username: '',
        email: '',
      }
    },
    components: {
        Sidebar,
        Hello,
    },
    
    methods: {
    },
    mounted () {
    
    axios.get(`${this.$axios.defaults.baseURL}/user/${this.$store.state.user}/profiles?access_token=`+this.$store.state.auth)
    .then(resp => {
        const datauser = resp.data
        this.$store.commit('setData', datauser)
        Cookies.set('datauser', datauser);

        console.log(this.$store.state.data);
    })
    
    
    
    } 
   
}
</script>
