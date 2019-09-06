<template>
<section class="section main-content columns is-fullheight">
    <Sidebar/>
    <div class="column is-10">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/">Solusi</a></li>
                <li class="is-active"><a href="#" aria-current="page"> Keuangan </a></li>
            </ul> <hr>
        </nav>
        <div class="columns id-multiline">
        <div class="column">
            <div class="box notification is-white">
            <div class="heading is-size-6"> Saldo Anda </div>
            <div class="title"> Rp 2.700.000 </div>
            <div class="level"></div>
            </div>
        </div>
        <div class="column">
            <div class="box notification is-white">
            <div class="heading is-size-6"> Detail </div>
            <div class="title">Gaji Perbulan</div>
            <div class="level">
                <div class="level-item">
                <div>
                    <div class="heading">Gaji Pokok</div>
                    <div class="title is-6"> Rp 2.500.000 </div>
                </div>
                </div>
                 <div class="level-item">
                <div>
                    <div class="heading">Bonus</div>
                    <div class="title is-6"> Rp 500.000 </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="column">
            <div class="box notification is-white">
            <div class="heading is-size-6"> Saldo Asuransi </div>
            <div class="title "> Rp 150.000 </div>
            <div class="level">
                <div class="level-item">
                <div>
                    <div class="heading">Asuransi</div>
                    <div class="title is-6"> Rp 100.000 </div>
                </div>
                </div>
                 <div class="level-item">
                <div>
                    <div class="heading">Koperasi</div>
                    <div class="title is-6"> Rp 50.000 </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="box content">
        <article class="post">
        <div class="columns is-multiline">
            <div class="column">
                <h4> Periode </h4>
            </div>
            <div class="column">
            <div class="select opt" style="float:right">
                <select>
                  <option>Agustus 2019</option>
                  <option>September 2019</option>
                  <option>Oktober 2019</option>
                </select>
            </div>
            </div>
        </div>
            
        </article>
        <article class="post">
            <h4> Project Web Karyawan </h4>
            <div class="media">
                <div class="media-content"> 
                    <span class="icon is-small">
                    <i class="fa fa-calendar"></i>
                    </span>
                    24 Juli 2019 </div>
                <div class="media-right has-background-primary has-text-white"> Paid Rp 1.000.000 </div>
            </div>
        </article>
        <article class="post">
            <h4> Project ASR </h4>
            <div class="media">
                <div class="media-content"> 
                    <span class="icon is-small">
                    <i class="fa fa-calendar"></i>
                    </span>
                    05 Agustus 2019 </div>
                <div class="media-right has-background-danger has-text-white"> Unpaid Rp 500.000 </div>
            </div>
        </article>
        </div>
    </div>
</section>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
import Sidebar from "../components/Sidebarpublic"
export default {
    components: {
        Sidebar,
    },       
}
</script>

<style>
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}

.opt{
display:flex;
justify-content:flex-end;
}
</style>