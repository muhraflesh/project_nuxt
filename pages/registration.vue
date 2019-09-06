<template>
<section class="registration is-fullheight">
    <div class="container v-middle">
    <div class="columns page is-centered is-mobile">
        <div class="column is-10 form-wrapper">
            <h1 class="heading"> Registration Form</h1>

            <div class="tabs is-boxed">
              <ul>
                <li v-bind:class="{ 'is-active': tabsel == 'pribadi' }" @click="tabsel = 'pribadi'"><a>Data Pribadi</a></li>
                <li v-bind:class="{ 'is-active': tabsel == 'keluarga' }" @click="tabsel = 'keluarga'"><a>Data Keluarga</a></li>
                <li v-bind:class="{ 'is-active': tabsel == 'Perusahaan' }" @click="tabsel = 'perusahaan'"><a>Data Perusahaan</a></li>
              </ul>
            </div>
            
            <!-- Tab panes -->
            <div class="content">
              <div v-show="tabsel == 'pribadi'">
                <div class="field">
                  <label class="label"> Name </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Name">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Gender </label>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="gender">
                      Male
                    </label>
                    <label class="radio">
                      <input type="radio" name="gender">
                      Female
                    </label>
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Blood Type </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Blood Type">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Email </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="email"
                    placeholder="Email">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Kartu Keluarga Number</label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="KK Number">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Kartu Tanda Penduduk Number</label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="KTP Number">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Religion </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Religion">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Kartu Tanda Penduduk Address </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="KTP Address">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Residental Address </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Residental Address">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Kartu Tanda Penduduk Number </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="KTP Number">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Educational Background </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Educational Background">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Certificate  </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Certificate ">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Date Of Birth </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="City"> <br>
                    <input ref="cal1" type="date" class="input">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Phone Number </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Phone Number ">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> NPWP  </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="NPWP ">
                  </div>
                </div>
                <div class="field"> 
                  <label class="label"> Bank Account  </label>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Accoung Name">
                  </div>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Account Number">
                  </div>
                  <div class="control">
                    <input 
                    class="input"
                    type="text"
                    placeholder="Bank Name">
                  </div>
                </div>
                <a class="pagination-next">Next</a>
              </div>

              <div v-show="tabsel == 'keluarga'">
                <form action="#" method="get">
                  <table style="border: 0;">
                    <tr>
                      <td> Martia Status </td>
                      <td>
                        <input type="radio" name="martia-status">S
                        <input type="radio" name="martia-status">M0
                        <input type="radio" name="martia-status">M1
                        <input type="radio" name="martia-status">M2
                        <input type="radio" name="martia-status">M3
                        <input type="radio" name="martia-status">M4
                        <input type="radio" name="martia-status">M5
                      </td>
                    </tr>
                    <tr>
                      <td> Spouse </td>
                      <td>
                      <tr>
                        <td>Name</td>
                        <input 
                        class="input"
                        type="text">
                      </tr>
                      <tr>
                        <td>Date Of Birth</td>
                        <input ref="cal1" type="date" class="input" placeholder="Date Of Birth">
                      </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>Mother's Maiden</td>
                      <input 
                        class="input"
                        type="text">
                    </tr>
                  </table>
                </form>
              </div>
              <div v-show="tabsel == 'perusahaan'">My Videos</div>
            
            </div>
            
        </div>
    </div>
    </div>
</section>
</template>

<script>

export default{
  data() {
    return{
    tabsel: 'pic'
    }
}}
</script>

<style>
.registration{
  min-height: 100vh;
  background-color: #f7f7f7;
}
.registration .page{
  height: 100vh;
  display: flex;
  align-items: center;
}
.registration .form-wrapper{
  background: #fff;
  height: 90vh;
}
.heading{
  font-size: 1.50em;
}
.field-label{
  padding-left: 0;
}
</style>