<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Solusi</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Profile</a></li>
                    </ul>
                </nav>
                <Hello/>
                <br/>
                
            <div class="columns">
                <div class="column is-6">
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

                <div class="column is-6">
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
import Hello from "../components/Hello"

export default {
    middleware : '',

    components: {
    Sidebar,
    Hello,
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
