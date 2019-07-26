<template>
    <section class="section is-desktop main-content columns is-fullheight abu">
        <div class="container is-desktop">
            <div class="column is-3 is-narrow-mobile is-fullheight is-hidden-mobile ">
                <ul class="menu-list">
                    <a href="#" class="has-background-primary atas has-text-light"> FRONTEND </a>
                <div class="card-content has-text-left sidenav">
                        <p><b>Ketua</b><br>Muhammad Rafli S</p><br>
                        <p><b>Anggota</b></p>
                        <p>Dewi Ambarwati <br> Salma Faiqah A</p>
                    </div>
                </ul>
            </div>
           
           <div class="column" style="padding-left:20%">
            <div class="row is-4">
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
                            <td style="width:50%">
                            <span class="icon is-right" style="float:right;">
                                <i class="fa fa-exclamation-circle merah" aria-hidden="true">
                                </i>
                            </span>
                            </td>
                        
                        </div>
                    </div>
                </div>
           </div><br>
           <div class="row is-4">
               <div class="">
                   <td><b>What's Next ?</b></td>
                <div class="card">
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-clipboard" aria-hidden="true">
                                </i>
                        </span>
                        Mengautentikasi halaman yang telah dibuat
                    </td>
                    <td style="width:5%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:5%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-clipboard" aria-hidden="true">
                                </i>
                        </span>
                        Membuat halaman web responsive</td>
                    <td style="width:5%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:5%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-clipboard" aria-hidden="true">
                                </i>
                        </span>
                        Menginstall nuxt js</td>
                    <td style="width:5%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:5%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-clipboard" aria-hidden="true">
                                </i>
                        </span>
                        Menyempurnakan tampilan web</td>
                    <td style="width:5%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:5%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                    <div class="card-content">
                    <td style="width:50%">
                        <span class="icon" style="color:#40e0d0">
                                <i class="fa fa-clipboard" aria-hidden="true">
                                </i>
                        </span>
                        Menerapkan git secara keseluruhan</td>
                    <td style="width:5%"><time datetime="2016-1-1">22/07/2019</time></td>
                    <td style="width:5%"><time datetime="2016-1-1">11:09 PM</time></td>
                    </div>
                </div>
            
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
.sidenav {
        height: 80%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0,25;
        left: 1;
        background-color: white;
        overflow-x: hidden;
        padding-top: 20px;
    }
.atas {
        width: 200px;
}
.abu {
    background-color: #e8e8e8;
}
.merah {
    color: red;
}
</style>

<script>
export default {
   
}
</script>
