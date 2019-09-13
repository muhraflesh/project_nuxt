<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
               <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Solusi</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Admin Panel</a></li>
                    </ul>
                </nav>
                <Hello/>
                <br>

                <!-- Button List Menu -->
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-left">
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="member = !member">
                                <p class="subtitle has-text-white has-text-weight-medium">Manajemen Member</p>
                            </article>
                        </div>
                    </div>
                </section>
                <br/>

                <!-- Data Pribadi -->
                <div v-show="member">
                    <div class="columns">
                    <div class="column is-8">
                            <tr>
                                <td><b>MEMBER DETAILS</b></td>
                            </tr>
                    </div>
                    <div class="column is-4">
                            <a class="button is-success is-outlined" @click="showmodal">Add User</a>
                            <div class="modal" id="modal">
                                <div class="modal-background" @click="closemodal"></div>
                                <div class="modal-card modcard">
                                    <header class="modal-card-head">
                                    <p class="modal-card-title">Add Member</p>
                                    <button class="delete" aria-label="close" @click="closemodal"></button>
                                    </header>
                                    <form method="post" @submit.prevent="adduser">
                                    <section class="modal-card-body">
                                    <!-- MODAL CONTENT-->
                                    <div class="field is-horizontal">
                                        <div class="field-label is-normal">
                                            <label class="label">Username</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                            <div class="control">
                                                <input class="input" v-model="username" placeholder="Username">
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field is-horizontal">
                                        <div class="field-label is-normal">
                                            <label class="label">Email</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                            <div class="control">
                                                <input class="input" v-model="email" placeholder="Email">
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
                                    </form>
                                    <footer class="modal-card-foot">
                                    </footer>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div class="columns">
                    <div class="column is-4">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                </figure>
                                </div>
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small></small>
                                    <br>
                                    Email         : asdasda
                                    <br>
                                    Tempat Lahir  : oiuytr
                                    <br>
                                    Tanggal Lahir : asdasda
                                    <br>
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="reply">
                                            <span class="icon is-small">
                                            <i class="fas fa-edit" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        <a class="level-item" aria-label="retweet">
                                            <span class="icon is-small">
                                            <i class="fas fa-trash" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                        <a class="level-item" aria-label="like">
                                            <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="column is-4">
                        
                    </div>
                    <div class="column is-4">
                        
                    
                    </div>
                  </div>
                  </div>
                  <br/>

                  <!-- Data Keluarga -->
                  <div v-show="keluarga">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="50%">
                            <tr>
                                <td width="200px"><b>Martia Status</b></td>
                                <td width="200px">M2</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="2"><b>Spouse</b></td>
                                <td width="200px">Moana</td>
                                <tr>
                                    <td>21 Januari 1978</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Mother's Maiden</b></td>
                                <td width="200px">Angela</td>
                            </tr>
                        </td>
                        <td width="50%">
                            <tr>
                                <td width="200px" rowspan="3"><b>Children</b></td>
                                <td width="200px">Jhoana</td>
                                <td>Jhoana</td>
                                <tr>
                                    <td>Female</td>
                                    <td>Female</td>
                                    <tr>
                                        <td>2 Juli 20</td>
                                        <td>2 Juli 2003</td>
                            </tr>
                            <tr>
                                <td width="150px" rowspan="3"><b>Emergency Phone Number</b></td>
                                <td width="200px">Jhoana</td>
                                <tr>
                                    <td>08275642397</td>
                                    <tr>
                                        <td>Brother</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>
                  <br/>

                  <!-- Data Perusahaan -->
                  <div v-show="perusahaan">
                    <div class="card ">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped ">
                        <td width="55%">
                            <tr>
                                <td width="200px"><b>NIK</b></td>
                                <td width="200px">09876123456456</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>KOPERASI</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>DPLK</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Joining Date</b></td>
                                <td width="200px">10 April 2019</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Position</b></td>
                                <td width="200px">Marketing And Sales Office</td>
                            </tr>
                        </td>
                        <td width="40%">
                            <tr>
                                <td width="200px"><b>Position</b></td>
                                <td width="200px">Receptionist</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>BPJS</b></td>
                                <td width="200px">0129223857</td>
                            </tr>
                            <tr>
                                <td width="200px"><b>Health Insurance</b></td>
                                <td width="200px">Rp300000</td>
                            </tr>
                            <tr>
                                <td width="150px"><b>Employment Status</b></td>
                                <td width="200px">K2 (Kontrak 2 tahun)</td>
                            </tr>
                        </td>
                  </tabel>
                  </div>
                  </div>
                  </div>

                </div>
    </section>
</template>

<style>
.user{
    height: 100%;
    width: 100%
}
.is-horizontal-center {
  justify-content: center;
}
.is-rounded{
    border-radius: 50%
}
</style>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
import Hello from "../components/Hello"
export default {
    middleware : 'admin',
    data() {
      return {
        member : true,
        project : false,
        perusahaan : false,
        username: '',
        email: '',
      }
    },
    components: {
        Sidebar,
        Hello,
    },
    
    methods: {
        showmodal() {
          document.getElementById('modal').classList.add('is-active');
        },
        closemodal() {
          document.getElementById('modal').classList.remove('is-active');
        },
        cek(){
            console.log(this.$store.state.auth)
        },
        async adduser(){
        try{
          var self = this
          const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/user?access_token=`+this.$store.state.auth, {
              email: this.email,
              username: this.username
          })
        }
        catch (e) {
        }
        },
    }
   
}
</script>
