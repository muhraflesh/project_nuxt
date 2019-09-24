<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
        <div class="container">
            <div class="column is-12">
                <!-- BREADCRUMBS -->
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <td width="500px">
                      <ul>
                          <li><a href="/">Solusi</a></li>
                          <li class="is-active"><a href="#" aria-current="page">Settings</a></li>
                      </ul>
                  </td>
                  <td width="200px"></td>
                  <td width="600px">
                      <Navbar/>
                  </td>
                </nav>
                <hr>

                <!-- TULISAN EDIT PROFILE -->
                <section class="hero is-light is-small card is-12" style="margin-bottom: 1%">
                    <div class="container" style="margin: 10px">
                            <h1 class="title">
                                Edit Profile
                            </h1>
                            <h2 class="subtitle">
                                Complete Your Profile
                            </h2>
                    </div>
                </section>
                
                <!-- CHANGES PROFILE -->
                <div class="columns">
                  <div class="column is-8">
                  <form @submit.prevent="updatePost" class="control" >
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-parent">

                            <!-- FORM DATA PRIBADI -->
                            <div class="tile is-child box">
                                <p class="has-text-weight-medium">Data Pribadi
                                <a class="button btn-rgt is-primary is-small"  @click="pribadi = !pribadi">Edit</a>
                                </p>
                                <div v-show="pribadi"><hr>
                                    <table class=" table is-borderless is-fullwidth">
                                            <tr>
                                              <td width="200px">Nama :</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                name="nama"  
                                                v-model="post.nama">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Inisial :</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                name="inisial"
                                                v-model="post.inisial">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Jenis Kelamin :</td>
                                              <td>
                                                <div class="select">
                                                  <select v-model="post.jenis_kelamin">
                                                    <option value="Laki">Laki-laki</option>
                                                    <option value="Perempuan">Perempuan</option>
                                                  </select>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Tempat, Tanggal Lahir :</td>
                                              <td>
                                              <tr>
                                                <td width="150px">Tempat</td>
                                                <td>
                                                  <input
                                                  class="input"
                                                  type="text"
                                                  v-model="post.tempat_lahir">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Tanggal Lahir</td>
                                                <td><input type="date" class="input" v-model="post.tgl_lahir"></td>
                                              </tr>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Golongan Darah :</td>
                                              <td>
                                                <div class="select">
                                                <select v-model="post.golongan_darah">
                                                  <option value="A">A</option>
                                                  <option value="B">B</option>
                                                  <option value="AB">AB</option>
                                                  <option value="O">O</option>
                                                  <option value="None">None</option>
                                                </select>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Agama :</td>
                                              <td>
                                                <div class="select">
                                                <select v-model="post.agama">
                                                  <option value="Islam">Islam</option>
                                                  <option value="Kristen">Kristen</option>
                                                  <option value="Katolik">Katolik</option>
                                                  <option value="Buddha">Buddha</option>
                                                  <option value="Hindu">Hindu</option>
                                                </select>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Nomor Telepon :</td>
                                              <td>
                                              <tr>
                                                <td width="150px">Rumah</td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.telepon_rumah">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Handphone</td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.no_telepon">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Lainnya</td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.no_telepon_lainnya">
                                                </td>
                                              </tr>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Email :</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="email"
                                                v-model="post.email">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Alamat Rumah :</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.alamat">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Akun Bank :</td>
                                              <td>
                                            <tr>
                                              <td width="150px">Bank</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.bank">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Nomor Rekening</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.no_rekening">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Cabang</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.cabang">
                                              </td>
                                            </tr>
                                            </td>
                                            </tr>
                                            <tr>
                                              <td>KTP :</td>
                                              <td>
                                                <div class="select">
                                                  <select v-model="post.ktp">
                                                    <option value="COPY">COPY</option>
                                                    <option value="NONE">NONE</option>
                                                  </select>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Nomor KTP :</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.no_ktp">
                                              </td>
                                            </tr>
                                            <tr>
                                            <td>Masa Berlaku KTP :</td>
                                            <td>
                                              <input class="input" type="date" v-model="post.masa_berlaku">
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Alamat KTP :</td>
                                            <td>
                                              <input
                                              class="input"
                                              type="text"
                                              v-model="post.alamat_ktp">
                                            </td>
                                          </tr>
                                          <tr>
                                              <td>KK :</td>
                                              <td>
                                                <div class="select">
                                                  <select v-model="post.kk">
                                                    <option value="COPY">COPY</option>
                                                    <option value="NONE">NONE</option>
                                                  </select>
                                                </div>
                                              </td>
                                          </tr>
                                            <tr>
                                              <td>Pendidikan :</td>
                                              <td>
                                                <tr>
                                                <td>Gelar</td>
                                                <td>
                                                  <div class="select">
                                                  <select v-model="post.gelar">
                                                    <option value="SMU">SMU</option>
                                                    <option value="D1">D1</option>
                                                    <option value="D2">D2</option>
                                                    <option value="D3">D3</option>
                                                    <option value="S1">S1</option>
                                                    <option value="S2">S2</option>
                                                    <option value="S3">S3</option>
                                                    <option value="Others">Others</option>
                                                  </select></div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>Jurusan</td>
                                                <td>
                                                  <div class="select">
                                                  <select v-model="post.jurusan">
                                                    <option value="Teknik Informatika">Teknik Informatika</option>
                                                    <option value="Management Informatika">Management Informatika</option>
                                                    <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                                                    <option value="Others">Others</option>
                                                  </select></div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>Pendidikan</td>
                                                <td>
                                                  <div class="select">
                                                  <select  v-model="post.pendidikan">
                                                    <option value="Universitas Indonesia">Universitas Indonesia</option>
                                                    <option value="Others">Others</option>
                                                  </select></div>
                                                </td>
                                                </tr>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Ijazah :</td>
                                              <td>
                                              <tr>
                                                <div class="select">
                                                  <select v-model="post.ijazah">
                                                    <option value="COPY">COPY</option>
                                                    <option value="NONE">NONE</option>
                                                  </select></div>
                                              </tr>
                                              <tr>
                                                <td>Disahkan Oleh </td>
                                                <td>
                                                  <div class="select">
                                                  <select v-model="post.disahkan_oleh">
                                                    <option value="Universitas Indonesia">Universitas Indonesia</option>
                                                    <option value="Others">Others</option>
                                                  </select></div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Tanggal Pengesahan</td>
                                                <td>
                                                  <input class="input" type="date" v-model="post.tanggal_pengesahan">
                                                </td>
                                              </tr>
                                              
                                              </td>
                                            </tr>
                                    </table>
                                </div>
                            </div>

                            <!-- FORM DATA KELUARGA -->
                            <div class="tile is-child box">
                                <p class="has-text-weight-medium">Data Keluarga
                                <a class="button btn-rgt is-primary is-small" @click="keluarga = !keluarga">Edit</a>
                                </p>
                                <div v-show="keluarga"> <hr>
                                    <table class="table is-borderless is-fullwidth">
                                            <tr>
                                              <td width="200px" class=" is-borderless"> Status Pernikahan :</td>
                                              <td class=" is-borderless">
                                                <div class="select">
                                                <select v-model="post.status_pernikahan">
                                                  <option value="S"> S </option>
                                                  <option value="M0"> M0 </option>
                                                  <option value="M1"> M1 </option>
                                                  <option value="M2"> M2 </option>
                                                  <option value="M3"> M3 </option>
                                                  <option value="M4"> M4 </option>
                                                  <option value="M5"> M5 </option>
                                                </select>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Nama Pasangan :</td>
                                              <td>
                                              <tr>
                                                <td width="150px">Name</td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.nama_pasangan">
                                              </tr>
                                              <tr>
                                                <td>Tanggal Lahir</td>
                                                <input class="input" type="date" v-model="post.tgl_lahir_pasangan">
                                              </tr>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Ibu Kandung :</td>
                                              <td>
                                                <input 
                                                class="input"
                                                type="text"
                                                v-model="post.ibu_kandung">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Anak :</td>
                                              <td>
                                              <tr>
                                                <td width="150px">Anak Pertama</td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.nama_anak1">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Jenis Kelamin</td>
                                                <td>
                                                  <div class="select">
                                                  <select v-model="post.jenis_kelamin_anak1">
                                                    <option value="Laki">Laki-laki</option>
                                                    <option value="Perempuan">Perempuan</option>
                                                  </select>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Tanggal Lahir</td>
                                                <td>
                                                  <input class="input" type="date" v-model="post.tgl_lahir_anak1">
                                                </td>
                                              </tr>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Nomor Darurat :</td>
                                              <td>
                                              <tr>
                                                <td width="150px">Nama</td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.nama_darurat">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td> No. Telepon Darurat </td>
                                                <td>
                                                  <input 
                                                  class="input"
                                                  type="text"
                                                  v-model="post.no_darurat">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Relasi</td>
                                                <td>
                                                <div class="select">
                                                  <select v-model="post.relasi_darurat">
                                                    <option value="Mother">Mother</option>
                                                    <option value="Father">Father</option>
                                                    <option value="Brother">Brother</option>
                                                    <option value="Sister">Sister</option>
                                                    <option value="Family">Family</option>
                                                    <option value="Friend">Friend</option>
                                                  </select>
                                                  </div>
                                                </td>
                                              </tr>
                                              </td>
                                            </tr>
                                    </table>
                                </div>
                            </div>

                            <!-- FORM DATA PERUSAHAAN -->
                            <div class="tile is-child box">
                                <p class="has-text-weight-medium">Data Perusahaan
                                <a class="button btn-rgt is-primary is-small" @click="perusahaan = !perusahaan">Edit</a>
                                </p>
                                <div v-show="perusahaan"> <hr>
                                    <table class="table is-borderless is-fullwidth">
                                            <tr>
                                              <td width="200px">NIK :</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.nik">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Koperasi :</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.koperasi">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>DPLK :</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.DPLK">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Tanggal Masuk :</td>
                                              <td><input class="input" type="date" v-model="post.tgl_masuk"></td>
                                            </tr>
                                            <tr>
                                              <td> Posisi Karyawan :</td>
                                              <td>
                                              <div class="select">
                                                <select v-model="post.posisi_karyawan">
                                                  <option value="Office Boy">Office Boy</option>
                                                  <option value="Driver">Driver</option>
                                                  <option value="Messenger">Messenger</option>
                                                  <option value="Officer">Officer</option>
                                                  <option value="Receptionist">Receptionist</option>
                                                  <option value="Secretary">Secretary</option>
                                                  <option value="Others">Others</option>
                                                </select>
                                              </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>BPJS Ketenagakerjaan:</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.BPJS">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Asuransi kesehatan :</td>
                                              <td>
                                                <input
                                                class="input"
                                                type="text"
                                                v-model="post.asuransi_kesehatan">
                                              </td>
                                            </tr>
                                            <tr>
                                              <td> Status Karyawan :</td>
                                              <td>
                                                <div class="select">
                                                <select v-model="post.status_karyawan">
                                                  <option value="Percobaan 1 Bulan">Percobaan 1 Bulan </option>
                                                  <option value="Percobaan 2 Bulan">Percobaan 2 Bulan</option>
                                                  <option value="Percobaan 3 Bulan">Percobaan 3 Bulan</option>
                                                </select></div>
                                              </td>
                                            </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SAVE CHANGES PROFILE -->
                    <div class="control">
                      <button class="button btn-rgt is-dark">Save Changes</button>
                    </div>
                  </form>
                  </div>

                  <!-- UPLOAD FOTO -->
                  <div class="column is-4">
                    <div class="tile is-ancestor">
                      <div class="tile is-parent">
                          <div class="tile is-child box has-text-centered">
                              <img src="~assets/images/jk.jpg" class="is-rounded" alt="">
                              <p>Upload a different photo...</p>
                              <div class="center-block">
                                  <input type="file">
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div><br>
                
                <!-- TULISAN CHANGE PASSWORD -->
                <section class="hero is-light is-small card is-12" style="margin-bottom: 1%">
                    <div class="container" style="margin: 10px">
                      <h1 class="title">
                        Change Password
                      </h1>
                      <h2 class="subtitle">
                        It's a good idea to use a strong password that you don't use elsewhere
                    </h2>
                    </div>
                </section>

                <!-- FORM CHANGES PASSWORD -->
                <div>
                  <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box has-text-centered">
                          <table class="table is-borderless is-fullwidth">
                            <tr>
                              <td width="200px">Current Password :</td>
                              <td>
                                <input
                                class="input"
                                type="text"
                                v-model="current_pass">
                                <nuxt-link to="#">Forgot Password?</nuxt-link>
                              </td>
                            </tr>
                            <tr>
                              <td>New Password :</td>
                              <td>
                                <input
                                class="input"
                                type="text"
                                v-model="new_pass">
                              </td>
                            </tr>
                            <tr>
                              <td>Confirm Password :</td>
                              <td>
                                <input
                                class="input"
                                type="text"
                                v-model="confirm_pass">
                              </td>
                            </tr>
                          </table>
                          <div class="field buttons is-right">
                            <div class="control buttons is-right">
                            <button class="button is-dark" style="padding-left: 20%;padding-right: 20%">
                              Save Changes
                            </button>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
    
            </div>
        </div>
    </section>
</template>



<script>
import axios from 'axios'
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Navbar from "../components/Navbar"

export default{
    data(){
        return{
          pribadi : false,
          keluarga : false,
          perusahaan : false,

          post: {}
        }
    },
    components:{
        Sidebar,
        Navbar,
    },
    created(){
      this.$axios.get(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/profil`).then((response) => {
        this.post = response.data;
      });
    },
    methods: {
      updatePost(){
        this.$axios.put(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/profil?access_token=`+this.$store.state.auth, this.post).then(() => {
          this.$router.put({name: 'posts'});
        });
        this.$axios.get(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/profil?access_token=`+this.$store.state.auth)
        .then(resp => {
          const datauser = resp.data
          this.$store.commit('setData', datauser)
          Cookies.set('datauser', datauser);
        
          console.log(this.$store.state.data);
        })
      }
    }

}
</script>

<style>
.container .title{
    font-size: 1.3em;
}    
.subtitle{
  font-size: 1em;
}
.table.is-borderless tr,
.table.is-borderless td {
  border-bottom: 0;
}
.btn-rgt{
  float: right;
}
.is-fullwidth{
  width: 100%
}
.td{
  width:80rem
}
.is-rounded{
  border-radius: 50%;
  width: 200px;
}
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  width: 500px
} 
</style>