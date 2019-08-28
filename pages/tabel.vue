<template>
        <section class="section main-content columns is-fullheight">
            <Sidebar/>
               <div class="column is-10">
                   <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="/">Solusi</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Profile</a></li>
                        </ul>
                    </nav>
                    <Hello/>
                    <br/>
    
                   <div class="card">
                    <div class="card-content">
                    <div class="columns">
                       <div class="column is-2 has-text-centered">
                            <figure class="image">
                            <img class="is-rounded" src="~assets/images/iqbaal.jpg">
                            </figure><br>
                            <p class="subtitle"><b>John Smith</b> <br> Hello!! </p>
                       </div>
                       <div class="column">
                        <div class="columns ">
                            <div class="column about-me">
                                <ul class="personal-info">
                                <li>
                                    <p>
                                    <span>Sex</span>
                                    Male
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Blood Type</span>
                                    A
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Email</span>
                                    Jhon@gmail.com
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>KK</span>
                                    Lorem Ipsum
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>KTP</span>
                                    Lorem Ipsum
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Religion</span>
                                    Islam
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>KTP Address</span>
                                    <td>Baciro, Gondokusuman, Yogyakarta City</td>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Residental Address</span>
                                    <td>Baciro, Gondokusuman, Yogyakarta City</td>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>KTP Number</span>
                                    123578654344
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Education Background</span>
                                    D3 Teknik Informasi UGM
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Certificate</span>
                                    HTML Fundamental Course
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Date Of Birth</span>
                                    1 April 1990
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Phone Number</span>
                                    987646227282
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>NPWP</span>
                                    Lorem Ipsum
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <span>Bank Account</span>
                                    Lorem Ipsum
                                    </p>
                                </li>
                                </ul>
                            </div>
                        </div>
                       </div>
    
                    </div>
                    </div>
                   </div>
    
                </div>
    
               </div>
    
           
        </section>
    </template>
    
    
    
    <script>
    const Cookie = process.client ? require('js-cookie') : undefined
    import Sidebar from "../components/Sidebarpublic"
    import Hello from "../components/Hello"
    export default {
        middleware : '',
    
        components: {
        Sidebar,
        Hello,
        },
    
        methods: {
            auth ({store}){
                console.log (store.state.auth)
            },
            logout () {
                Cookie.remove('auth')
                this.$store.commit('setAuth', null)
                this.$router.push('/')
            }
        }
       
    }
    </script>

<style>
.user{
    height: 100%;
    width: 100%
}
.about-me {
}
.about-me p {
	line-height: 24px;
	letter-spacing: 0px;
}
.about-me .personal-info {
	padding: 5px;
	display: inline-block;
	width: 100%;
}
.about-me .personal-info li {
	width: 50%;
	float: left;
}
.about-me .personal-info li span {
	width: 45%;
	float: left;
	font-weight: bold;
}
.about-me .personal-info li p {
	margin: 0px;
	line-height: 30px;
}
    </style>