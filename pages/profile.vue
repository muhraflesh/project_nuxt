<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hello, Raflesh.
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
                <br/>
                
               <div class="card">
                   <header class="card-header has-background-info">
                        <p class="card-header-title ">
                        Your Profile
                        </p>
                        <a href="/presensi" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-calendar" ></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <p class="subtitle">
                        (Profile)
                        </p>
                    </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <span>
                        <a href="/presensi">View More</a>
                    </span>
                    </p>
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
</style>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"

export default {
    components: {
    Sidebar,
    },
    methods: {
        auth ({store}){
            console.log (store.state.auth)
        },
        logout () {
            Cookie.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/')
        }
    }
   
}
</script>
