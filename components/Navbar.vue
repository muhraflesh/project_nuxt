<template>
    <div class="columns ">
        <div class="column control has-icons-left"  style="padding-top: 15px;">
            <input class="input" type="text" placeholder="">
            <span class="icon is-left" style="padding-top:25px;">
                <i class="fa fa-search"></i>
            </span>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-32x32" style="margin-right:.5em;">
                <img src="~assets/images/icons8-male-user-50.png">
              </figure>
              {{this.$store.state.data.nama}}
            </a>
            <div class="navbar-dropdown is-right">
               <hr class="navbar-divider">
                <a class="navbar-item" @click="setting">
                  <span class="icon is-small">
                    <i class="fa fa-cog"></i>
                  </span>
                  &nbsp; Settings
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="logout">
                  <span class="icon is-small">
                    <i class="fa fa-power-off"></i>
                  </span>
                  &nbsp; Logout
                </a>
            </div>
          </div>
    </div>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined

export default {
  methods: {
        logout () {
            Cookies.remove('auth')
            Cookies.remove('user')
            Cookies.remove('datauser')
            Cookies.remove('team')
            Cookies.remove('admin')
            Cookies.remove('leader')
            this.$store.commit('setAuth', null)
            this.$store.commit('setUser', null)
            this.$store.commit('setData', null)
            this.$store.commit('setTeam', null)
            this.$store.commit('setAdmin', null)
            this.$store.commit('setLeader', null)
            this.$router.push('/')
        }
    },
}
</script>