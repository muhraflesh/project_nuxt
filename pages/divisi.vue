<template>
 <section class="section main-content columns is-fullheight">
  
    <Sidebar/>
    <div class="column is-10 is-centered abu kanan kiri2 content">

      <table>
            <tr><td><b>LEADERSHIP</b></td></tr>
      </table>
      <div  class="row columns" >
        <div class="column is-1">
          <figure class="image is-64x64">
            <img class="is-rounded" src="user1.jpg">
          </figure>
        </div>
        <div class="column is-4">
          <tr><b>Leader</b></tr>
          <tr>Muhammad Rafli Sh</tr>
        </div>
        <div class="column is-1">
          <figure class="image is-64x64">
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
                    
                    <div class="card">
                        <div class="card-content">
                            <td>
                            <p class="has-text-left">
                            Membangun home, halaman login, forgot password, profil
                            </p>
                            </td>
                            <td style="width:40%">
                            <span class="icon is-right" style="float:right;">
                                <i class="fa fa-exclamation-circle merah" aria-hidden="true">
                                </i>
                            </span>
                            </td>
                        
                        </div>
                    </div>
                </div>
                </div>
                <div class="row abu">
                    <div class="">
                   <td><b>What's Next ?</b></td>
                <div class="card">
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-edit" aria-hidden="true">
                                </i>
                        </span>
                        Mengautentikasi halaman yang telah dibuat
                    </td>
                    <td style="width:10%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:10%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-edit" aria-hidden="true">
                                </i>
                        </span>
                        Membuat halaman web responsive</td>
                    <td style="width:10%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:10%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-edit" aria-hidden="true">
                                </i>
                        </span>
                        Menginstall nuxt js</td>
                    <td style="width:10%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:10%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-edit" aria-hidden="true">
                                </i>
                        </span>
                        Menyempurnakan tampilan web</td>
                    <td style="width:10%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:10%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-edit" aria-hidden="true">
                                </i>
                        </span>
                        Menerapkan git secara keseluruhan</td>
                    <td style="width:10%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:10%"><time datetime="2016-1-1">11:09 PM</time></td>
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
  padding-top: ;
  left: 5%;
}
.top2{
  position: relative;
}

</style>