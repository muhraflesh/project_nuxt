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
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <form method="post" @submit.prevent="" class="control" >
                    <div class="tile is-child box">
                        <p class="has-text-weight-medium">Data Pribadi
                        <button class="button is-primary is-small"  @click="pribadi = !pribadi">Edit</button>
                        </p>
                        <div v-show="pribadi"><hr>
                            <table class=" table is-borderless is-fullwidth">
                                    <tr>
                                      <td width="200px">Name :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="name"
                                        v-model="name_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Code Name :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="code_name"
                                        v-model="code_name_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Sex :</td>
                                      <td>
                                        <div class="select">
                                          <select name="sex" v-model="sex_edit">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                          </select>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Date Of Birth :</td>
                                      <td>
                                      <tr>
                                        <td width="150px">Place</td>
                                        <td>
                                          <input
                                          class="input"
                                          type="text"
                                          name="dob_place"
                                          v-model="dob_place_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Date</td>
                                        <td><input type="date" class="input" v-model="dob"></td>
                                      </tr>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Blood Type :</td>
                                      <td>
                                        <div class="select">
                                        <select name="blood_tipe" v-model="blood_tipe_edit">
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
                                        <select name="religion" v-model="religion_edit">
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
                                        <td width="150px">Home</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="home_phone"
                                          v-model="home_phone_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Mobile Phone</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="mobile_phone"
                                          v-model="mobile_phone_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Other</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="other_phone"
                                          v-model="other_phone_edit">
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
                                        name="email_address"
                                        v-model="email_address_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Residential Address :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="address"
                                        v-model="address_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Bank Account :</td>
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
                                      <td>Account Number</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="account_number"
                                        v-model="account_number_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Branch</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="branch"
                                        v-model="branch_edit">
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
                                      <td>KTP Number :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="ktp_number"
                                        v-model="ktp_number_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                    <td>KTP Valid Trough :</td>
                                    <td>
                                      <input class="input" name="valid_through" v-model="valid_through_edit">
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>KTP Address :</td>
                                    <td>
                                      <input
                                      class="input"
                                      type="text"
                                      name="ktp_address"
                                      v-model="ktp_address_edit">
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
                                      <td>Educational Background:</td>
                                      <td>
                                        <tr>
                                        <td>Degree</td>
                                        <td>
                                          <div class="select">
                                          <select name="degree_certificate"v-model="degree_certificate_edit">
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
                                        <td>Major</td>
                                        <td>
                                          <div class="select">
                                          <select name="major" v-model="major_edit">
                                            <option value="Teknik Informatika">Teknik Informatika</option>
                                            <option value="Management Informatika">Management Informatika</option>
                                            <option value="Teknik KOmputer dan Jaringan">Teknik KOmputer dan Jaringan</option>
                                            <option value="Others">Others</option>
                                          </select></div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>School / University</td>
                                        <td>
                                          <div class="select">
                                          <select name="school" v-model="school_edit">
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
                                          <select name="certificate" v-model="certificate_edit">
                                            <option value="COPY">COPY</option>
                                            <option value="NONE">NONE</option>
                                          </select></div>
                                      </tr>
                                      <tr>
                                        <td>Issued By</td>
                                        <td>
                                          <div class="select">
                                          <select name="issued_by" v-model="issued_by_edit">
                                            <option value="Universitas Indonesia">Universitas Indonesia</option>
                                            <option value="Others">Others</option>
                                          </select></div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Date Of Issuance</td>
                                        <td>
                                          <input class="input" name="date_issuance" v-model="date_issuance_edit">
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
                                      <td width="200px" class=" is-borderless"> Marital Status :</td>
                                      <td class=" is-borderless">
                                        <div class="select">
                                        <select name="martial_status" v-model="marital_status_edit">
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
                                        name="spouse_name"
                                        v-model="spouse_name_edit">
                                      </tr>
                                      <tr>
                                        <td>Date Of Birth</td>
                                        <input class="input" name="spouse_dob" v-model="spouse_dob_edit">
                                      </tr>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Mother's Maiden :</td>
                                      <td>
                                        <input 
                                        class="input"
                                        type="text"
                                        name="mother_maiden"
                                        v-model="mother_maiden_edit">
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
                                          name="child_name1"
                                          v-model="child_name1_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Sex</td>
                                        <td>
                                          <div class="select">
                                          <select name="child_sex1" v-model="child_sex1_edit">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                          </select>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Date Of Birth</td>
                                        <td>
                                          <input class="input" name="child_dob1" v-model="child_dob1_edit">
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
                                          name="emergency_name"
                                          v-model="emergency_name_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Phone Number</td>
                                        <td>
                                          <input 
                                          class="input"
                                          type="text"
                                          name="emergency_number"
                                          v-model="emergency_number_edit">
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Relation</td>
                                        <td>
                                        <div class="select">
                                          <select name="relation_emergency" v-model="relation_emergency_edit">
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
                                      <td>Joining Date :</td>
                                      <td><input class="input" name="joining_date" v-model="joining_date_edit"></td>
                                    </tr>
                                    <tr>
                                      <td>Position :</td>
                                      <td>
                                      <div class="select">
                                        <select name="emp_position" v-model="emp_position_edit">
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
                                      <td>Health Insurance :</td>
                                      <td>
                                        <input
                                        class="input"
                                        type="text"
                                        name="health_insurance"
                                        v-model="health_insurance_edit">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Employment Status :</td>
                                      <td>
                                        <div class="select">
                                        <select name="employee_status" v-model="employee_status_edit">
                                          <option value="Percobaan 1 Bulan">Percobaan 1 Bulan </option>
                                          <option value="Percobaan 2 Bulan">Percobaan 2 Bulan</option>
                                          <option value="Percobaan 3 Bulan">Percobaan 3 Bulan</option>
                                        </select></div>
                                      </td>
                                    </tr>
                            </table>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
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

          name: this.$store.state.data.name, sex: this.$store.state.data.sex, dob_place: this.$store.state.data.dob_place, dob: this.$store.state.data.dob, blood_tipe: this.$store.state.data.blood_tipe,
          religion: this.$store.state.data.raligion, home_phone: this.$store.state.data.home_phone, mobile_phone: this.$store.state.data.mobile_phone, other_phone: this.$store.state.data.other_phone,
          email_address: this.$store.state.data.email_address, address: this.$store.state.data.address, bank: this.$store.state.data.bank, account_number: this.$store.state.data.account_number, branch: this.$store.state.data.branch, 
          ktp: this.$store.state.data.ktp, ktp_number: this.$store.state.data.ktp_number, valid_through: this.$store.state.data.valid_through, ktp_address: this.$store.state.data.ktp_address, kk: this.$store.state.data.kk,
          degree_certificate: this.$store.state.data.degree_certificate, school: this.$store.state.data.school, major: this.$store.state.data.major, certificate: this.$store.state.data.certificate, date_issuance: this.$store.state.data.date_issuance,
          child_sex1: this.$store.state.data.child_sex1, child_dob1: this.$store.state.data.child_dob1, emergency_name: this.$store.state.data.emergency_name, emergency_number: this.$store.state.data.emergency_number, relation_emergency: this.$store.state.data.relation_emergency,
          nik: this.$store.state.data.nik, koperasi: this.$store.state.data.koperasi, DPLK: this.$store.state.data.DPLK, joining_date: this.$store.state.data.joining_date, emp_position: this.$store.state.data.emp_position, BPJS: this.$store.state.data.BPJS, health_insurance: this.$store.state.data.health_insurance,
          employee_status: this.$store.state.data.employee_status, code_name: this.$store.state.data.code_name, issued_by: this.$store.state.data.issued_by,

          name_edit: '', sex_edit: '', dob_place_edit: '', dob_edit: '', blood_tipe_edit: '', religion_edit: '', home_phone_edit: '', mobile_phone_edit: '', other_phone_edit: '',
          email_address_edit: '', address_edit: '', bank_edit: '', account_number_edit: '', branch_edit: '', ktp_edit: '', ktp_number_edit: '', valid_through_edit: '',
          ktp_address_edit: '', kk_edit: '', degree_certificate_edit: '', school_edit: '', major_edit: '', certificate_edit: '', date_issuance_edit: '',
          marital_status_edit: '', spouse_name_edit: '', spouse_dob_edit: '', mother_maiden_edit: '', child_name1_edit: '',
          child_sex1_edit: '', child_dob1_edit: '', emergency_name_edit: '', emergency_number_edit: '', relation_emergency_edit: '',
          nik_edit: '', koperasi_edit: '', DPLK_edit: '', joining_date_edit: '', emp_position_edit: '', BPJS_edit: '', health_insurance_edit: '', employee_status_edit: '',
          code_name_edit:'', issued_by_edit:''
        }
    },
    components:{
        Sidebar,
        Navbar,
    },
    methods: {
      async edit_profile(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user/${this.$store.state.user}/profiles?access_token=`+this.$store.state.auth, {
              name: this.name_edit, sex: this.sex_edit, dob_place: this.dob_place_edit, dob: this.dob_edit, blood_tipe: this.blood_tipe_edit, religion: this.religion_edit,
              home_phone: this.home_phone_edit, mobile_phone: this.mobile_phone_edit, other_phone: this.other_phone_edit, email_address: this.email_address_edit, 
              address: this.address_edit, bank: this.bank_edit, account_number: this.account_number_edit,  branch: this.branch_edit, ktp: this.ktp_edit, ktp_number: this.ktp_number_edit, valid_through: this.valid_through_edit,
              ktp_address: this.ktp_address_edit, kk: this.kk_edit, degree_certificate: this.degree_certificate_edit, school: this.school_edit, major: this.major_edit, certificate: this.certificate,
              date_issuance: this.date_issuance_edit, marital_status: this.marital_status_edit, spouse_name: this.spouse_name_edit, spouse_dob: this.spouse_dob_edit, mother_maiden: this.mother_maiden_edit,
              child_name1: this.child_name1_edit, child_sex1: this.child_sex1_edit, child_dob1: this.child_dob1_edit, emergency_name: this.emergency_name_edit, emergency_number: this.emergency_number_edit, relation_emergency: this.relation_emergency_edit,
              nik: this.nik_edit, koperasi: this.koperasi_edit, DPLK: this.DPLK_edit, joining_date: this.joining_date_edit, emp_position: this.emp_position_edit, BPJS: this.BPJS_edit, health_insurance: this.health_insurance_edit,
              employee_status: this.employee_status_edit, code_name: this.code_name_edit, issued_by: this.issued_by_edit,
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