<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <td width="500px">
                        <ul>
                            <li><a href="/">Solusi</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Data Profile</a></li>
                        </ul>
                    </td>
                    <td width="200px"></td>
                    <td width="600px">
                        <Navbar/>
                    </td>
                </nav>
                <hr>
                
                <section class="info-tiles">
                   <div class="tabs">
                        <a v-bind:class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1">Data Pribadi</a>
                        <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2">Data Keluarga</a>
                        <a v-bind:class="[ activetab === 3 ? 'active' : '' ]" @click="activetab=3">Data Perusahaan</a>

                    </div>
                </section>
                <br/>

                <!-- Data Pribadi -->
                <div class="content" style="margin-top:3%">
                <div v-if="activetab === 1" >
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped">
                      <tr>
                        <td style="width:20%" class="has-text-centered">
                                <div class="is-1by1 " style="">
                                    <img class="is-rounded " @click="cek" src="~assets/images/iqbaal.jpg">
                                </div><br>
                            <p class="subtitle"><b>{{this.$store.state.data.name}}</b> <br> Hello!!</p>
                        </td>
                        <td style="width:45%">
                            <tr>
                                <td width="150px"><b>Sex</b></td>
                                <td width="200px">{{this.$store.state.data.sex}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Blood Type</b></td>
                                <td width="200px">{{this.$store.state.data.blood_tipe}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Email</b></td>
                                <td width="200px">{{this.$store.state.data.email_address}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KK</b></td>
                                <td width="200px"></td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KTP</b></td>
                                <td width="200px"></td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Religion</b></td>
                                <td width="200px">{{this.$store.state.data.religion}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KTP Address</b></td>
                                <td width="200px"></td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Residential Address</b></td>
                                <td width="200px"></td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>KTP Number</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td></td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Educational Background</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td></td>
                                    <tr>
                                    <td></td>
                            </tr>
                        </td>

                        <td style="width:35%">
                            <tr>
                                <td width="150px" rowspan="3"><b>Certificate</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td></td>
                                    <tr>
                                        <td></td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Date Of Birth</b></td>
                                <td width="200px">{{this.$store.state.data.dob_place}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.dob}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Phone Number</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td>{{this.$store.state.data.other_phone}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>NPWP</b></td>
                                <td width="200px"><i class="fa fa-check"></i></td>
                                <tr>
                                    <td></td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="4"><b>Bank Account</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td>{{this.$store.state.data.bank}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.account_number}}</td>
                                        <tr>
                                        <td>{{this.$store.state.data.branch}}</td>
                            </tr>
                        </td>
                        </tr>
                  </tabel>
                  </div>
                  </div>
                  </div>
                  <br>
                  
                   <!-- Data Keluarga -->
                  <div v-if="activetab === 2">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="50%">
                            <tr>
                                <td width="200px"><b>Marital Status</b></td>
                                <td width="200px">{{this.$store.state.data.marital_status}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Spouse</b></td>
                                <td width="200px">{{this.$store.state.data.spouse_name}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.spouse_dob}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Mother's Maiden</b></td>
                                <td width="200px">{{this.$store.state.data.mother_maiden}}</td>
                            </tr>
                        </td>
                        <td width="50%">
                            <tr>
                                <td width="200px" rowspan="3"><b>Children</b></td>
                                <td width="200px"></td>
                                <td></td>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <tr>
                                        <td></td>
                                        <td></td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Emergency Phone Number</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td>{{this.$store.state.data.emergency_number}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.relation_emergency}}</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>
                  <br/>
                  
                  <!-- Data Perusahaan -->
                  <div v-if="activetab === 3">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="55%">
                            <tr>
                                <td width="200px"><b>NIK</b></td>
                                <td width="200px">{{this.$store.state.data.nik}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KOPERASI</b></td>
                                <td width="200px">{{this.$store.state.data.koperasi}}</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>DPLK</b></td>
                                <td width="200px">{{this.$store.state.data.DPLK}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Joining Date</b></td>
                                <td width="200px">{{this.$store.state.data.joining_date}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Position</b></td>
                                <td width="200px">{{this.$store.state.data.emp_position}}</td>
                            </tr>
                        </td>
                        <td width="40%">
                            <tr>
                                <td width="200px"><b>Position</b></td>
                                <td width="200px">{{this.$store.state.data.emp_position}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>BPJS</b></td>
                                <td width="200px">{{this.$store.state.data.BPJS}}</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>Health Insurance</b></td>
                                <td width="200px">{{this.$store.state.data.health_insurance}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Employment Status</b></td>
                                <td width="200px">{{this.$store.state.data.employee_status}}</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>
                </div>
                  <!-- Modal Isi Profile -->
                </div>
                <br/>
                <br/>
    </section>
</template>

<style>
.is-rounded{
    border-radius: 50%
}
/* Style the tabs */
.tabs {
  float: left;
  overflow: hidden;
  margin-bottom: 10px;
}
.tabs a{
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  background-color: #434640;
  font-weight: bold;
  color: #fff;
}
.tabs a:last-child { 
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color:#5a5a5a;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: rgb(190, 190, 178);
  color: #0f0e0e;
  border-bottom: 2px solid #fff;
  cursor: default;
}
</style>

<script>
import axios from 'axios'
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"
import Navbar from "../components/Navbar"
export default {
    middleware : '',
    data() {
    return{
      activetab: 1,
    }
    },
    components: {
        Sidebar,
        Hello,
        Navbar,
    },
    
    methods: {
        cek(){
            console.log(this.$store.state.auth)
            console.log(this.$store.state.user)
        },
    },
    mounted () {
    
    axios.get(`${this.$axios.defaults.baseURL}/user/${this.$store.state.user}/profiles?access_token=`+this.$store.state.auth)
    .then(resp => {
        const datauser = resp.data
        this.$store.commit('setData', datauser)
        Cookies.set('datauser', datauser);

        console.log(this.$store.state.data);
    })
    
    
    
    } 
}
</script>
