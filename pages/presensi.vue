<template>
 <section class="section main-content columns is-fullheight">
  
    <Sidebar/>
    <div class="column is-10 is-centered kanan kiri2 content">
      <div class="row top1 content">
                
                    <div>
                    <table>
                        <tr>
                            <td style="width:20%"><b>Wifi.man:)</b></td>
                            <td style="width:60%"></td>
                            <td style="width:10%">
                                <div class="container-1">
                                    <span class="icon"><i class="fa fa-search"></i></span>
                                    <input type="search" id="search" placeholder="Search..." />
                                </div>
                            </td>
                            <td style="width:10%">
                              <div class="navbar-item has-dropdown is-hoverable">
                                  <a class="navbar-link">
                                    <i class="fa fa-user"></i>
                                  </a>

                                  <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                      By Tags
                                    </a>
                                    <a class="navbar-item">
                                      By Category
                                    </a>
                                    <hr class="navbar-divider">
                                    <a class="navbar-item">
                                      By Date
                                    </a>
                                  </div>
                                </div>
                            </td>
                        </tr>
                        <tr><td>presensi</td></tr>
                    </table>
                    <div class="columns is-10">
                      <div class="column is-5">
               
               <div class="card has-text-centered">
                   <header class="card-header">
                    <p class="card-header-title ">
                    Data Presensi
                    </p>
                   
                </header>
                    <ul>
                      Monday, 22/07/2019<br>
                      Time
                    </ul>
                    <div class="field">
                      <div class="buttons is-centered" style="margin: 50px">
                        <a type="checkin" class="button is-info has-text-white" style="padding-left: 30px; padding-right: 30px">
                          Check In </a>
                        <a type="checkout" class="button is-danger has-text-white" style="padding-left: 25px; padding-right: 25px">
                          Check Out </a>
                      </div>
                    </div>
                
                </div>
           </div>
           <div class="column is-5">
               <div class="card">
                <header class="card-header">
                    <p class="card-header-title ">
                    pengajuan Cuti
                    </p>
                </header>

                <form method="post" @submit.prevent="presensi" class="is-centered" style="padding-left: 5% ;padding-top: 3%">
                  <div class="field">
                      <tr>
                        <td><label class="label"> Start Date</label></td>
                        <td></td>
                        <td><label class="label"> Date End </label></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style="width:2%"><input ref="cal1" type="date" class="input"> </td>
                        <td style="width:5%"></td>
                        <td style="width:2%"><input ref="cal2" type="date" class="input"> </td>
                      </tr>
                      <tr><label class="label">Reason</label></tr>
                      <tr><p class="control">
                          <input type="text">
                        </p>
                      </tr>
                      <div class="field">
                    <div class="control lev" style="margin-left:5%">
                      <button type="submit" class="button is-info has-text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                  </div>
                  </form>
                </div>
           
                    
                    </div>
                </div>
                </div>
                    </div>
                    
                <div class="row">
                    <table>
                      <tr>
                        <td><b>Show</b></td>
                        <td>
                            <div class="">
                              <select class="abu" >
                                <option class="abu">All</option>
                                <option class="abu">Today</option>
                                <option class="abu">Yesterday</option>
                              </select>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="width:20%"><b>No</b></td>
                        <td class="has-text-centered" style="width:25%"><b>Date</b></td>
                        <td class="has-text-centered" style="width:25%"><b>Description</b></td>
                      </tr>
                    </table>
                </div>
    </div>
  
     
 </section>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import axios from 'axios'
import moment from 'moment'
import BarChart from '~/components/bar-chart'
import Sidebar from "../components/Sidebarpublic"

export default {
  middleware: "",
  components: {
    BarChart,
    Sidebar,
  },
  methods: {
        auth ({store}){
            console.log (store.state.auth)
        },
        logout () {
            Cookie.remove('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/')
        }
    },

  async asyncData ({ env }) {
    const res = await axios.get(`https://api.github.com/repos/nuxt/nuxt.js/stats/commit_activity?access_token=${env.githubToken}`)
    return {
      barChartData: {
        labels: res.data.map(stat => moment(stat.week * 1000).format('GGGG[-W]WW')),
        datasets: [
          {
            label: 'Nuxt.js Commit Activity',
            backgroundColor: '#41b883',
            data: res.data.map(stat => stat.total)
          }
        ]
      }
    }
  },
}
</script>


<style>
.structure {
padding-bottom : 0% ;
padding-top : 0% ;
}

.form-textbox {
min-width : 80% ;
}

.content {
left: 5%;
}

.bar-chart {
  position: fixed;
  left: 0%;
  top: 0%;
  width: 80%;
  height: 45%;
}
.top1{
  padding-top:0%;
  left: 5%;
}
.abu{
  background-color: #f0f0f0f0;
}
.top2{
  position: relative;
}
.lev{
  padding-left: 70%;
}
.container-1{
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  padding-left: 30%;
}
.container-1 input#search{
  width: 200px;
  height: 40px;
  background: #f0f0f0f0;
  border: none;
  font-size: 10pt;
  float: left;
  color: #63717f;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.container-1 input#search::-webkit-input-placeholder {
   color: #65737e;
}
 
.container-1 input#search:-moz-placeholder { /* Firefox 18- */
   color: #65737e;  
}
 
.container-1 input#search::-moz-placeholder {  /* Firefox 19+ */
   color: #65737e;  
}
 
.container-1 input#search:-ms-input-placeholder {  
   color: #65737e;  
}
.container-1 .icon{
  position: absolute;
  top: 20%;
  margin-left: 17px;
  margin-top: 10px;
  z-index: 1;
  color: #4f5b66;
}
</style>