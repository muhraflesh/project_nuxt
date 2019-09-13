

<template>
    <aside class="column is-2 aside">
        <figure>
            <img src="hitam247.png" alt="Solusi 247" class="user">
        </figure>
                <br/>
        <nav class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a class="is-active" href="/"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Dashboard</a></li>
          </ul>
          <p class="menu-label">
            Menu
          </p>
          <ul class="menu-list">
            <li><a href="/profile"><span class="icon is-small"><i class="fa fa-user"></i></span> Profile</a>
            
            </li>
            <li>
                <a href="/presensi"><span class="icon is-small"><i class="fa fa-calendar"></i></span> Presensi</a>
                <ul>
                <li><a href="/presensi"><i class=" fa fa-calendar-times"></i> Cuti</a></li>
                <li><a href="/presensi"><i class=" fa fa-history"></i> Log</a></li>
                
                </ul>
            </li>
            <li>
                <a href="/divisi"><span class="icon is-small"><i class="fa fa-group"></i></span> Divisi</a>
                <ul>
                <li><a href="/divisi"><i class=" fa fa-users"></i> Leadership</a></li>
                <li><a href="/divisi"><i class=" fa fa-chart-bar"></i> Chart</a></li>
                <li><a href="/project"><i class=" fa fa-tasks"></i> Project</a></li>
                </ul>
            </li>
            
            <li><a href="/bon"><span class="icon is-small"><i class="fa fa-suitcase"></i></span> Bon Barang</a></li>
            <li><a href="/keuangan"><span class="icon is-small"><i class="fa fa-money"></i></span> Keuangan </a></li>
            <li><a href="/admin"><span class="icon is-small"><i class=" fa fa-user-secret"></i></span> Admin Panel</a></li>
            
              <a class=""><i class="fa fa-cog"></i> Settings</a>
              <ul>
                <li><a v-if="$store.state.auth" @click="logout">Logout</a></li>
                <li><a v-if="!$store.state.auth"><i class="fa fa-sign-in"></i> Login</a></li>
              </ul>
          </ul>
          
        </nav>
      </aside>
           
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined

export default {
  middleware: "",
  
  methods: {
        logout () {
            Cookies.remove('auth')
            Cookies.remove('user')
            Cookies.remove('datauser')
            Cookies.remove('team')
            this.$store.commit('setAuth', null)
            this.$store.commit('setUser', null)
            this.$store.commit('setData', null)
            this.$store.commit('setTeam', null)
            this.$router.push('/')
        }
    },
}
</script>

<style>
.sidebar {
background-color : primary ;
}
</style>
