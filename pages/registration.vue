<template>
<section class="registration" style="background-color: #f7f7f7">
    <div class="container v-middle">
    <div class="columns page is-centered">
        <div class="column is-10 card" style="margin-top: 5%;margin-bottom:5%">
            <h1 class="heading"> Registration Form</h1>
            
            <div class="tabs">
                <a v-bind:class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1">Data Pribadi</a>
                <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2">Data Keluarga</a>
                <a v-bind:class="[ activetab === 3 ? 'active' : '' ]" @click="activetab=3">Data Perusahaan</a>
            </div>
            
            <!-- Tab panes -->
            <form method="post" @submit.prevent="insert_profile">
            <div class="content samew">
              <!-- Data Pribadi -->
              <div v-if="activetab === 1">
              <table class=" table is-borderless">
                    <tr>
                      <td width="200px">Nama :</td>
                      <td>
                        <input 
                        class="input is-danger"
                        type="text"
                        v-model="nama"
                        required>
                        <p class="help is-danger">Is Required</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Inisial :</td>
                      <td>
                        <input 
                        class="input is-danger"
                        type="text"
                        v-model="inisial"
                        required>
                        <p class="help is-danger">Is Required</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin :</td>
                      <td>
                        <div class="select">
                          <select v-model="jenis_kelamin" required>
                            <option value="Laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Tempat, Tanggal Lahir</td>
                      <td>
                      <tr>
                        <td width="150px">Tempat Lahir :</td>
                        <td>
                          <input
                          class="input"
                          type="text"
                          v-model="tempat_lahir"
                          required>
                        </td>
                      </tr>
                      <tr>
                        <td>Tanggal Lahir :</td>
                        <td><input type="date" class="input" v-model="tgl_lahir"></td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Golongan Darah :</td>
                      <td>
                        <div class="select">
                        <select v-model="golongan_darah">
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
                        <select v-model="agama">
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
                        <td width="150px">Rumah :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="telepon_rumah">
                        </td>
                      </tr>
                      <tr>
                        <td>Handphone :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="no_telepon">
                        </td>
                      </tr>
                      <tr>
                        <td>Lainnya :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="no_telepon_lainnya">
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
                        v-model="email">
                      </td>
                    </tr>
                    <tr>
                      <td>Alamat :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="alamat">
                      </td>
                    </tr>
                    <tr>
                      <td>Akun Bank :</td>
                      <td>
                    <tr>
                      <td width="150px">Bank :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="bank">
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor Rekening :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="no_rekening">
                      </td>
                    </tr>
                    <tr>
                      <td>Cabang :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="cabang">
                      </td>
                    </tr>
                    </td>
                    </tr>
                    <tr>
                      <td>KTP :</td>
                      <td>
                        <div class="select">
                          <select v-model="ktp">
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
                        v-model="nomor_ktp">
                      </td>
                    </tr>
                    <tr>
                    <td>Masa Berlaku KTP :</td>
                    <td>
                      <input class="input" v-model="masa_berlaku">
                    </td>
                  </tr>
                  <tr>
                    <td>Alamat KTP :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="alamat_ktp">
                    </td>
                  </tr>
                  <tr>
                      <td>KK :</td>
                      <td>
                        <div class="select">
                          <select v-model="kk">
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
                        <td>Gelar :</td>
                        <td>
                          <div class="select">
                          <select v-model="gelar">
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
                        <td>Jurusan :</td>
                        <td>
                          <div class="select">
                          <select v-model="jurusan">
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Management Informatika">Management Informatika</option>
                            <option value="Teknik KOmputer dan Jaringan">Teknik KOmputer dan Jaringan</option>
                            <option value="Others">Others</option>
                          </select></div>
                        </td>
                        </tr>
                        <tr>
                        <td>Pendidikan :</td>
                        <td>
                          <div class="select">
                          <select v-model="pendidikan">
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
                          <select v-model="ijazah">
                            <option value="COPY">COPY</option>
                            <option value="NONE">NONE</option>
                          </select></div>
                      </tr>
                      <tr>
                        <td>Disahkan Oleh :</td>
                        <td>
                          <div class="select">
                          <select v-model="disahkan_oleh">
                            <option value="Universitas Indonesia">Universitas Indonesia</option>
                            <option value="Others">Others</option>
                          </select></div>
                        </td>
                      </tr>
                      <tr>
                        <td>Tanggal Pengesahan  :</td>
                        <td>
                          <input class="input" v-model="tanggal_pengesahan">
                        </td>
                      </tr>
                      
                      </td>
                    </tr>
                    
                  </table>
                  <div class="is-pulled-right">
                    <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" class="button is-primary" @click="activetab=2">Next</a>
                  </div>
                  
              </div>

              <!-- Data Keluarga -->
              <div v-if="activetab === 2">
              <table class="table is-borderless">
                    <tr>
                      <td width="200px" class=" is-borderless"> Status Pernikahan :</td>
                      <td class=" is-borderless">
                        <div class="select">
                        <select v-model="status_pernikahan">
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
                      <td> Pasangan :</td>
                      <td>
                      <tr>
                        <td width="150px">nama</td>
                        <input 
                        class="input"
                        type="text"
                        v-model="nama_pasangan">
                      </tr>
                      <tr>
                        <td>Tanggal Lahir</td>
                        <input type="date" class="input" v-model="tgl_lahir_pasangan">
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Ibu Kandung :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="ibu_kandung">
                      </td>
                    </tr>
                    <tr>
                      <td>Anak :</td>
                      <td>
                      <tr>
                        <td width="150px">Nama Anak Pertama</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="nama_anak1">
                        </td>
                      </tr>
                      <tr>
                        <td>Jenis Kelamin</td>
                        <td>
                          <div class="select">
                          <select v-model="jenis_kelamin_anak1">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Tanggal Lahir</td>
                        <td>
                          <input type="date" class="input" v-model="tgl_lahir_anak1">
                        </td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor Darurat :</td>
                      <td>
                      <tr>
                        <td width="150px">nama</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="nama_darurat">
                        </td>
                      </tr>
                      <tr>
                        <td>Nomor Darurat</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="no_darurat">
                        </td>
                      </tr>
                      <tr>
                        <td>Relasi</td>
                        <td>
                        <div class="select">
                          <select v-model="relasi_darurat">
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
                  <div class="is-pulled-right">
                    <a v-bind:class="[ activetab === 3 ? 'active' : '' ]" class="button is-primary" @click="activetab=3">Next</a>
                  </div>
              </div>

              <!-- Data Perusahaan -->
              <div v-if="activetab === 3">
                <table class="table is-borderless">
                  <tr>
                    <td width="200px">NIK :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="nik">
                    </td>
                  </tr>
                  <tr>
                    <td>Koperasi :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="koperasi">
                    </td>
                  </tr>
                  <tr>
                    <td>DPLK :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="DPLK">
                    </td>
                  </tr>
                  <tr>
                    <td>Tanggal Masuk :</td>
                    <td><input type="date" class="input" v-model="tanggal_masuk"></td>
                  </tr>
                  <tr>
                    <td>Posisi :</td>
                    <td>
                    <div class="select">
                      <select v-model="posisi_karyawan">
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
                      v-model="BPJS">
                    </td>
                  </tr>
                  <tr>
                    <td>Asuransi Kesehatan :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="asuransi_kesehatan">
                    </td>
                  </tr>
                  <tr>
                    <td>Status Karyawan :</td>
                    <td>
                      <div class="select">
                      <select v-model="status_karyawan">
                        <option value="Percobaan 1 Bulan">Percobaan 1 Bulan </option>
                        <option value="Percobaan 2 Bulan">Percobaan 2 Bulan</option>
                        <option value="Percobaan 3 Bulan">Percobaan 3 Bulan</option>
                      </select></div>
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Divisi :</td>
                    <td>
                      <div class="select">
                      <select v-model="tim">
                        <option value="Backend">Backend</option>
                        <option value="Frontend">Front End</option>
                      </select></div>
                    </td>
                  </tr>
                </table>
                <div class="control buttons is-right">
                  <button class="button is-success"> Submit </button>
                </div>
              </div>
            </div>
            </form>
        </div>
    </div>
          <!-- MODAL SUCCESS -->
          <div class="modal" id="modal">
               <div class="modal-background" ></div>
                   <div class="modal-card modcard">
                           <!-- MODAL CONTENT-->
                           <div class="notification is-paddingless">
                              <div class="notification is-success has-text-centered">
                                <br/>
                                <div class="img image is-128x128">
                                  <img src="checked.png">
                                </div>
                              </div>
                              <div class="notification has-text-centered">
                                <strong class="title">Success!</strong> <br/>
                                <p class="subtitle">Your Account has been created Successfully!</p> <br/>
                                 <button class="button is-primary" @click="success">
                                     Go To Profile
                                 </button>
                           </div>
                   </div>
               </div>
          </div>
    </div>
</section>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import axios from 'axios'
export default{
  data() {
    return{
      activetab: 1,
      nama: '', jenis_kelamin: '', tempat_lahir: '', tgl_lahir: '', golongan_darah: '', agama: '', telepon_rumah: '', no_telepon: '', no_telepon_lainnya: '',
      email: '', alamat: '', bank: '', no_rekening: '', cabang: '', ktp: '', nomor_ktp: '', masa_berlaku: '',
      alamat_ktp: '', kk: '', gelar: '', pendidikan: '', jurusan: '', ijazah: '', tanggal_pengesahan: '',
      status_pernikahan: '', nama_pasangan: '', tgl_lahir_pasangan: '', ibu_kandung: '', nama_anak1: '',
      jenis_kelamin_anak1: '', tgl_lahir_anak1: '', nama_darurat: '', no_darurat: '', relasi_darurat: '',
      nik: '', koperasi: '', DPLK: '', tanggal_masuk: '', posisi_karyawan: '', BPJS: '', asuransi_kesehatan: '', status_karyawan: '',
      inisial:'', disahkan_oleh:'', tim:''
    }
  },
  methods: {
      success() {
        this.$router.push('/profile')
      },

      async insert_profile(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/profil?access_token=`+this.$store.state.auth, {
              email: this.email, nik: this.nik, nama: this.nama,
              inisial: this.inisial,  jenis_kelamin: this.jenis_kelamin, posisi_karyawan: this.posisi_karyawan,
              office: this.posisi_karyawan, tgl_lahir: this.tgl_lahir, tempat_lahir: this.tempat_lahir,
              alamat: this.alamat, telepon_rumah: this.telepon_rumah,
              no_telepon: this.no_telepon, no_telepon_lainnya: this.no_telepon_lainnya, ibu_kandung: this.ibu_kandung,
              tanggal_masuk: this.tanggal_masuk, status_karyawan: this.status_karyawan, agama: this.agama, status_pernikahan: this.status_pernikahan,
              golongan_darah: this.golongan_darah, bank: this.bank, no_rekening: this.no_rekening,
              cabang: this.cabang, BPJS: this.BPJS, DPLK: this.DPLK,
              koperasi: this.koperasi, asuransi_kesehatan: this.asuransi_kesehatan, nama_darurat: this.nama_darurat,
              no_darurat: this.no_darurat, relasi_darurat: this.relasi_darurat, nama_pasangan: this.nama_pasangan,
              tgl_lahir_pasangan: this.tgl_lahir_pasangan, nama_anak1: this.nama_anak1, child_nama2: this.child_nama2,
              child_nama3: this.child_nama3, jenis_kelamin_anak1: this.jenis_kelamin_anak1, child_jenis_kelamin2: this.child_jenis_kelamin2,
              child_jenis_kelamin3: this.child_jenis_kelamin3, tgl_lahir_anak1: this.tgl_lahir_anak1, child_tgl_lahir2: this.child_tgl_lahir2,
              child_tgl_lahir3: this.child_tgl_lahir3, ktp: this.ktp, nomor_ktp: this.nomor_ktp,
              kk: this.kk, masa_berlaku: this.masa_berlaku, alamat_ktp: this.alamat_ktp,
              npwp: this.npwp, jurusan: this.jurusan, pendidikan: this.pendidikan,
              ijazah: this.ijazah, disahkan_oleh: this.disahkan_oleh, tanggal_pengesahan: this.tanggal_pengesahan,
              gelar: this.gelar, reference: this.reference, tim: this.tim,
          })

          const datauser = data
          this.$store.commit('setData', datauser)
          Cookies.set('datauser', datauser);
        
          console.log(this.$store.state.data);

          document.getElementById('modal').classList.add('is-active');
        }

        catch (e) {
          this.pesan = e.response.data.error.statusCode
          if (this.pesan = 401){
            this.pesan="Invalid Email or Password"
          }
        }
      },

    }
}
</script>

<style>
.img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  width: 500px
  } 
.span{
  margin-right: 20%;
}
.registration .page{
  align-items: center;
}
.heading{
  font-size: 1.80em;
  margin-top:10px;
  margin-bottom:10px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.field-label{
  padding-left: 0;
}
.table.is-borderless tr,
.table.is-borderless td {
  border-bottom: 0;
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
  background-color: #f1f1f1;
  font-weight: bold;
}
.tabs a:last-child { 
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.samew{
  padding-left: 10px;
}
</style>