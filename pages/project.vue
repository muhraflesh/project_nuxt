<template>
    <section class="section main-content columns is-fullheight">
                <Sidebar/>
           
            <div class="column is-centered is-10 abu kanan kiri2">
             
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
import Sidebar from "../components/Sidebar"

export default {
    middleware: "authenticated",
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
