<<<<<<< HEAD
<template>
 <section>
  <div class="container box has-margin-top-50 justify-center is-mobile">
    <div class="columns is-centered">
        <div class="column hero has-background-primary has-text-white has-text-centered">
          <p class="is-size-4 has-text-weight-semibold " style="margin-top: 15px; margin-bottom: 10px">
            Presensi
          </p>
          <figure class="image is-128x128" style="margin-left: 37%; margin-bottom: 10px">
              <img  src="clock.png"/>
          </figure>
          <ul>
            <li>Monday, 22/07/2019</li>
            <li>Time</li>
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
        <div class="column">
          <div class="columns is-centered">
            <div class="column ">
              <div class="has-text-centered">
                <p class="is-size-4 has-text-weight-semibold" style="margin-top: 15px">
                  Pengajuan Cuti
                </p>
              </div>
          <form method="post" @submit.prevent="presensi" class="is-centered" style="padding-left: 20% ;padding-top: 10%">
          <div class="field is-horizontal">
            <div class="field-label is-normal is-fullwidth">
              <label class="label"> Tanggal Mulai </label>
            </div>
            <div class="field-body" style="padding-left: 5%">
              <input ref="cal1" type="date" class="input">
          </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"> Tanggal Selesai </label>
            </div>
            <div class="field-body" style="padding-left: 5%">
              <input ref="cal2" type="date" class="input">
            </div>
          </div>
          <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Keterangan</label>
              </div>
              <div class="field-body">
                <p class="control form-textbox">
                  <textarea 
                  class="textarea"
                  rows="3"></textarea>
                </p>
              </div>
          </div>
          <br><br>
          <div class="field">
            <div class="control" style="margin-left:5%">
              <button type="submit" class="button is-info has-text-white" style="padding-left: 30px; padding-right: 30px">
                Submit
              </button>
            </div>
          </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>    
 </section>
</template>

<script>
import bulmaCalendar from '~/node_modules/bulma-calendar/dist/js/bulma-calendar.min.js'

export default {
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
</style>
=======
<template>

 <section class="section">
  <div class="container has-margin-top-50 justify-center is-mobile">
    <div class="bar-chart top2">
    <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
  </div>
    <div class="columns is-centered top1">
        <div class="column hero has-background-primary has-text-white has-text-centered">
          <p class="is-size-4 has-text-weight-semibold " style="margin-top: 15px; margin-bottom: 10px">
            Presensi
          </p>
          <figure class="image is-128x128" style="margin-left: 37%; margin-bottom: 10px">
              <img  src="clock.png"/>
          </figure>
          <ul>
            <li>Monday, 22/07/2019</li>
            <li>Time</li>
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
        <div class="column">
          <div class="columns is-centered">
            <div class="column ">
              <div class="has-text-centered">
                <p class="is-size-4 has-text-weight-semibold" style="margin-top: 15px">
                  Pengajuan Cuti
                </p>
              </div>
          <form method="post" @submit.prevent="presensi" class="is-centered" style="padding-left: 20% ;padding-top: 10%">
          <div class="field is-horizontal ">
            <div class="field-label is-normal is-fullwidth">
              <label class="label"> Tanggal Mulai </label>
            </div>
            <div class="field-body" style="padding-left: 5%">
              <p class="control form-input-wide">
                <input
                class="input"
                type="text"
                >
              </p>
          </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"> Tanggal Selesai </label>
            </div>
            <div class="field-body" style="padding-left: 5%">
                <p class="control form-input-wide">
                    <input
                    class="input"
                    type="text"
                    >
                </p>
            </div>
          </div>
          <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Keterangan</label>
              </div>
              <div class="field-body">
                <p class="control form-textbox">
                  <textarea 
                  class="textarea"
                  rows="3"></textarea>
                </p>
              </div>
          </div>
          <br><br>
          <div class="field">
            <div class="control" style="margin-left:5%">
              <button type="submit" class="button is-info has-text-white" style="padding-left: 30px; padding-right: 30px">
                Submit
              </button>
            </div>
          </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>    
 </section>
</template>

<style>
.form-textbox {
min-width : 80% ;
}

.form-input-wide {
min-width : 80% ;
}
.bar-chart {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
}
.top1{
  padding-top: 5%
}
.top2{
  position: relative;
}

</style>

<script>
import axios from 'axios'
import moment from 'moment'
import BarChart from '~/components/bar-chart'
export default {
  components: {
    BarChart
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
  }
}
</script>
>>>>>>> 8ad3a92d03626850fd64c0a4696117da09f37351
