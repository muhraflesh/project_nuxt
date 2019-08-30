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
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="pribadi = !pribadi">
                                <p class="subtitle has-text-white has-text-weight-medium">Data Pribadi</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box has-background-primary" @click="keluarga = !keluarga">
                                <p class="subtitle has-text-white has-text-weight-medium">Data Keluarga</p>
                            </article>
                        </div>
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="perusahaan = !perusahaan">
                                <p class="subtitle has-text-white has-text-weight-medium">Data Perusahaan</p>
                            </article>
                        </div>
                    </div>
                </section>
                <br/>

                <!-- Data Pribadi -->
                <div v-show="pribadi">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                      <tr>
                        <td style="width:20%" class="has-text-centered">
                                <div class="is-1by1 " style="">
                                    <img class="is-rounded " @click="cek" src="~assets/images/iqbaal.jpg">
                                </div><br>
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
                  <br/>

                  <!-- Data Keluarga -->
                  <div v-show="keluarga">
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
                  <br/>

                  <!-- Data Perusahaan -->
                  <div v-show="perusahaan">
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
    data() {
      return {
        pribadi : true,
        keluarga : false,
        perusahaan : false,
      }
    },
    components: {
        Sidebar,
        Hello,
    },
    
    methods: {
        cek(){
            console.log(this.$store.state.auth)
        },
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
