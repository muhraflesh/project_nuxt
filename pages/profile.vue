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
                    <td width="500\px"></td>
                    <td width="600px">
                        <Navbar/>
                    </td>
                </nav>
                <hr>
                
                <section class="info-tiles">
                   <div class="tabs columns">
                        <div class="column is-4">
                            <a v-bind:class="[ activetab === 1 ? 'active' : '' ]" class="button is-info is-focused has-text-weight-normal is-family-primary" @click="activetab=1">Data Pribadi</a>
                        </div>
                        <div class="column is-4">
                            <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" class="button is-info is-focused has-text-weight-normal is-family-primary" @click="activetab=2">Data Keluarga</a>
                        </div>
                        <div class="column is-4">
                            <a v-bind:class="[ activetab === 3 ? 'active' : '' ]" class="button is-info is-focused has-text-weight-normal is-family-primary" @click="activetab=3">Data Perusahaan</a>
                        </div>
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
                                <div class="is-1by1 ">
                                    <img class="is-rounded " @click="cek" src="~assets/images/iqbaal.jpg">
                                </div><br>
                            <p class="subtitle"><b>{{this.$store.state.data.nama}}</b> <br> Hello!!</p>
                        </td>
                        <td style="width:45%">
                            <tr>
                                <td width="150px"><b>Jenis Kelamin</b></td>
                                <td width="200px">{{this.$store.state.data.jenis_kelamin}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Golongan Darah</b></td>
                                <td width="200px">{{this.$store.state.data.golongan_darah}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Email</b></td>
                                <td width="200px">{{this.$store.state.data.email}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KK</b></td>
                                <td width="200px">{{this.$store.state.data.kk}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KTP</b></td>
                                <td width="200px">{{this.$store.state.data.ktp}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Agama</b></td>
                                <td width="200px">{{this.$store.state.data.agama}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Alamat di KTP</b></td>
                                <td width="200px">{{this.$store.state.data.alamat_ktp}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Alamat</b></td>
                                <td width="200px">{{this.$store.state.data.alamat}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Nomor KTP</b></td>
                                <td width="200px">{{this.$store.state.data.no_ktp}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.no_ktp}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Latar Belakang Pendidikan</b></td>
                                <td width="200px">{{this.$store.state.data.pendidikan}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.jurusan}}</td>
                                    <tr>
                                    <td>{{this.$store.state.data.gelar}}</td>
                            </tr>
                        </td>

                        <td style="width:35%">
                            <tr>
                                <td width="150px" rowspan="3"><b>Sertifikat</b></td>
                                <td width="200px">{{this.$store.state.data.ijazah}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.disahkan_oleh}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.tanggal_pengesahan}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Kelahiran</b></td>
                                <td width="200px">{{this.$store.state.data.tempat_lahir}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.tgl_lahir}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Nomor Telepon</b></td>
                                <td width="200px">{{this.$store.state.data.no_telepon}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.no_telepon_lainnya}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>NPWP</b></td>
                                <td width="200px"><i class="fa fa-check"></i></td>
                                <tr>
                                    <td>{{this.$store.state.data.npwp}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="4"><b>Akun Bank</b></td>
                                <td width="200px"></td>
                                <tr>
                                    <td>{{this.$store.state.data.bank}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.no_rekening}}</td>
                                        <tr>
                                        <td>{{this.$store.state.data.cabang}}</td>
                            </tr>
                        </td>
                        </tr>
                  </tabel>
                  </div>
                  </div>
                </div>
                  
                   <!-- Data Keluarga -->
                  <div v-if="activetab === 2">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="50%">
                            <tr>
                                <td width="200px"><b>Status Perkawinan</b></td>
                                <td width="200px">{{this.$store.state.data.status_pernikahan}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Pasangan</b></td>
                                <td width="200px">{{this.$store.state.data.nama_pasangan}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.tgl_lahir_pasangan}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Ibu Kandung</b></td>
                                <td width="200px">{{this.$store.state.data.ibu_kandung}}</td>
                            </tr>
                        </td>
                        <td width="50%">
                            <tr>
                                <td width="200px" rowspan="3"><b>Anak</b></td>
                                <td width="200px">{{this.$store.state.data.nama_anak1}}</td>
                                <td>{{this.$store.state.data.nama_anak1}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.jenis_kelamin_anak1}}</td>
                                    <td>{{this.$store.state.data.jenis_kelamin_anak1}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.tgl_lahir_anak1}}</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Nomor Telepon Darurat</b></td>
                                <td width="200px">{{this.$store.state.data.nama_darurat}}</td>
                                <tr>
                                    <td>{{this.$store.state.data.no_darurat}}</td>
                                    <tr>
                                        <td>{{this.$store.state.data.relasi_darurat}}</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>
                  
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
                                <td width="150px"><b>Tanggal Bergabung</b></td>
                                <td width="200px">{{this.$store.state.data.tgl_masuk}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Posisi</b></td>
                                <td width="200px">{{this.$store.state.data.posisi_karyawan}}</td>
                            </tr>
                        </td>
                        <td width="40%">
                            <tr>
                                <td width="200px"><b>Posisi</b></td>
                                <td width="200px">{{this.$store.state.data.posisi_karyawan}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>BPJS</b></td>
                                <td width="200px">{{this.$store.state.data.BPJS}}</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>Health Insurance</b></td>
                                <td width="200px">{{this.$store.state.data.asuransi_kesehatan}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Employment Status</b></td>
                                <td width="200px">{{this.$store.state.data.status_karyawan}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Shift Karyawan</b></td>
                                <td width="200px">{{this.$store.state.data.status_karyawan}}</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Nama Tim</b></td>
                                <td width="200px">{{this.$store.state.data.tim}}</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
                <br/>
                <br/>
    </section>
</template>

<script>
import axios from 'axios'
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Navbar from "../components/Navbar"
export default {
    middleware : 'profile',
    data() {
    return{
      activetab: 1,
    }
    },
    components: {
        Sidebar,
        Navbar,
    },
    
    methods: {
        cek(){
            console.log(this.$store.state.auth)
            console.log(this.$store.state.user)
        },
    },

    mounted() {
        
    }
    
}
</script>

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
  background-color:#2db14a;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: rgb(117, 117, 117);
  color: #b91876;
  border-bottom: 2px solid #fff;
  cursor: default;
}
</style>