<template>
    <section class="section main-content columns is-fullheight">
        <Sidebar/>
           <div class="column is-10">
                <!-- NAVBAR & BREADCRUMBS -->
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <td width="500px">
                            <ul>
                                <li><a href="/">Solusi</a></li>
                                <li class="is-active"><a href="#" aria-current="page">Admin Panel</a></li>
                            </ul>
                        </td>
                        <td width="500px"></td>
                        <td width="600px">
                            <Navbar/>
                        </td>
                    </nav>
                    <br>

                <!-- BUTTON USER -->
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-left">
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="member = !member">
                                <p class="subtitle has-text-white has-text-weight-medium">Manajemen User</p>
                            </article>
                        </div>
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="member = !member">
                                <p class="subtitle has-text-white has-text-weight-medium">Manajemen User</p>
                            </article>
                        </div>
                        <div class="tile is-parent" >
                            <article class="tile is-child box has-background-primary" @click="member = !member">
                                <p class="subtitle has-text-white has-text-weight-medium">Manajemen User</p>
                            </article>
                        </div>
                    </div>
                </section>
                <br/>

                <!-- DATA USER -->
                <div v-show="member">
                    <div class="columns">
                    <div class="column is-1">
                            <tr>
                                <td><b>USER LIST</b></td>
                            </tr>
                    </div>
                    <div class="column is-7">
                            <tr>
                                <td><b>
                                <a v-bind:class="[ activetab === 1 ? 'active' : '' ]" @click="activetab=1">Card</a>
                                /
                                <a v-bind:class="[ activetab === 2 ? 'active' : '' ]" @click="activetab=2">Tabel</a>
                                </b></td>
                            </tr>
                    </div>
                    <!-- MODAL ADD USER -->
                    <div class="column is-4">
                            <a class="button is-success is-outlined" @click="showmodal">Add User</a>
                            <div class="modal" id="modal">
                                <div class="modal-background" @click="closemodal"></div>
                                <div class="modal-card ">
                                    <header class="modal-card-head">
                                    <p class="modal-card-title">Add User</p>
                                    <button class="delete" aria-label="close" @click="closemodal"></button>
                                    </header>
                                    <form method="post" @submit.prevent="adduser">
                                    <section class="modal-card-body">
                                    <!-- MODAL CONTENT-->
                                    <Notification :message="pesan" v-if="pesan"/>
                                    <AdduserSuccess :message="success" v-if="success"/>
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
                    <!-- DATA CARD -->
                    <div class="container" v-if="activetab === 1">
                        <div class="card-columns">
                            <div class="box" v-for="item in posts" v-bind:key="item.key">
                                <article class="media">
                                    <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                    </figure>
                                    </div>
                                    <div class="media-content">
                                    <div class="content">
                                        <p>
                                        <strong>{{item.nama}}</strong>
                                        <br>
                                        Email         : {{item.email}}
                                        <br>
                                        ID  : {{item.id_pengguna}}
                                        <br>
                                        Agama : {{item.agama}}
                                        <br>
                                        </p>
                                    </div>
                                    </div>
                                </article>
                            </div>
                        </div><br/>
                        <div style="padding-left:46%">
                            <button class="button btn-more is-rounded is-info is-outlined" @click="loadMore">Load More</button>
                        </div>
                    </div>
                    
                    <!-- DATA TABEL -->
                    <table class="table is-striped"  v-if="activetab === 2">
                        <thead>
                            <tr>
                            <th class="has-text-centered">ID.</th>
                            <th class="has-text-centered">Nama</th>
                            <th class="has-text-centered">Email</th>
                            <th class="has-text-centered">Alamat</th>
                            <th class="has-text-centered">Posisi</th>
                            <th class="has-text-centered">Tanggal Gabung</th>
                            <th class="has-text-centered">Status Karyawan</th>
                            <th class="has-text-centered">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in posts" v-bind:key="item.key">
                                <th class="has-text-centered">{{item.id_pengguna}}</th>
                                <td><a><strong>{{item.nama}}</strong></a></td>
                                <td>{{item.email}}</td>
                                <td>{{item.alamat}}</td>
                                <td>{{item.posisi_karyawan}}</td>
                                <td>{{item.tgl_masuk}}</td>
                                <td>{{item.status_karyawan}}</td>
                                <td>
                                    <tr>
                                        <td><a class="button is-info" @click="showDetail(item)">Detail</a></td>
                                        <td><a class="button is-warning  has-text-white" @click="showEdit(user)">Edit</a></td>
                                        <td><a class="button is-danger" @click="deleteUser">Delete</a></td>
                                    </tr>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="padding-left:450%">
                                        <button class="button btn-more is-rounded is-info is-outlined" @click="loadMore">Show More</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                
                  <br/>

                  <!-- DATA NOTIFIKASI -->
                  <div v-show="notif">
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

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import axios from 'axios'
import Sidebar from "../components/Sidebarpublic"
import Navbar from "../components/Navbar"
import Notification from '../components/Notification'
import AdduserSuccess from '../components/AdduserSuccess'
export default {
    middleware : 'admin',
    data() {
      return {
        activetab: 2,
        member : true,
        notif : false,
        project : false,
        perusahaan : false,
        username: '',
        email: '',
        allPost: [],
        posts: [],
        current: 5,
        pesan: null,
        success: null,
        post: {},
        allUser: [],
        users: [],
      }
    }, 
    components: {
        Sidebar,
        Navbar,
        Notification,
        AdduserSuccess,
    },
    created(){
        axios(`${this.$axios.defaults.baseURL}/pengguna?access_token=${this.$store.state.auth}`, {
            crossDomain: true
        }).then( ({ data }) => {
            this.allUser = data
            data.map((user, key) => {
              if (user.id !== null && this.users.length < 5) {
                this.users.push(user)
              }
            })
        })
        
    },
    mounted () {
        axios(`${this.$axios.defaults.baseURL}/pengguna/profil/getAll`, {
            crossDomain: true
        }).then( ({ data }) => {
            this.allPost = data
            data.map((item, key) => {
              if (item.username !== null && this.posts.length < 5) {
                this.posts.push(item)
              }
            })
        })
    },
    methods: {
        showmodal() {
          document.getElementById('modal').classList.add('is-active');
        },
        closemodal() {
          document.getElementById('modal').classList.remove('is-active');
        },
        showEdit(data) {
          this.$store.commit('setAlluser', data)
          this.$router.replace({ 'path': '/edituser' })
        },
        showDetail(data) {
          this.$store.commit('setAllprofile', data)
          this.$router.replace({ 'path': '/detailuser' })
        },
        loadMore () {
            this.posts = []
            this.current += 5
            this.allPost.map((item, key) => item.email !== null && this.posts.length < this.current ? this.posts.push(item) : '')
        },
        async adduser(){
            try{
            var self = this
            const {data} = await this.$axios.post(`${this.$axios.defaults.baseURL}/pengguna?access_token=`+this.$store.state.auth, {
                email: this.email,
                username: this.username
            })
            if (data.email != null) {
                this.success = "User Sukses Ditambahkan"
            }
            }
            catch (e) {
                this.pesan = e.response.data.error.statusCode
                if (this.pesan = 422){
                    this.pesan="Username or Email Already Exists"
                } else if (this.pesan = 500) {
                    this.pesan="Internal Server Error"
                } else {
                    this.pesan = "Error. Please Check Your Connections"
                }
            }
        },
        async deleteUser() {
            try{
            await this.$axios.delete(`${this.$axios.defaults.baseURL}/pengguna/`, {

            })
            }
            catch (e) {

            }
        },
        async editUser() {
          this.$axios.patch(`${this.$axios.defaults.baseURL}/pengguna/${this.$store.state.user}?access_token=`+this.$store.state.auth, this.post).then(() => {
                this.$router.patch({name: 'posts'});
          });
        }
    },
    
    
}
</script>

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
@media (min-width: 768px) {  
  .card-columns {column-count: 3;}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
 .card-columns {column-count: 3;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
   .card-columns {column-count: 3;} 
}

</style>
