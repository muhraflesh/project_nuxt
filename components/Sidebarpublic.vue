

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
                <ul>
                <li><a href="/profile">Data Pribadi</a></li>
                <li><a href="/datakel">Data Keluarga</a></li>
                <li><a href="/dataperusahaan">Data Perusahaan</a></li>
                </ul>
            </li>
            <li>
                <a href="/presensi"><span class="icon is-small"><i class="fa fa-calendar"></i></span> Presensi</a>
                <ul>
                <li><a href="/presensi">Cuti</a></li>
                <li><a href="/presensi">Log</a></li>
                
                </ul>
            </li>
            <li>
                <a href="/divisi"><span class="icon is-small"><i class="fa fa-group"></i></span> Divisi</a>
                <ul>
                <li><a href="/divisi">Leadership</a></li>
                <li><a href="/divisi">Chart</a></li>
                <li><a href="/project">Project</a></li>
                </ul>
            </li>
            <li><a href="/bon"><span class="icon is-small"><i class="fa fa-suitcase"></i></span> Bon Barang</a></li>

            <li>
              <a class=""><i class="fa fa-cog"></i> Settings</a>
              <ul>
                <li><a v-if="$store.state.auth" @click="logout">Logout</a></li>
                <li><a v-if="!$store.state.auth">Login</a></li>
              </ul>
            </li>
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
            this.$store.commit('setAuth', null)
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
