<template>
 <section class="section main-content columns is-fullheight">
    <Sidebar/>
    <div class="column is-10 is-centered">

      <!-- NAVBAR & BREADCUMBS -->
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <td width="500px">
          <ul>
            <li><a href="/">Solusi</a></li>
            <li class="is-active"><a href="#" aria-current="page">Presensi</a></li>
          </ul>
        </td>
        <td width="500px"></td>
        <td width="600px">
            <Navbar/>
        </td>
      </nav>
      <hr/>

        <!-- CONTENT ATAS (PRESENSI DAN CUTI) -->
        <div class="columns">
            <!-- CARD PRESENSI -->
            <div class="column is-6">
               <div class="card">
                   <header class="card-header has-background-info">
                        <p class="card-header-title has-text-light">
                        Presensi
                        </p>
                        <a href="/presensi" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-calendar" ></i>
                        </span>
                        </a>
                    </header>
                    <div class="buttons is-centered" style="margin-top: 50px">
                        <a type="checkin" class="button is-info has-text-white" style="padding-left: 30px; padding-right: 30px">
                          Check In </a>
                        <a type="checkout" class="button is-danger has-text-white" style="padding-left: 25px; padding-right: 25px">
                          Check Out </a>
                    </div><br/>
                </div>
            </div>

            <!-- CARD CUTI -->
            <div class="column is-6">
                <div class="card">
                    <header class="card-header has-background-info">
                          <p class="card-header-title has-text-light">
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

                        <!-- MODAL PENGAJUAN CUTI -->
                        <div class="modal" id="modal-cuti">
                          <div class="modal-background" @click="closemodal"></div>
                          <div class="modal-card modcard">
                            <header class="modal-card-head">
                              <p class="modal-card-title">Pengajuan Cuti</p>
                              <button class="delete" aria-label="close" @click="closemodal"></button>
                            </header>
                            <section class="modal-card-body">
                              <!-- MODAL CONTENT-->
                            <form method="post" @submit.prevent="cutiPost">
                              <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Mulai Tanggal</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left">
                                        <input class="input" type="date" v-model="cuti.mulai_cuti">
                                        <span class="icon is-medium is-left">
                                          <i class="fa fa-calendar"></i>
                                        </span>
                                      </p>
                                    </div>
                                    <div class="field-label is-normal">
                                    <label class="label">Sampai</label>
                                    </div>
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input" type="date" v-model="cuti.selesai_cuti">
                                        <span class="icon is-medium is-left">
                                          <i class="fa fa-calendar"></i>
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
                                        <textarea class="textarea is-danger" placeholder="Explain your reason" v-model="cuti.keperluan"></textarea>
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
                                        <input class="input" type="text" v-model="cuti.tugas_selesai1" placeholder="">
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
                                        <input class="input" type="text" v-model="cuti.tugas_selesai2" placeholder="">
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
                                        <input class="input is-danger" type="text" v-model="cuti.tugas_berjalan1" placeholder="">
                                      </div>
                                      <p class="help is-danger">
                                        This field is required
                                      </p>
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
                                        <input class="input" type="text" v-model="cuti.tugas_berjalan2" placeholder="">
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
                                        <input class="input" type="text" v-model="cuti.tugas_berjalan3" placeholder="">
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
                                          <select v-model="cuti.alih_tangan">
                                            <option value="Paksi" >Paksi</option>
                                            <option value="Baid" >Baid</option>
                                            <option value="Salma" >Salma</option>
                                            <option value="Raflish"> Rafli SH</option>
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
                                        <input class="input" type="text" v-model="cuti.tugas_alihan1" placeholder="">
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
                                        <input class="input" type="text" v-model="cuti.tugas_alihan2" placeholder="">
                                      </div>
                                    </div>
                                  </div>
                                </div> 

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Tipe Cuti</label>
                                  </div>
                                  <div class="field-body is-normal" style="padding-top:1%">
                                        <label class="radio">
                                          <input v-model="cuti.tipe_cuti" type="radio" value="reg-first">
                                          Regular
                                        </label>
                                        <label class="radio">
                                          <input v-model="cuti.tipe_cuti" type="radio" value="bonus-first">
                                          Bonus
                                        </label>
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
                              </form>
                            </section>
                            <footer class="modal-card-foot">
                            </footer>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- RIWAYAT CUTI (TABEL) -->
        <section class="info-tiles">
            <div class="tile is-ancestor has-text-left">
                <div class="tile is-parent" >
                    <article class="tile is-child box has-background-primary" @click="member = !member">
                      <p class="subtitle has-text-white has-text-weight-medium">Riwayat Cuti</p>
                    </article>
                 </div>
            </div>
        </section> <br/>
        <div>
            <table class="table">
                  <thead>
                        <tr>
                            <th><abbr title="Position">ID.</abbr></th>
                            <th>Tgl Pengajuan</th>
                            <th><abbr title="Played">Tgl Mulai</abbr></th>
                            <th><abbr title="Won">Tgl Selesai</abbr></th>
                            <th><abbr title="Drawn">Handover</abbr></th>
                            <th><abbr title="Lost">Keperluan</abbr></th>
                            <th><abbr title="Goals for">Tipe Cuti</abbr></th>
                            <th><abbr title="Goals against">Action</abbr></th>
                        </tr>
                  </thead>
                  <tfoot>
                        <tr>
                            <th><abbr title="Position">ID.</abbr></th>
                            <th>Tgl Pengajuan</th>
                            <th><abbr title="Played">Tgl Mulai</abbr></th>
                            <th><abbr title="Won">Tgl Selesai</abbr></th>
                            <th><abbr title="Drawn">Handover</abbr></th>
                            <th><abbr title="Lost">Keperluan</abbr></th>
                            <th><abbr title="Goals for">Tipe Cuti</abbr></th>
                            <th><abbr title="Goals against">Action</abbr></th>
                        </tr>
                  </tfoot>
                  <tbody>
                        <tr v-for="item in posts" v-bind:key="item.key">
                                <th>{{item.id}}</th>
                                <td><a><strong>{{item.id_pengguna}}</strong></a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <a class="button is-info">Detail</a> 
                                    <a class="button is-danger" @click="deleteLog">Delete</a>
                                </td>
                            </tr>
                        <tr>
                                <td>
                                    <div style="padding-left:420%">
                                        <button class="button btn-more is-rounded is-info is-outlined" @click="loadMore">Load More</button>
                                    </div>
                                </td>
                        </tr>
                  </tbody>
            </table>
        </div><br/>

        <!-- RIWAYAT KEHADIRAN (TABEL) -->
        <section class="info-tiles">
            <div class="tile is-ancestor has-text-left">
                <div class="tile is-parent" >
                    <article class="tile is-child box has-background-primary" @click="member = !member">
                      <p class="subtitle has-text-white has-text-weight-medium">Riwayat Kehadiran</p>
                    </article>
                 </div>
            </div>
        </section> <br/>
        <div>
            <table class="table">
                  <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tanggal Pengajuan</th>
                            <th>Tanggal Mulai</th>
                            <th>Tanggal Selesai</th>
                            <th>Handover</th>
                            <th>Keperluan</th>
                            <th>Tipe Cuti</th>
                            <th>Action</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr v-for="item in posts" v-bind:key="item.key">
                                <td>{{item.id}}</td>
                                <td>{{item.tgl_pengajuan}}</td>
                                <td>{{item.mulai_cuti}}</td>
                                <td>{{item.selesai_cuti}}</td>
                                <td>{{item.alih_tangan}}</td>
                                <td>{{item.keperluan}}</td>
                                <td>{{item.tipe_cuti}}</td>
                                <td>
                                    <a class="button is-info">Detail</a> 
                                    <a class="button is-danger">Delete</a>
                                </td>
                            </tr>
                        <tr>
                                <td>
                                    <div style="padding-left:420%">
                                        <button class="button btn-more is-rounded is-info is-outlined" @click="loadMore">Load More</button>
                                    </div>
                                </td>
                        </tr>
                  </tbody>
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
  data() {
      return {
        allPost: [],
        posts: [],
        cuti: {},
      }
  },
  components: {
    BarChart,
    Sidebar,
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
        cutiPost() {
          this.$axios.post(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/cuti?access_token=`+this.$store.state.auth, this.cuti).then(() => {
            this.$router.post({name:'cutis'})
          });
        },
        loadMore() {
            this.posts = []
            this.current += 6
            this.allPost.map((item, key) => item.email !== null && this.posts.length < this.current ? this.posts.push(item) : '')
        },
  },

  mounted () {
    axios(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}/cuti?access_token=`+this.$store.state.auth, {
      crossDomain: true
    }).then( ({ data }) => {
      this.allPost = data
      data.map((item, key) => {
        if (item.id_pengguna !== null && this.posts.length < 5) {
          this.posts.push(item)
        }
      })
    })
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