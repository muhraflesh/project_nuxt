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
                      <td width="200px">Name :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="name">
                      </td>
                    </tr>
                    <tr>
                      <td>Code Name :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="code_name">
                      </td>
                    </tr>
                    <tr>
                      <td>Sex :</td>
                      <td>
                        <div class="select">
                          <select v-model="sex">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Date Of Birth</td>
                      <td>
                      <tr>
                        <td width="150px">Place :</td>
                        <td>
                          <input
                          class="input"
                          type="text"
                          v-model="dob_place">
                        </td>
                      </tr>
                      <tr>
                        <td>Date :</td>
                        <td><input type="date" class="input" v-model="dob"></td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Blood Type :</td>
                      <td>
                        <div class="select">
                        <select v-model="blood_tipe">
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
                      <td>Religion :</td>
                      <td>
                        <div class="select">
                        <select v-model="religion">
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
                      <td>Phone Number :</td>
                      <td>
                      <tr>
                        <td width="150px">Home :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="home_phone">
                        </td>
                      </tr>
                      <tr>
                        <td>Mobile Phone :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="mobile_phone">
                        </td>
                      </tr>
                      <tr>
                        <td>Other :</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="other_phone">
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
                        v-model="email_address">
                      </td>
                    </tr>
                    <tr>
                      <td>Residential Address :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="address">
                      </td>
                    </tr>
                    <tr>
                      <td>Bank Account :</td>
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
                      <td>Account Number :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="account_number">
                      </td>
                    </tr>
                    <tr>
                      <td>Branch :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="branch">
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
                      <td>KTP Number :</td>
                      <td>
                        <input
                        class="input"
                        type="text"
                        v-model="ktp_number">
                      </td>
                    </tr>
                    <tr>
                    <td>KTP Valid Trough :</td>
                    <td>
                      <input class="input" v-model="valid_through">
                    </td>
                  </tr>
                  <tr>
                    <td>KTP Address :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="ktp_address">
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
                      <td>Educational Background :</td>
                      <td>
                        <tr>
                        <td>Degree :</td>
                        <td>
                          <div class="select">
                          <select v-model="degree_certificate">
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
                        <td>Major :</td>
                        <td>
                          <div class="select">
                          <select v-model="major">
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Management Informatika">Management Informatika</option>
                            <option value="Teknik KOmputer dan Jaringan">Teknik KOmputer dan Jaringan</option>
                            <option value="Others">Others</option>
                          </select></div>
                        </td>
                        </tr>
                        <tr>
                        <td>School / University :</td>
                        <td>
                          <div class="select">
                          <select v-model="school">
                            <option value="Universitas Indonesia">Universitas Indonesia</option>
                            <option value="Others">Others</option>
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
                          <select v-model="certificate">
                            <option value="COPY">COPY</option>
                            <option value="NONE">NONE</option>
                          </select></div>
                      </tr>
                      <tr>
                        <td>Issued By :</td>
                        <td>
                          <div class="select">
                          <select v-model="issued_by">
                            <option value="Universitas Indonesia">Universitas Indonesia</option>
                            <option value="Others">Others</option>
                          </select></div>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Of Issuance :</td>
                        <td>
                          <input class="input" v-model="date_issuance">
                        </td>
                      </tr>
                      
                      </td>
                    </tr>
                  </table>
              </div>

              <!-- Data Keluarga -->
              <div v-if="activetab === 2">
              <table class="table is-borderless">
                    <tr>
                      <td width="200px" class=" is-borderless"> Marital Status :</td>
                      <td class=" is-borderless">
                        <div class="select">
                        <select v-model="marital_status">
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
                      <td> Spouse :</td>
                      <td>
                      <tr>
                        <td width="150px">Name</td>
                        <input 
                        class="input"
                        type="text"
                        v-model="spouse_name">
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <input class="input" v-model="spouse_dob">
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Mother's Maiden :</td>
                      <td>
                        <input 
                        class="input"
                        type="text"
                        v-model="mother_maiden">
                      </td>
                    </tr>
                    <tr>
                      <td>Children :</td>
                      <td>
                      <tr>
                        <td width="150px">First Child</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="child_name1">
                        </td>
                      </tr>
                      <tr>
                        <td>Sex</td>
                        <td>
                          <div class="select">
                          <select v-model="child_sex1">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <td>
                          <input class="input" v-model="child_dob1">
                        </td>
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Emegency Number :</td>
                      <td>
                      <tr>
                        <td width="150px">Name</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="emergency_name">
                        </td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>
                          <input 
                          class="input"
                          type="text"
                          v-model="emergency_number">
                        </td>
                      </tr>
                      <tr>
                        <td>Relation</td>
                        <td>
                        <div class="select">
                          <select v-model="relation_emergency">
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
                    <td>Joining Date :</td>
                    <td><input class="input" v-model="joining_date"></td>
                  </tr>
                  <tr>
                    <td>Position :</td>
                    <td>
                    <div class="select">
                      <select v-model="emp_position">
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
                    <td>Health Insurance :</td>
                    <td>
                      <input
                      class="input"
                      type="text"
                      v-model="health_insurance">
                    </td>
                  </tr>
                  <tr>
                    <td>Employment Status :</td>
                    <td>
                      <div class="select">
                      <select v-model="employee_status">
                        <option value="Percobaan 1 Bulan">Percobaan 1 Bulan </option>
                        <option value="Percobaan 2 Bulan">Percobaan 2 Bulan</option>
                        <option value="Percobaan 3 Bulan">Percobaan 3 Bulan</option>
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
          <div class="modal" id="modal">
                                <div class="modal-background" ></div>
                                <div class="modal-card modcard">
                                    <header class="modal-card-head">
                                    <p class="modal-card-title">WELCOME</p>
                                    <button class="delete" aria-label="close"></button>
                                    </header>
                                    <section class="modal-card-body">
                                    <!-- MODAL CONTENT-->
                                    
                                    <div class="field is-horizontal">
                                        <div class="field-label is-normal">
                                            <p class="subtitle">
                                                WELCOME!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="field is-horizontal">
                                        <div class="field-label">
                                            <!-- Left empty for spacing -->
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                
                                                <a href="/profile">
                                                <button class="button is-primary">
                                                Profile
                                                </button>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </section>
                                    <footer class="modal-card-foot">
                                    </footer>
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
      name: '', sex: '', dob_place: '', dob: '', blood_tipe: '', religion: '', home_phone: '', mobile_phone: '', other_phone: '',
      email_address: '', address: '', bank: '', account_number: '', branch: '', ktp: '', ktp_number: '', valid_through: '',
      ktp_address: '', kk: '', degree_certificate: '', school: '', major: '', certificate: '', date_issuance: '',
      marital_status: '', spouse_name: '', spouse_dob: '', mother_maiden: '', child_name1: '',
      child_sex1: '', child_dob1: '', emergency_name: '', emergency_number: '', relation_emergency: '',
      nik: '', koperasi: '', DPLK: '', joining_date: '', emp_position: '', BPJS: '', health_insurance: '', employee_status: '',
      code_name:'', issued_by:''
    }
  },
  methods: {
      async insert_profile(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user/${this.$store.state.user}/profiles?access_token=`+this.$store.state.auth, {
              email_address: this.email_address, nik: this.nik, name: this.name,
              code_name: this.code_name,  sex: this.sex, emp_position: this.emp_position,
              office: this.emp_position, dob: this.dob, dob_place: this.dob_place,
              address: this.address, home_phone: this.home_phone,
              mobile_phone: this.mobile_phone, other_phone: this.other_phone, mother_maiden: this.mother_maiden,
              joining_date: this.joining_date, employee_status: this.employee_status, religion: this.religion, marital_status: this.marital_status,
              blood_tipe: this.blood_tipe, bank: this.bank, account_number: this.account_number,
              branch: this.branch, BPJS: this.BPJS, DPLK: this.DPLK,
              koperasi: this.koperasi, health_insurance: this.health_insurance, emergency_name: this.emergency_name,
              emergency_number: this.emergency_number, relation_emergency: this.relation_emergency, spouse_name: this.spouse_name,
              spouse_dob: this.spouse_dob, child_name1: this.child_name1, child_name2: this.child_name2,
              child_name3: this.child_name3, child_sex1: this.child_sex1, child_sex2: this.child_sex2,
              child_sex3: this.child_sex3, child_dob1: this.child_dob1, child_dob2: this.child_dob2,
              child_dob3: this.child_dob3, ktp: this.ktp, ktp_number: this.ktp_number,
              kk: this.kk, valid_through: this.valid_through, ktp_address: this.ktp_address,
              npwp: this.npwp, major: this.major, school: this.school,
              certificate: this.certificate, issued_by: this.issued_by, date_issuance: this.date_issuance,
              degree_certificate: this.degree_certificate, reference: this.reference, team_project: this.team_project,
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
      }
    }
}
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
.samew{
  padding-left: 10px;
}
</style>