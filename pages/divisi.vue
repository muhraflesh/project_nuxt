<template>
 <section class="section main-content columns is-fullheight">
  
    <Sidebar/>
    <div class="column is-10 is-centered">
     <nav class="breadcrumb" aria-label="breadcrumbs">
        <td width="500px">
            <ul>
                <li><a href="/">Solusi</a></li>
                <li class="is-active"><a href="#" aria-current="page">Divisi</a></li>
            </ul>
        </td>
        <td width="200px"></td>
        <td width="600px">
             <Navbar/>
         </td>
     </nav>
     <hr/>

      <!-- LEADERSHIP -->
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
          <tr v-for="item in posts" v-bind:key="item.key">{{item.email}}</tr>
      
        </div>
     
      </div>

      <!-- CHART -->
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
    
      <!-- TASK -->
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
      <!-- TASK LIST -->
      <div class="columns">
           <!-- TASK KIRI -->
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
           <!-- TASK KANAN -->
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
import Navbar from "../components/Navbar"

export default {
    middleware : 'authenticated',
  components: {
    BarChart,
    Sidebar,
    Hello,
    Navbar,
  },

  data () {
    return {
      allPost: [],
      posts: [],
      current: 15,
    }
  },

  methods: {
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

  mounted () {
    axios(`${this.$axios.defaults.baseURL}/tim/${this.$store.state.team}/pengguna?access_token=`+this.$store.state.auth, {
      crossDomain: true
    }).then( ({ data }) => {
      this.allPost = data.articles
      data.map((item, key) => {
        if (item.email !== null && this.posts.length < 5) {
          this.posts.push(item)
        }
      })
    })
  }  
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
  height: 37%;
}
.top1{
  left: 5%;
}
.top2{
  position: relative;
}

</style>
