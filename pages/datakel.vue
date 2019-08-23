<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Solusi</a></li>
                        <li><a href="/dataprofile">Profile</a></li>
                        <li class="is-=active"><a href="#" aria-current="page">Data Keluarga</a></li>
                    </ul>
                </nav>
                <Hello/>
                <br>

                <div>
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="50%">
                            <tr>
                                <td width="200px"><b>Martia Status</b></td>
                                <td width="200px">M2</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Spouse</b></td>
                                <td width="200px">Moana</td>
                                <tr>
                                    <td>21 Januari 1978</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Mother's Maiden</b></td>
                                <td width="200px">Angela</td>
                            </tr>
                        </td>
                        <td width="50%">
                            <tr>
                                <td width="200px" rowspan="3"><b>Children</b></td>
                                <td width="200px">Jhoana</td>
                                <td>Jhoana</td>
                                <tr>
                                    <td>Female</td>
                                    <td>Female</td>
                                    <tr>
                                        <td>2 Juli 20</td>
                                        <td>2 Juli 2003</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Emergency Phone Number</b></td>
                                <td width="200px">Jhoana</td>
                                <tr>
                                    <td>08275642397</td>
                                    <tr>
                                        <td>Brother</td>
                            </tr>
                        </td>
                  </tabel>
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
.is-horizontal-center {
  justify-content: center;
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