<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Solusi</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Data Profile</a></li>
                    </ul>
                </nav>
                <Hello/>
                <br>

                <div>
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                      <tr>
                        <td style="width:20%" class="has-text-centered">
                                <figure  style="width: 200px">
                                    <img class="is-rounded" src="~assets/images/iqbaal.jpg">
                                </figure><br>
                            <p class="subtitle"><b>John Smith</b> <br> Hello!!</p>
                        </td>
                        <td style="width:45%">
                            <tr>
                                <td width="150px"><b>Sex</b></td>
                                <td width="200px">Male</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Blood Type</b></td>
                                <td width="200px">A</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Email</b></td>
                                <td width="200px">kutilang55@gmail.com</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KK</b></td>
                                <td width="200px">Copy</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KTP</b></td>
                                <td width="200px">Copy</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Religion</b></td>
                                <td width="200px">Islam</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KTP Address</b></td>
                                <td width="200px">Baciro, Gondokusuman,Yogyakarta</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Residential Address</b></td>
                                <td width="200px">Baciro, Gondokusuman,Yogyakarta</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>KTP Number</b></td>
                                <td width="200px">3223687314</td>
                                <tr>
                                    <td>21 JUli 2025</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Educational Background</b></td>
                                <td width="200px">D3</td>
                                <tr>
                                    <td>Teknik Informasi</td>
                                    <tr>
                                        <td>UGM</td>
                            </tr>
                        </td>


                        <td style="width:35%">
                            <tr>
                                <td width="150px" rowspan="3"><b>Certificate</b></td>
                                <td width="200px">UGM</td>
                                <tr>
                                    <td>21 Juli 2016</td>
                                    <tr>
                                        <td>D3</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Date Of Birth</b></td>
<td width="200px">Surabaya</td>
                                <tr>
                                    <td>28 Desember 1999</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Phone Number</b></td>
                                <td width="200px">021983124</td>
                                <tr>
                                    <td>087721641712</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>NPWP</b></td>
                                <td width="200px"><i class="fa fa-check"></i></td>
                                <tr>
                                    <td>9182761094861</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="4"><b>Bank Account</b></td>
                                <td width="200px">john</td>
                                <tr>
                                    <td>BNI</td>
                                    <tr>
                                        <td>324567823</td>
                                        <tr>
                                            <td>Yogyakarta</td>
                            </tr>
                            
                        </td>
                        </tr>
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
.is-rounded{
    border-radius: 50%
}
</style>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"
export default {
    middleware : 'authenticated',
    components: {
    Sidebar,
    Hello,
    },
    methods: {
        auth ({store}){
            console.log (store.state.auth)
        },
        logout () {
            Cookies.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/')
        }
    }
   
}
</script>
