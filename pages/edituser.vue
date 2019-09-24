<template>
    <section class="section main-content columns is-fullheight">

                    <!-- MODAL EDIT USER -->
                    <div class="modal is-active" id="modal-edit">
                          <div class="modal-background" @click="closemodalEdit"></div>
                          <div class="modal-card ">
                            <header class="modal-card-head">
                              <p class="modal-card-title">Edit User</p>
                              <button class="delete" aria-label="close" @click="closemodalEdit"></button>
                            </header>
                            <section class="modal-card-body">
                            <!-- MODAL CONTENT-->
                            <form method="post" @submit.prevent="editUser">

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Email</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <div class="control">
                                        <input class="input" type="email" v-model="post.email">
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Role</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field is-narrow">
                                      <div class="control">
                                        <div class="select is-fullwidth">
                                          <select v-model="post.role">
                                            <option value="Leader">Leader</option>
                                            <option value="HRD">HRD</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">{{alluser.id}}</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field is-narrow">
                                      <div class="control">
                                        <div class="select is-fullwidth">
                                          <select v-model="post.nama_tim">
                                            <option value="Backend">Backend</option>
                                            <option value="Frontend">Frontend</option>
                                          </select>
                                        </div>
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
                              </form>
                            </section>
                            <footer class="modal-card-foot">
                                 <button @click="cek">asda</button>
                            </footer>
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
        pesan: null,
        success: null,
      }
    }, 
    components: {
    },
    methods: {
        cek () {
            console.log(this.$store.state.alluser)
        }
    },
    
    computed: {
        alluser () { return this.$store.state.alluser }
    },
    mounted () {
        console.log(this.$store.state.alluser)
    }
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

</style>
