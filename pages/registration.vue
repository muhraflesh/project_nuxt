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
            <form method="post">
            <div class="content">
              <div v-if="activetab === 1">
              <table class=" table is-borderless">
                    <tr>
                      <td>Name :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="nama">
                      </td>
                    </tr>
                    <tr>
                      <td>Sex :</td>
                      <td>
                        <div class="select">
                          <select v-model="jenisKelamin">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Date Of Birth</td>
                      <td>
                      <tr>
                        <td>Place :</td>
                        <td>
                          <input
                          class="input"
                          type="text"
                          v-model="tempatLahir">
                        </td>
                      </tr>
                      <tr>
                        <td>Date :</td>
                        <td><input ref="cal1" type="date" class="input" v-model="tanggalLahir"></td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Blood Type :</td>
                      <td>
                        <div class="select">
                        <select v-model="golDarah">
                          <option value="1">A</option>
                          <option value="2">B</option>
                          <option value="3">AB</option>
                          <option value="4">O</option>
                        </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Religion :</td>
                      <td>
                        <div class="select">
                        <select v-model="agama">
                          <option value="1">Islam</option>
                          <option value="2">Kristen</option>
                          <option value="3">Katolik</option>
                          <option value="4">Buddha</option>
                          <option value="5">Hindu</option>
                        </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number :</td>
                      <td>
                      <tr>
                        <td>Home :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="nomorTelpRumah">
                        </td>
                      </tr>
                      <tr>
                        <td>Mobile Phone :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="nomorHP">
                        </td>
                      </tr>
                      <tr>
                        <td>Other :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="nomorTelpLain">
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
                      <td>Residential Address :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="alamatRmh">
                      </td>
                    </tr>
                    <tr>
                      <td>Bank Account :</td>
                      <td>
                        <tr>
                      <td>Name :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="namaBankAcc">
                      </td>
                    </tr>
                    <tr>
                      <td>Bank :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="namaBank">
                      </td>
                    </tr>
                    <tr>
                      <td>Account Number :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="nomerBankAcc">
                      </td>
                    </tr>
                    <tr>
                      <td>Branch :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="branchBank">
                      </td>
                    </tr>
                    </td>
                    </tr>
                    <tr>
                      <td>KTP :</td>
                      <td>
                        <div class="select">
                          <select v-model="KTP">
                            <option value="1">COPY</option>
                            <option value="2">NONE</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>KTP Number :</td>
                      <td>
                        <input
                        class="input"
                        type="text"
                        v-model="nomorKTP">
                      </td>
                    </tr>
                    <tr>
                    <td>KTP Valid Trough :</td>
                    <td>
                      <input ref="cal1" type="date" class="input" v-model="validKTP">
                    </td>
                  </tr>
                  <tr>
                    <td>KTP Address :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="alamatKTP">
                    </td>
                  </tr>
                  <tr>
                      <td>KK :</td>
                      <td>
                        <div class="select">
                          <select v-model="KK">
                            <option value="1">COPY</option>
                            <option value="2">NONE</option>
                          </select>
                        </div>
                      </td>
                  </tr>
                    <tr>
                      <td>Educational Background :</td>
                      <td>
                        <tr>
                        <td>Degree :</td>
                        <td>
                          <div class="select">
                          <select v-model="gelar">
                            <option value="1">SMU</option>
                            <option value="2">D1</option>
                            <option value="3">D2</option>
                            <option value="4">D3</option>
                            <option value="5">S1</option>
                            <option value="6">S2</option>
                            <option value="7">S3</option>
                            <option value="8">Others</option>
                          </select></div>
                        </td>
                        </tr>
                        <tr>
                        <td>Major :</td>
                        <td>
                          <div class="select">
                          <select v-model="jurusan">
                            <option value="1">Teknik Informatika</option>
                            <option value="2">Management Informatika</option>
                            <option value="3">Teknik KOmputer dan Jaringan</option>
                            <option value="4">Others</option>
                          </select></div>
                        </td>
                        </tr>
                        <tr>
                        <td>School / University :</td>
                        <td>
                          <div class="select">
                          <select v-model="universitas">
                            <option value="1">Universitas Indonesia</option>
                            <option value="2">Others</option>
                          </select></div>
                        </td>
                        </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Certificate :</td>
                      <td>
                      <tr>
                        <div class="select">
                          <select v-model="sertifikat">
                            <option value="1">COPY</option>
                            <option value="2">NONE</option>
                          </select></div>
                      </tr>
                      <tr>
                        <td>Issued By :</td>
                        <td>
                          <div class="select">
                          <select v-model="univSertifikat">
                            <option value="1">Universitas Indonesia</option>
                            <option value="2">Others</option>
                          </select></div>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Of Issuance :</td>
                        <td>
                          <input ref="cal1" type="date" class="input" v-model="tglSertifikat">
                        </td>
                      </tr>
                      <tr>
                        <td>Degree :</td>
                        <td>
                          <input
                          class="input"
                          type="text"
                          v-model="gelarSertifikat">
                        </td>
                      </tr>
                      </td>
                    </tr>
                  </table>
              </div>


              <div v-if="activetab === 2">
              <table class="table is-borderless">
                    <tr>
                      <td>Martia Status :</td>
                      <td>
                        <div class="select">
                        <select v-model="status">
                          <option value="1"> S </option>
                          <option value="2"> M0 </option>
                          <option value="3"> M1 </option>
                          <option value="4"> M2 </option>
                          <option value="5"> M3 </option>
                          <option value="6"> M4 </option>
                          <option value="7"> M5 </option>
                        </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Spouse :</td>
                      <td>
                      <tr>
                        <td>Name</td>
                        <input 
                        class="input"
                        type="text"
                        v-model="namaPasangan">
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <input ref="cal1" type="date" class="input" v-model="lahirPasangan">
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Mother's Maiden :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="namaIbu">
                      </td>
                    </tr>
                    <tr>
                      <td>Children :</td>
                      <td>
                      <tr>
                        <td>First Child</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="anakPertama">
                        </td>
                      </tr>
                      <tr>
                        <td>Sex</td>
                        <td>
                          <div class="select">
                          <select v-model="jenisKelaminAnak">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <td>
                          <input ref="cal1" type="date" class="input" v-model="lahirAnak">
                        </td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Emegency Number :</td>
                      <td>
                      <tr>
                        <td>Name</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="namaEmergensi">
                        </td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="noEmergensi">
                        </td>
                      </tr>
                      <tr>
                        <td>Relation</td>
                        <td>
                        <div class="select">
                          <select v-model="relasiEmergensi">
                            <option value="1">Mother</option>
                            <option value="2">Father</option>
                            <option value="3">Brother</option>
                            <option value="4">Sister</option>
                            <option value="5">Family</option>
                            <option value="6">Friend</option>
                          </select>
                          </div>
                        </td>
                      </tr>
                      </td>
                    </tr>
                  </table>
              </div>


              <div v-if="activetab === 3">
                <table class="table is-borderless">
                  <tr>
                    <td>NIK :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="NIK">
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
                    <td>Joining Date :</td>
                    <td><input ref="cal1" type="date" class="input" v-model="tglJoin"></td>
                  </tr>
                  <tr>
                    <td>Position :</td>
                    <td>
                    <div class="select">
                      <select v-model="posisi">
                        <option value="1">Office Boy</option>
                        <option value="2">Driver</option>
                        <option value="3">Messenger</option>
                        <option value="4">Officer</option>
                        <option value="5">Receptionist</option>
                        <option value="6">Secretary</option>
                        <option value="7">Others</option>
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
                    <td>Health Insurance :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="asuransiKesehatan">
                    </td>
                  </tr>
                  <tr>
                    <td>Employment Status :</td>
                    <td>
                      <div class="select">
                      <select v-model="statusPekerjaan">
                        <option value="1">Percobaan 1 Bulan </option>
                        <option value="2">Percobaan 2 Bulan</option>
                        <option value="3">Percobaan 3 Bulan</option>
                      </select></div>
                    </td>
                  </tr>
                </table>
                <div class="control buttons is-right">
                  <button class="button is-link"> Submit </button>
                </div>
              </div>
            </div>
            </form>
        </div>
    </div>
    </div>
</section>
</template>

<script>

export default{
  data() {
    return{
      activetab: 1,
    }
}}
</script>

<style>
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
</style>