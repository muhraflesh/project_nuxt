<template>
 <section class="section main-content columns is-fullheight">
   <Sidebar/>
    <div class="row abu top1 content ">
                
                    <div>
                    <table>
                        <tr><td><b>TASK</b></td></tr>
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
 </section>
</template>

<script>
import bulmaCalendar from '~/node_modules/bulma-calendar/dist/js/bulma-calendar.min.js'
import axios from 'axios'
import moment from 'moment'
import BarChart from '~/components/bar-chart'
import Sidebar from "../components/Sidebarpublic"

export default {
  components: {
    BarChart,
    Sidebar,
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
  data: () => ({
    date1: new Date(),
    date2: new Date(),
  }),
  mounted() {
    let calendar1 = new bulmaCalendar(this.$refs.cal1, {
      startDate: this.date1,
    })
    calendar1.on('date:selected', e => (this.date1 = e.start || null))
    let calendar2 = new bulmaCalendar(this.$refs.cal2, {
      startDate: this.date2,
    })
    calendar2.on('date:selected', e => (this.date2 = e.start || null))
  },
  computed: {
    niceDate1() {
      if (this.date1) {
        return this.date1.toLocaleDateString()
      }},
    niceDate2() {
      if (this.date2) {
        return this.date2.toLocaleDateString()
      }
    }
  }
}
</script>

<style>
.form-textbox {
min-width : 80% ;
}

.top1{
  padding-top: 5%
}
.top2{
  position: relative;
}

.structure {
padding-bottom : 0% ;
padding-top : 0% ;
}


.content {
left: 5%;
}



</style>