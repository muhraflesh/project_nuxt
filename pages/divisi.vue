<template>
 <section class="section main-content columns is-fullheight">
  
    <Sidebar/>
    <div class="column is-10 is-centered abu kanan kiri2">
     <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/">Solusi</a></li>
            <li class="is-active"><a href="#" aria-current="page">Divisi</a></li>
        </ul>
     </nav>
     <Hello/>
     <br/>
      <table>
            <tr><td><b>LEADERSHIP</b></td></tr>
      </table>
      <div  class="row columns" >
        <div class="column is-1">
          <figure class="image is-86x86">
            <img class="is-rounded" src="user1.jpg">
          </figure>
        </div>
        <div class="column is-4">
          <tr><b>Leader</b></tr>
          <tr>Muhammad Rafli Sh</tr>
        </div>
        <div class="column is-1">
          <figure class="image is-86x86">
            <img class="is-rounded" src="team.jpg">
          </figure>
        </div>
        <div class="column is-4">
          
          <tr><b>Member</b></tr>
          <tr>Salma Faiqah A</tr>
          <tr>Dewi Ambarwati</tr>
      
        </div>
     
      </div>

      <div class="bar-chart top2">
        <table>
            <tr><td><b>CHART</b></td></tr>
                <tr>
                  <td style="width:25%">Today</td>
                  <td style="width:35%">20/9/2019</td>
                  <td style="width:25%">10.23 am</td>
                </tr>
        </table>
        <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
      </div>
      <div class="row abu top1 content">
                
                    <div>
                    <table>
                        <tr><td><b><a href="/project">TASK</a></b></td></tr>
                        <tr>
                            <td style="width:25%"><b>Today</b></td>
                            <td style="width:35%"><b>20/9/2019</b></td>
                            <td style="width:25%"><b>10.23 am</b></td>
                        </tr>
                    </table>
                    </div>
      </div>

      <div class="columns">
                    <div class="column is-6">
                        <div class="card events-card">
                            <header class="card-header has-background-warning">
                                <p class="card-header-title">
                                    Akan Dikerjakan
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </a>
                            </header>
                            <div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped">
                                        <tbody>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">View All</a>
                            </footer>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <header class="card-header has-background-danger">
                                <p class="card-header-title">
                                    Dikejar Dateline
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="">
                                        <span class="icon is-medium is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span class="icon is-medium is-right">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="card">
                            <header class="card-header has-background-success">
                                <p class="card-header-title">
                                    Done
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="">
                                        <span class="icon is-medium is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <span class="icon is-medium is-right">
                                            <i class="fa fa-check"></i>
                                        </span>
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
const Cookies = process.client ? require('js-cookie') : undefined
import axios from 'axios'
import moment from 'moment'
import BarChart from '~/components/bar-chart'
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"

export default {
  middleware: "authenticated",
  components: {
    BarChart,
    Sidebar,
    Hello,
  },
  methods: {
        auth ({store}){
            console.log (store.state.auth)
        },
        logout () {
            Cookies.remove('auth')
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
  height: 32%;
}
.top1{
  left: 5%;
}
.top2{
  position: relative;
}

</style>
