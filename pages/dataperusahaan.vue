<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Solusi</a></li>
                        <li><a href="/dataprofile">Profile</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Data Perusahaan</a></li>
                        
                    </ul>
                </nav>
                <Hello/>
                <br>

                <div>
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="55%">
                            <tr>
                                <td width="200px"><b>NIK</b></td>
                                <td width="200px">09876123456456</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KOPERASI</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>DPLK</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Joining Date</b></td>
                                <td width="200px">10 April 2019</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Position</b></td>
                                <td width="200px">Marketing And Sales Office</td>
                            </tr>
                        </td>
                        <td width="40%">
                            <tr>
                                <td width="200px"><b>Position</b></td>
                                <td width="200px">Receptionist</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>BPJS</b></td>
                                <td width="200px">0129223857</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>Health Insurance</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Employment Status</b></td>
                                <td width="200px">K2 (Kontrak 2 tahun)</td>
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