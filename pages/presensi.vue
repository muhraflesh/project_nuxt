<template>
 <section class="section main-content columns is-fullheight">
  
    <Sidebar/>
    <div class="column is-10 is-centered">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <td width="500px">
          <ul>
            <li><a href="/">Solusi</a></li>
            <li class="is-active"><a href="#" aria-current="page">Presensi</a></li>
          </ul>
        </td>
        <td width="200px"></td>
        <td width="600px">
            <Navbar/>
        </td>
      </nav>
      <hr/>
                    <div class="columns">
                <div class="column is-6">
               <div class="card">
                   <header class="card-header has-background-info">
                        <p class="card-header-title ">
                        Presensi
                        </p>
                        <a href="/presensi" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-calendar" ></i>
                        </span>
                        </a>
                    </header>
                    <div class="buttons is-centered" style="margin: 50px">
                        <a type="checkin" class="button is-info has-text-white" style="padding-left: 30px; padding-right: 30px">
                          Check In </a>
                        <a type="checkout" class="button is-danger has-text-white" style="padding-left: 25px; padding-right: 25px">
                          Check Out </a>
                      </div>
                </div>
                </div>

                <div class="column is-6">
                <div class="card">
                   <header class="card-header has-background-info">
                        <p class="card-header-title ">
                        Cuti
                        </p>
                        <a href="/presensi" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-calendar" ></i>
                        </span>
                        </a>
                    </header>

                    <div  class="row columns" >
                        <div class="column is-8">
                          <div class="doughnut-chart">
                          <DoughnutChart :data="doughnutChartData" :options="{ legend: { display: false }, maintainAspectRatio: false }" />
                          </div>
                        </div>
                        
                        
                        <div class="column is-3 is-centered" style="padding-top:150px">
                          <div class="row">
                          <tr><b>Sisa Cuti</b></tr>
                          <tr>3/15</tr>
                          </div>
                          <br/>
                          <div class="row">
                          <tr><button class="is-info button" @click="showmodal">Ambil Cuti</button></tr>
                          </div>
                        </div>

                        <!-- MODAL -->
                        <div class="modal" id="modal-cuti">
                          <div class="modal-background" @click="closemodal"></div>
                          <div class="modal-card modcard">
                            <header class="modal-card-head">
                              <p class="modal-card-title">Pengajuan Cuti</p>
                              <button class="delete" aria-label="close" @click="closemodal"></button>
                            </header>
                            <section class="modal-card-body">
                              <!-- MODAL CONTENT-->
                              <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Jumlah Hari</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="number" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Tanggal</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text">
                                        <span class="icon is-small is-left">
                                          <i class="fas fa-calendar"></i>
                                        </span>
                                      </p>
                                    </div>
                                    <div class="field-label is-normal">
                                    <label class="label">Sampai</label>
                                    </div>
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input" type="text">
                                        <span class="icon is-small is-left">
                                          <i class="fas fa-calendar"></i>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Keperluan Cuti</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <textarea class="textarea is-danger" placeholder="Explain your reason"></textarea>
                                      </div>
                                      <p class="help is-danger">
                                        This field is required
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Project Progress</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="">Perkejaan Selesai</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class=""></label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="">On Progress</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class=""></label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Handover Document</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Project 1</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="">Nama</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field is-narrow">
                                      <div class="control">
                                        <div class="select is-fullwidth">
                                          <select>
                                            <option>Paksi</option>
                                            <option>Baid</option>
                                            <option>Salma</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="">Pekerjaan yg Diberikan</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class=""></label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="text" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div> 

                                <div class="field is-horizontal">
                                  <div class="field-label">
                                    <!-- Left empty for spacing -->
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <button class="button is-primary">
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </section>
                            <footer class="modal-card-foot">
                            </footer>
                          </div>
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
                        <td style="width:50%"><b>No</b></td>
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
import Hello from "../components/Hello"
import DoughnutChart from '~/components/doughnut-chart'
import Navbar from '~/components/Navbar'

function getRandomColor () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default {
  middleware: '',
  components: {
    BarChart,
    Sidebar,
    Hello,
    DoughnutChart,
    Navbar,
  },
  methods: {
        showmodal() {
          document.getElementById('modal-cuti').classList.add('is-active');
        },
        closemodal() {
          document.getElementById('modal-cuti').classList.remove('is-active');
        },
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
    const res = await axios.get(`https://api.github.com/repos/nuxt/nuxt.js/stats/contributors?access_token=${env.githubToken}`)
    return {
      doughnutChartData: {
        labels: res.data.map(stat => stat.author.login),
        datasets: [
          {
            label: 'Nuxt.js Contributors',
            backgroundColor: res.data.map(getRandomColor),
            data: res.data.map(() => 1)
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

.doughnut-chart {
  position: relative;
  left: 40px;
  width: 300px;
  height: 380px;

}
.buton{
  background-color: aqua;
}

.modcard{
  width: 75%;
}

</style>