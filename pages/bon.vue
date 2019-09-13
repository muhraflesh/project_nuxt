<template>
    <section class="section main-content columns is-fullheight">
                <Sidebar/>
           
            <div class="column is-centered is-10">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <td width="500px">
                        <ul>
                            <li><a href="../">Solusi</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Bon Barang</a></li>
                        </ul>
                    </td>
                    <td width="200px"></td>
                    <td width="600px">
                        <Navbar/>
                    </td>
                </nav>
                <hr>
                <div class="columns is-10">
                    <div class="column is-6">
                        <div class="card">
                          <div class="card-header">
                            <div class="card-header-title">
                              Form Peminjaman Barang
                            </div>
                          </div>
                            <div class="card-content"> 
                                <form method="post" @submit.prevent="bon">
                                    <div class="field is-horizontal">
                                      <div class="field-label">
                                          <label>Start Date</label>
                                      </div>
                                      <div class="field-body">
                                        <div class="control">
                                          <input ref="cal1" type="date" class="input">
                                        </div>
                                      </div>
                                    </div>

                                    <div class="field is-horizontal">
                                      <div class="field-label">
                                          <label>End Date</label>
                                      </div>
                                      <div class="field-body">
                                        <div class="control">
                                          <input ref="cal2" type="date" class="input">
                                        </div>
                                      </div>
                                    </div>

                                    <div class="field is-horizontal">
                                      <div class="field-label">
                                          <label>Barang</label>
                                      </div>
                                      <div class="field-body">
                                      <div class="control " >
                                        <div class="select">
                                          <select>
                                            <option>Laptop</option>
                                            <option>Proyektor</option>
                                            <option>Router</option>
                                            <option>Mouses</option>
                                        </select>
                                        </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div class="field is-horizontal">
                                      <div class="field-label">
                                        <label>Jumlah</label>
                                      </div>
                                      <div class="field-body" >
                                      <div class="control" >
                                        <div class="select">
                                          <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div class="field is-horizontal">
                                      <div class="field-label">
                                        <label>Keterangan</label>
                                      </div>
                                      <div class="field-body">
                                      <div class="control">
                                        <textarea class="textarea is-fullwidth" placeholder="Keterangan"></textarea>
                                      </div>
                                      </div>
                                    </div>
                                    <div class="field buttons is-right">
                                      <div class="control buttons is-right">
                                      <button class="button is-primary" style="padding-left: 5%;padding-right: 5%">
                                        Submit
                                      </button>
                                      </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                              <Chart/>
                            </div>
                          </div>
                    </div>
                </div>
                <br>

                <div class="column">
                <div class="row content">
                  <table>
                    <tr>
                        <td class="is-fullwidth"><b>History</b></td>
                    </tr>
                  </table>
                  <hr>
                </div>
                <div class="row" style="margin-bottom: 10px">
                  <table>
                      <tr>
                          <td><b>Show</b></td>
                          <td>
                                <select>
                                  <option>All</option>
                                  <option>Today</option>
                                  <option>Yesterday</option>
                                </select>
                          </td>
                        </tr>
                  </table>
                </div>
                <div class="row">
                    <div class="card">
                    <div class="card-content">
                    <tabel class="table is-fullwidth is-striped">
                    <thead>
                      <tr>
                        <th><abbr title="No">No</abbr></th>
                        <th><abbr title="Name">Nama</abbr></th>
                        <th><abbr title="Divisi">Divisi Project</abbr></th>
                        <th><abbr title="Start">Start Date</abbr></th>
                        <th><abbr title="End">End Date</abbr></th>
                        <th><abbr title="Barang">Barang</abbr></th>
                        <th><abbr title="Jumlah">Jumlah</abbr></th>
                        <th><abbr title="Desc">Description</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Ahmad Baid</td>
                        <td>Back End</td>
                        <td>05/08/19</td>
                        <td>13/08/19</td>
                        <td>Proyektor</td>
                        <td>1</td>
                        <td>ACER X1123H</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Muh Rafli Sh</td>
                        <td>Front End</td>
                        <td>06/08/19</td>
                        <td>13/08/19</td>
                        <td>Laptop</td>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Ahmad Baid</td>
                        <td>Back End</td>
                        <td>05/08/19</td>
                        <td>13/08/19</td>
                        <td>Keyboard</td>
                        <td>1</td>
                        <td>Lorem Ipsum</td>
                      </tr>
                    </tbody>
                  </tabel>
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
import Sidebar from '../components/Sidebarpublic'
import Chart from '../components/Chart.vue'
import Navbar from '../components/Navbar'

export default {
    middleware : 'authenticated',
    components: {
      Sidebar,
      Chart,
      Navbar,
    }
}
</script>

<style>
.control{
  width: 80%
}
</style>