<template>
    <section class="section main-content columns is-fullheight">
            <!-- MODAL DETAIL USER -->
            <div class="modal is-active" id="modal-detail">
                  <div class="modal-background" @click="closeDetail"></div>
                      <div class="modal-card modcard">
                        <header class="modal-card-head">
                              <p class="modal-card-title">Profile : {{allprofile.nama}}</p>
                              <button class="delete" aria-label="close" @click="closeDetail"></button>
                        </header>
                        <!-- MODAL CONTENT-->
                        <section class="modal-card-body">
                            <section class="hero is-light is-small card is-12 info-tiles sectulisan">
                                <div  class="row columns" >
                                    <div class="column is-1" style="width: 100px">
                                        <figure class="image is-96x96 imgprofile">
                                            <img class="is-rounded" src="user1.jpg">
                                        </figure>
                                    </div>
                                    <div class="column is-4 ">
                                        <div class="namaprofile">
                                            <tr class="has-text-link subtitle"><b>{{allprofile.nama}}</b></tr>
                                        </div>
                                        <div class="imgprofile">
                                            <div class="navbar-start ">
                                                <a v-bind:class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1" class="navbar-item is-focused"> Data Pribadi</a>
                                                <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2" class="navbar-item is-focused"> Data Keluarga</a>
                                                <a v-bind:class="[ activetab === 3 ? 'active' : '' ]" @click="activetab=3" class="navbar-item is-focused"> Data Perusahaan</a>
                     
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </section>
                            <div class="content" style="margin-top:3%">
                            <!-- DATA PRIBADI -->
                                <div v-if="activetab === 1" >
                                    <div class="card ">
                                    <div class="card-content">
                                    <tabel class="table is-fullwidth is-striped">
                                    <tr>
                                        <td style="width:45%">
                                            <tr>
                                                <td width="150px"><b>Jenis Kelamin</b></td>
                                                <td width="200px">{{allprofile.jenis_kelamin}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Golongan Darah</b></td>
                                                <td width="200px">{{allprofile.golongan_darah}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Email</b></td>
                                                <td width="200px">{{allprofile.email}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>KK</b></td>
                                                <td width="200px">{{allprofile.kk}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>KTP</b></td>
                                                <td width="200px">{{allprofile.ktp}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Agama</b></td>
                                                <td width="200px">{{allprofile.agama}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Alamat di KTP</b></td>
                                                <td width="200px">{{allprofile.alamat_ktp}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Alamat</b></td>
                                                <td width="200px">{{allprofile.alamat}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="2"><b>Nomor KTP</b></td>
                                                <td width="200px">{{allprofile.no_ktp}}</td>
                                                <tr>
                                                    <td></td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="3"><b>Latar Belakang Pendidikan</b></td>
                                                <td width="200px">{{allprofile.gelar}}</td>
                                                <tr>
                                                    <td>{{allprofile.jurusan}}</td>
                                                    <tr>
                                                    <td>{{allprofile.pendidikan}}</td>
                                            </tr>
                                        </td>

                                        <td style="width:35%">
                                            <tr>
                                                <td width="150px" rowspan="3"><b>Sertifikat</b></td>
                                                <td width="200px">{{allprofile.ijazah}}</td>
                                                <tr>
                                                    <td></td>
                                                    <tr>
                                                        <td></td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="2"><b>Kelahiran</b></td>
                                                <td width="200px">{{allprofile.tempat_lahir}}</td>
                                                <tr>
                                                    <td>{{allprofile.tgl_lahir}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="2"><b>Nomor Telepon</b></td>
                                                <td width="200px">{{allprofile.no_telepon}}</td>
                                                <tr>
                                                    <td>{{allprofile.telepon_rumah}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="2"><b>NPWP</b></td>
                                                <td width="200px"><i class="fa fa-check"></i></td>
                                                <tr>
                                                    <td>{{allprofile.npwp}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="4"><b>Akun Bank</b></td>
                                                <td width="200px"></td>
                                                <tr>
                                                    <td>{{allprofile.bank}}</td>
                                                    <tr>
                                                        <td>{{allprofile.no_rekening}}</td>
                                                        <tr>
                                                        <td>{{allprofile.cabang}}</td>
                                            </tr>
                                        </td>
                                        </tr>
                                    </tabel>
                                    </div>
                                    </div>
                                </div>
                                
                                <!-- DATA KELUARGA -->
                                <div v-if="activetab === 2">
                                    <div class="card ">
                                    <div class="card-content">
                                    <tabel class="table is-fullwidth is-striped ">
                                        <td width="50%">
                                            <tr>
                                                <td width="200px"><b>Status Perkawinan</b></td>
                                                <td width="200px">{{allprofile.status_pernikahan}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="2"><b>Pasangan</b></td>
                                                <td width="200px">{{allprofile.nama_pasangan}}</td>
                                                <tr>
                                                    <td></td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Ibu Kandung</b></td>
                                                <td width="200px">{{allprofile.ibu_kandung}}</td>
                                            </tr>
                                        </td>
                                        <td width="50%">
                                            <tr>
                                                <td width="200px" rowspan="3"><b>Anak</b></td>
                                                <td width="200px">{{allprofile.nama_anak1}}</td>
                                                <td></td>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <tr>
                                                        <td></td>
                                            </tr>
                                            <tr>
                                                <td width="150px" rowspan="3"><b>Nomor Telepon Darurat</b></td>
                                                <td width="200px">{{allprofile.no_darurat}}</td>
                                                <tr>
                                                    <td></td>
                                                    <tr>
                                                        <td></td>
                                            </tr>
                                        </td>
                                </tabel>
                                </div>
                                </div>
                                </div>
                                
                                <!-- DATA PERUSAHAAN -->
                                <div v-if="activetab === 3">
                                    <div class="card ">
                                    <div class="card-content">
                                    <tabel class="table is-fullwidth is-striped ">
                                        <td width="55%">
                                            <tr>
                                                <td width="200px"><b>NIK</b></td>
                                                <td width="200px">{{allprofile.nik}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>KOPERASI</b></td>
                                                <td width="200px">{{allprofile.koperasi}}</td>
                                            </tr>
                                            <tr>
                                                <td width="200px"><b>DPLK</b></td>
                                                <td width="200px">{{allprofile.DPLK}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Tanggal Bergabung</b></td>
                                                <td width="200px">{{allprofile.tgl_masuk}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Posisi</b></td>
                                                <td width="200px">{{allprofile.posisi_karyawan}}</td>
                                            </tr>
                                        </td>
                                        <td width="40%">
                                            <tr>
                                                <td width="150px"><b>BPJS</b></td>
                                                <td width="200px">{{allprofile.BPJS}}</td>
                                            </tr>
                                            <tr>
                                                <td width="200px"><b>Health Insurance</b></td>
                                                <td width="200px">{{allprofile.asuransi_kesehatan}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Employment Status</b></td>
                                                <td width="200px">{{allprofile.status_karyawan}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Shift Karyawan</b></td>
                                                <td width="200px">{{allprofile.shift}}</td>
                                            </tr>
                                            <tr>
                                                <td width="150px"><b>Nama Tim</b></td>
                                                <td width="200px">{{allprofile.tim}}</td>
                                            </tr>
                                        </td>
                                    </tabel>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot">
                        </footer>
                      </div>
            </div>
                
                  
    </section>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import axios from 'axios'
import Sidebar from "../components/Sidebarpublic"
import Navbar from "../components/Navbar"
import Notification from '../components/Notification'
import AdduserSuccess from '../components/AdduserSuccess'
export default {
    middleware : 'admin',
    data() {
      return {
        activetab: 1,
        pesan: null,
        success: null,
      }
    }, 
    components: {
        Sidebar,
        Navbar,
        Notification,
        AdduserSuccess,
    },
    methods: {
        closeDetail() {
            this.$router.push('/admin')
        }
    },

    computed: {
        allprofile () { return this.$store.state.allprofile }
    }
}
</script>

<style>
.modcard{
  width: 75%;
  height: 100%
}
.imgprofile{
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px
}
.namaprofile {
    padding-left: 10px;
    padding-top: 10px;
}
.sectulisan{
    height: 100px
}
</style>
