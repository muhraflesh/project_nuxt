<template>
    <section class="section main-content columns is-fullheight">
                <div class="column is-3 is-narrow-mobile is-fullheight is-hidden-mobile">
                <figure class="image is-4by4">
                        <img src="atomixuser.png" alt="Placeholder image" class="user">
                </figure>
                <ul class="menu-list">
                <li>
                    <a href="#" class="has-text-centered">
                     Raflesh
                    </a>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-user"></i></span> Biodata
                    </a>

                    <ul>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-envelope"></i></span> muhraflesh@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-phone"></i></span> 086543218798
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-home"></i></span> Jogjakarta
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-mars-stroke"></i></span> Male
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-tasks"></i></span> Departement
                    </a>

                    <ul>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Link1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Link2
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-cog"></i></span>Setting
                    </a>

                    <ul>
                    <li>
                        <a href="#" @click="logout">
                        <span class="icon is-small"><i class="fa fa-sign-out"></i></span> Logout
                        </a>
                    </li>
                    
                    </ul>
                </li>
                </ul>
            </div>
           
           <div class="column is-4">
               
               <div class="card">
                   <header class="card-header has-background-info">
                        <p class="card-header-title ">
                        Data Presensi
                        </p>
                        <a href="/presensi" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-calendar" ></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <p class="subtitle">
                        (Presensi Karyawan)
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
           <div class="column is-5">
               <div class="card">
                <header class="card-header has-background-warning">
                    <p class="card-header-title ">
                    Divisi
                    </p>
                    <a href="/divisi" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fa fa-group is-black"></i>
                    </span>
                    </a>
                </header>
                <div class="card-content">
                    <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="/divisi" class="card-footer-item">View More</a>
                    
                </footer>
                </div>
                <button @click="token">cek</button>
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


export default {
   

    methods: {
        token ({store}){
            console.log (store.state.token)
        },
        logout () {
            Cookie.remove('token')
            this.$store.commit('setToken', null)
            this.$router.push('/')
        }
    }
   
}
</script>