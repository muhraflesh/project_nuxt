<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <td width="500px">
                        <ul>
                            <li><a href="/">Solusi</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Admin Panel</a></li>
                        </ul>
                    </td>
                    <td width="500px"></td>
                </nav>
                <br>

                <!-- Button List Menu -->
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-left">
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="member = !member">
                                <p class="subtitle has-text-white has-text-weight-medium">Manajemen Member</p>
                            </article>
                        </div>
                    </div>
                </section>
                <br/>



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
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"
import Navbar from "../components/Navbar"
export default {
    middleware : '',
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
        Navbar,
    },
    
    methods: {
        showmodal() {
          document.getElementById('modal').classList.add('is-active');
        },
        closemodal() {
          document.getElementById('modal').classList.remove('is-active');
        },
        cek(){
            console.log(this.$store.state.auth)
        },
        async adduser(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user?access_token=`+this.$store.state.auth, {
              email: this.email,
              username: this.username
          })
        }
        catch (e) {
        }
        },
    }
   
}
</script>
