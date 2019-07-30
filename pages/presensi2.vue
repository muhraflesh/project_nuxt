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
          <div class="field">
            <div class="field-label is-normal">
              <label class="label has-text-left"> Tanggal Mulai s/d Tanggal Selesai</label>
            </div>
            <div class="field-body is-fullwidth">
                <div>
                  <button ref="trigger" type="date" data-is-range="true"  class="btn-block full-width-btn">
                  </button>
                </div> 
          </div>
          </div>
          <div class="field">
              <div class="field-label is-normal">
                <label class="label has-text-left">Keterangan</label>
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

export default{
  data: () => ({
    date: new Date(),
  }),
  mounted() {
    const calendar = new bulmaCalendar(this.$refs.trigger, {
      startDate: this.date,
    })
    calendar.on('date:selected', e => (this.date = e.start || null))
  },
  computed: {
    niceDate() {
      if (this.date) {
        return this.date.toLocaleDateString()
      }
    }
  }
};
</script>

<style>
.form-textbox {
min-width : 80% ;
}


.full-width-btn {
width: 100%;
}
</style>
