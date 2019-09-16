<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
        <div class="column is-10">
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
            
            <div class="columns">
            <div class="column is-8">
            <form method="post" @submit.prevent="editProfile" class="control" >
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <p class="has-text-weight-medium">Data Pribadi
                        <button class="button is-primary is-small"  @click="pribadi = !pribadi">Edit</button>
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
                                        v-model="nama_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Inisial :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="inisial"
                                        v-model="inisial_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Jenis Kelamin :</td>
                                      <td>
                                        <div class="select">
                                          <select name="jenis_kelamin" v-model="jenis_kelamin_edit">
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
                                          name="tempat_lahir"
                                          v-model="tempat_lahir_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Tanggal Lahir</td>
                                        <td><input type="date" class="input" v-model="tgl_lahir"></td>
                                      </tr>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Golongan Darah :</td>
                                      <td>
                                        <div class="select">
                                        <select name="golongan_darah" v-model="golongan_darah_edit">
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
                                        <select name="agama" v-model="agama_edit">
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
                                          name="telepon_rumah"
                                          v-model="telepon_rumah_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Handphone</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="no_telepon"
                                          v-model="no_telepon_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Lainnya</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="no_telepon_lainnya"
                                          v-model="no_telepon_lainnya_edit">
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
                                        name="email"
                                        v-model="email_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Alamat Rumah :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="alamat"
                                        v-model="alamat_edit">
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
                                        name="bank"
                                        v-model="bank_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Nomor Rekening</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="no_rekening"
                                        v-model="no_rekening_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Cabang</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="cabang"
                                        v-model="cabang_edit">
                                      </td>
                                    </tr>
                                    </td>
                                    </tr>
                                    <tr>
                                      <td>KTP :</td>
                                      <td>
                                        <div class="select">
                                          <select name="ktp" v-model="ktp_edit">
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
                                        name="no_ktp"
                                        v-model="no_ktp_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                    <td>Masa Berlaku KTP :</td>
                                    <td>
                                      <input class="input" name="masa_berlaku" v-model="masa_berlaku_edit">
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Alamat KTP :</td>
                                    <td>
                                      <input
                                      class="input"
                                      type="text"
                                      name="alamat_ktp"
                                      v-model="alamat_ktp_edit">
                                    </td>
                                  </tr>
                                  <tr>
                                      <td>KK :</td>
                                      <td>
                                        <div class="select">
                                          <select name="kk"v-model="kk_edit">
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
                                          <select name="gelar"v-model="gelar_edit">
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
                                          <select name="jurusan" v-model="jurusan_edit">
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
                                          <select name="pendidikan" v-model="pendidikan_edit">
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
                                          <select name="ijazah" v-model="ijazah_edit">
                                            <option value="COPY">COPY</option>
                                            <option value="NONE">NONE</option>
                                          </select></div>
                                      </tr>
                                      <tr>
                                        <td>Disahkan Oleh </td>
                                        <td>
                                          <div class="select">
                                          <select name="disahkan_oleh" v-model="disahkan_oleh_edit">
                                            <option value="Universitas Indonesia">Universitas Indonesia</option>
                                            <option value="Others">Others</option>
                                          </select></div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Tanggal Pengesahan</td>
                                        <td>
                                          <input class="input" name="tanggal_pengesahan" v-model="tanggal_pengesahan_edit">
                                        </td>
                                      </tr>
                                      
                                      </td>
                                    </tr>
                            </table>
                        </div>
                    </div>
                    <div class="tile is-child box">
                        <p class="has-text-weight-medium">Data Keluarga
                        <button class="button is-primary is-small" @click="keluarga = !keluarga">Edit</button>
                        </p>
                        <div v-show="keluarga"> <hr>
                            <table class="table is-borderless is-fullwidth">
                                    <tr>
                                      <td width="200px" class=" is-borderless"> Status Pernikahan :</td>
                                      <td class=" is-borderless">
                                        <div class="select">
                                        <select name="status_pernikahan" v-model="status_pernikahan_edit">
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
                                        name="nama_pasangan"
                                        v-model="nama_pasangan_edit">
                                      </tr>
                                      <tr>
                                        <td>Tanggal Lahir</td>
                                        <input class="input" name="tgl_lahir_pasangan" v-model="tgl_lahir_pasangan_edit">
                                      </tr>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td> Ibu Kandung :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="ibu_kandung"
                                        v-model="ibu_kandung_edit">
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
                                          name="nama_anak1"
                                          v-model="nama_anak1_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Jenis Kelamin</td>
                                        <td>
                                          <div class="select">
                                          <select name="jenis_kelamin_anak1" v-model="jenis_kelamin_anak1_edit">
                                            <option value="Laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                          </select>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>
                                          <input class="input" name="tgl_lahir_anak1" v-model="tgl_lahir_anak1_edit">
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
                                          name="nama_darurat"
                                          v-model="nama_darurat_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td> NO. Telepon Darurat </td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="no_darurat"
                                          v-model="no_darurat_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Relasi</td>
                                        <td>
                                        <div class="select">
                                          <select name="relasi_darurat" v-model="relasi_darurat_edit">
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
                    <div class="tile is-child box">
                        <p class="has-text-weight-medium">Data Perusahaan
                        <button class="button is-primary is-small" @click="perusahaan = !perusahaan">Edit</button>
                        </p>
                        <div v-show="perusahaan"> <hr>
                            <table class="table is-borderless is-fullwidth">
                                    <tr>
                                      <td width="200px">NIK :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="nik"
                                        v-model="nik_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Koperasi :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="koperasi"
                                        v-model="koperasi_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>DPLK :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="DPLK"
                                        v-model="DPLK_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td> Tanggal Masuk :</td>
                                      <td><input class="input" name="tgl_masuk" v-model="tgl_masuk_edit"></td>
                                    </tr>
                                    <tr>
                                      <td> Posisi Karyawan :</td>
                                      <td>
                                      <div class="select">
                                        <select name="posisi_karyawan" v-model="posisi_karyawan_edit">
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
                                        name="BPJS"
                                        v-model="BPJS_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td> Asuransi kesehatan :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="asuransi_kesehatan"
                                        v-model="asuransi_kesehatan_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td> Status Karyawan :</td>
                                      <td>
                                        <div class="select">
                                        <select name="status_karyawan" v-model="status_karyawan_edit">
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
            <div class="control">
              <button class="button is-dark">Save Changes</button>
            </div>
            </form>
            </div>

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
            <button class="button is-fullwidth is-dark">Save Changes</button>
            </div>
            </div><br>



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

          nama: this.$store.state.data.nama, jenis_kelamin: this.$store.state.data.jenis_kelamin, tempat_lahir: this.$store.state.data.tempat_lahir, tgl_lahir: this.$store.state.data.tgl_lahir, golongan_darah: this.$store.state.data.golongan_darah,
          agama: this.$store.state.data.raligion, telepon_rumah: this.$store.state.data.telepon_rumah, no_telepon: this.$store.state.data.no_telepon, no_telepon_lainnya: this.$store.state.data.no_telepon_lainnya,
          email: this.$store.state.data.email, alamat: this.$store.state.data.alamat, bank: this.$store.state.data.bank, no_rekening: this.$store.state.data.no_rekening, cabang: this.$store.state.data.cabang, 
          ktp: this.$store.state.data.ktp, no_ktp: this.$store.state.data.no_ktp, masa_berlaku: this.$store.state.data.masa_berlaku, alamat_ktp: this.$store.state.data.alamat_ktp, kk: this.$store.state.data.kk,
          gelar: this.$store.state.data.gelar, pendidikan: this.$store.state.data.pendidikan, jurusan: this.$store.state.data.jurusan, ijazah: this.$store.state.data.ijazah, tanggal_pengesahan: this.$store.state.data.tanggal_pengesahan,
          status_pernikahan: this.$store.state.data.status_pernikahan, nama_pasangan: this.$store.state.data.nama_pasangan, tgl_lahir_pasangan: this.$store.state.data.tgl_lahir_pasangan, ibu_kandung: this.$store.state.data.ibu_kandung, nama_anak1: this.$store.state.data.nama_anak1,
          jenis_kelamin_anak1: this.$store.state.data.jenis_kelamin_anak1, tgl_lahir_anak1: this.$store.state.data.tgl_lahir_anak1, nama_darurat: this.$store.state.data.nama_darurat, no_darurat: this.$store.state.data.no_darurat, relasi_darurat: this.$store.state.data.relasi_darurat,
          nik: this.$store.state.data.nik, koperasi: this.$store.state.data.koperasi, DPLK: this.$store.state.data.DPLK, tgl_masuk: this.$store.state.data.tgl_masuk, posisi_karyawan: this.$store.state.data.posisi_karyawan, BPJS: this.$store.state.data.BPJS, asuransi_kesehatan: this.$store.state.data.asuransi_kesehatan,
          status_karyawan: this.$store.state.data.status_karyawan, inisial: this.$store.state.data.inisial, disahkan_oleh: this.$store.state.data.disahkan_oleh,

          nama_edit: '', jenis_kelamin_edit: '', lahir_place_edit: '', lahir_edit: '', golongan_darah_edit: '', agama_edit: '', telepon_rumah_edit: '', no_telepon_edit: '', no_telepon_lainnya_edit: '',
          email_edit: '', alamat_edit: '', bank_edit: '', no_rekening_edit: '', cabang_edit: '', ktp_edit: '', no_ktp_edit: '', masa_berlaku_edit: '',
          alamat_ktp_edit: '', kk_edit: '', gelar_edit: '', pendidikan_edit: '', jurusan_edit: '', ijazah_edit: '', tanggal_pengesahan_edit: '',
          status_pernikahan_edit: '', nama_pasangan_edit: '', tgl_lahir_pasangan_edit: '', ibu_kandung_edit: '', nama_anak1_edit: '',
          jenis_kelamin_anak1_edit: '', tgl_lahir_anak1_edit: '', nama_darurat_edit: '', no_darurat_edit: '', relasi_darurat_edit: '',
          nik_edit: '', koperasi_edit: '', DPLK_edit: '', tgl_masuk_edit: '', posisi_karyawan_edit: '', BPJS_edit: '', asuransi_kesehatan_edit: '', status_karyawan_edit: '',
          inisial_edit:'', disahkan_oleh_edit:''
        }
    },
    components:{
        Sidebar,
        Navbar,
    },
    methods: {
      async editProfile(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user/${this.$store.state.user}/profiles?access_token=`+this.$store.state.auth, {
              nama: this.nama_edit, jenis_kelamin: this.jenis_kelamin_edit, lahir_place: this.lahir_place_edit, lahir: this.lahir_edit, golongan_darah: this.golongan_darah_edit, agama: this.agama_edit,
              telepon_rumah: this.telepon_rumah_edit, no_telepon: this.no_telepon_edit, no_telepon_lainnya: this.no_telepon_lainnya_edit, email: this.email_edit, 
              alamat: this.alamat_edit, bank: this.bank_edit, no_rekening: this.no_rekening_edit,  cabang: this.cabang_edit, ktp: this.ktp_edit, no_ktp: this.no_ktp_edit, masa_berlaku: this.masa_berlaku_edit,
              alamat_ktp: this.alamat_ktp_edit, kk: this.kk_edit, gelar: this.gelar_edit, pendidikan: this.pendidikan_edit, jurusan: this.jurusan_edit, ijazah: this.ijazah,
              tanggal_pengesahan: this.tanggal_pengesahan_edit, status_pernikahan: this.status_pernikahan_edit, nama_pasangan: this.nama_pasangan_edit, tgl_lahir_pasangan: this.tgl_lahir_pasangan_edit, ibu_kandung: this.ibu_kandung_edit,
              nama_anak1: this.nama_anak1_edit, jenis_kelamin_anak1: this.jenis_kelamin_anak1_edit, tgl_lahir_anak1: this.tgl_lahir_anak1_edit, nama_darurat: this.nama_darurat_edit, no_darurat: this.no_darurat_edit, relasi_darurat: this.relasi_darurat_edit,
              nik: this.nik_edit, koperasi: this.koperasi_edit, DPLK: this.DPLK_edit, tgl_masuk: this.tgl_masuk_edit, posisi_karyawan: this.posisi_karyawan_edit, BPJS: this.BPJS_edit, asuransi_kesehatan: this.asuransi_kesehatan_edit,
              status_karyawan: this.status_karyawan_edit, inisial: this.inisial_edit, disahkan_oleh: this.disahkan_oleh_edit,
          })
        }
        catch (e){
          
        }
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
.button{
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
</style>