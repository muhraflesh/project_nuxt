

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
          <br>
          <div class="my-8">
              <p class="menu-label">
                Menu
              </p>
              <input id="myInput" class="input" @keyup="myFunction" type="text" placeholder="Type Here..">
                <ul id="myUL" class="menu-list">
                  <li><a href="/profile"><span class="icon is-small"><i class="fa fa-user"></i></span> Profile</a></li>
                  <li><a href="/presensi"><span class="icon is-small"><i class="fa fa-calendar"></i></span> Presensi</a></li>
                    <li><a href="/presensi">Cuti</a></li>
                    <li><a href="/presensi">Log</a></li>
                  <li><a href="/divisi"><span class="icon is-small"><i class="fa fa-group"></i></span> Divisi</a></li>
                    <li><a href="/divisi">Leadership</a></li>
                    <li><a href="/divisi">Chart</a></li>
                    <li><a href="/project">Project</a></li>
                  <li><a href="/bon"><span class="icon is-small"><i class="fa fa-suitcase"></i></span> Bon Barang</a></li>
                  <li><a href="/keuangan"><span class="icon is-small"><i class="fa fa-money"></i></span> Keuangan </a></li>
                  <li><a v-if="$store.state.hrd" href="/admin"><span class="icon is-small"><i class=" fa fa-user-secret"></i></span> Admin Panel</a></li>
                  <li><a href="/settings"><span class="icon is-small"><i class="fa fa-cog"></i></span> Settings </a></li>
                </ul>
                <ul class="menu-list">
                    <li><a v-if="$store.state.auth" @click="logout">Logout</a></li>
                    <li><a v-if="!$store.state.auth"><i class="fa fa-sign-in"></i> Login</a></li>
                </ul>
            </div>
          
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
            Cookies.remove('hrd')
            Cookies.remove('leader')
            this.$store.commit('setAuth', null)
            this.$store.commit('setUser', null)
            this.$store.commit('setData', null)
            this.$store.commit('setTeam', null)
            this.$store.commit('setHrd', null)
            this.$store.commit('setLeader', null)
            this.$router.push('/')
        },
        myFunction() {
              var input, filter, ul, li, a, i, txtValue;
              input = document.getElementById("myInput");
              filter = input.value.toUpperCase();
              ul = document.getElementById("myUL");
              li = ul.getElementsByTagName("li");
              for (i = 0; i < li.length; i++) {
                  a = li[i].getElementsByTagName("a")[0];
                  txtValue = a.textContent || a.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      li[i].style.display = "";
                  } else {
                      li[i].style.display = "none";
                  }
              }
          }
    },
    
}
</script>

<style>
.sidebar {
background-color : primary ;
}
</style>
