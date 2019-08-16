<template>
    <section class="section main-content columns is-fullheight">
                <Sidebar/>
           
            <div class="column is-centered is-10">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="../">Solusi</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Bon Barang</a></li>
                    </ul>
                </nav>
                <br>
                <Hello/>
                <br>

                <div class="columns is-10">
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content"> 
                                <form method="post" @submit.prevent="presensi" >
                                    <div class="field">
                                      <tr>
                                          <th>Start Date</th>
                                          <td style="width:2%"><input ref="cal1" type="date" class="input" placeholder="Start Date"> </td>
                                          <td style="width:5%"></td>
                                          <th>End Date</th>
                                          <td style="width:2%"><input ref="cal2" type="date" class="input" placeholder="End Date"> </td>
                                      </tr> <br>
                                    </div>
                                    <div class="field is-horizontal">
                                      <div class="field is-narrow" style="padding-right: 25%">
                                      <div class="control " >
                                        <div class="select">
                                          <select>
                                            <option>Barang</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                        </select>
                                        </div>
                                      </div>
                                      </div>
                                      <div class="field" >
                                      <div class="control " >
                                        <div class="select">
                                          <select>
                                            <option>Jumlah</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div class="field">
                                      <p class="control">
                                        <textarea class="textarea" placeholder="Keterangan"></textarea>
                                      </p>
                                    </div>
                                    <div class="field">
                                      <div class="control">
                                      <button class="button is-primary is-pulled-right">
                                        Submit
                                      </button>
                                      </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                              <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
                            </div>
                          </div>
                    </div>
                </div>
                <br>

                <div class="column">
                <div class="row">
                  <table>
                    <tr>
                        <td class="is-fullwidth" style="width:20%"><b>History</b></td>
                    </tr>
                  </table>
                  <hr>
                </div>
                <div class="row">
                  <table>
                      <tr>
                          <td><b>Show</b></td>
                          <td>
                                <select>
                                  <option>All</option>
                                  <option>Today</option>
                                  <option>Yesterday</option>
                                </select>
                          </td>
                        </tr>
                  </table>
                </div>
                <div class="row" style="padding-top: 5px">
                    <div class="card">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped">
                    <thead>
                      <tr>
                        <th><abbr title="No">No</abbr></th>
                        <th><abbr title="Name">Nama</abbr></th>
                        <th><abbr title="Divisi">Divisi Project</abbr></th>
                        <th><abbr title="Start">Start</abbr></th>
                        <th><abbr title="End">End</abbr></th>
                        <th><abbr title="Barang">Barang</abbr></th>
                        <th><abbr title="Jumlah">Jumlah</abbr></th>
                        <th><abbr title="Desc">Description</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Ahmad Baid</td>
                        <td>Back End</td>
                        <td>05/08/19</td>
                        <td>13/08/19</td>
                        <td>Proyektor</td>
                        <td>1</td>
                        <td>ACER X1123H</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Muh Rafli Sh</td>
                        <td>Front End</td>
                        <td>06/08/19</td>
                        <td>13/08/19</td>
                        <td>Laptop</td>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <td>Ahmad Baid</td>
                        <td>Back End</td>
                        <td>05/08/19</td>
                        <td>13/08/19</td>
                        <td>Laptop</td>
                        <td>1</td>
                        <td>ROG GX502</td>
                      </tr>
                    </tbody>
                  </tabel>
                  </div>
                  </div>
                  </div>
                
                
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
import DatePicker from 'vuejs-datepicker'
import Hello from '../components/Hello'

export default {
    name: 'app',
    components: {
      Sidebar,
      DatePicker,
      BarChart,
      Hello
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
            backgroundColor: '#1E90FF',
            data: res.data.map(stat => stat.total)
          }
        ]
      }
    }
  },
}
</script>

<style>
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

.table {
  width: 100%
}
</style>