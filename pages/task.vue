<template>
  <section>
    <div class="container">
        <br/>
      <div class="columns notification has-background-danger">
        <h4>Your Task</h4>
      </div>
      <br/>
      <div class="columns">
        <div class="column ">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-8-8">11:09 PM - 8 July 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                   Membuat halaman home, login, register, forgot password dan profile
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="showModal">Ask</a>
                <a href="#" class="card-footer-item">Done</a>
            </footer>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-9-10">19.30 PM - 10 Sept 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Mengautentikasikan halaman yang telah dibuat dan memastikan autentikasi sudah tersambung dengan database
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="showModal">Ask</a>
                <a href="#" class="card-footer-item">Done</a>
            </footer>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-7-27">23.45 PM - 27 Augst 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Membuat halaman web responsible
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="showModal">Ask</a>
                <a href="#" class="card-footer-item">Done</a>
            </footer>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-10-1">11:09 PM - 1 Oct 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Menyempurnakan tampilan web
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="showModal">Ask</a>
                <a href="#" class="card-footer-item">Done</a>
            </footer>
            </div>
        </div>
        </div>
        <div class="columns notification has-background-success">
        <h4>Done</h4>
      </div>
      <br/>
      <div class="columns">
                <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-5-1">11:09 PM - 1 May 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Diskusi mengenai projek dengan divisi yang terkait
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-5-19">16.00 PM - 19 May 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Menginstall Node JS, Nuxt JS, Bulma
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
            </div>
        </div>
        <div class="column ">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-4-23">12:00 PM - 23 Apr 2019</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Membuat desain halaman home, login, register, forgot password dan profile
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                <time datetime="2019-6-28">14.00 PM - 28 June 2016</time>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                Menerapkan git secara keseluruhan
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
            </div>
        </div>
        </div>
        
        <div class="modal" id="modalAsk">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Ask a Question</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                <!-- Content ... -->
                    <div class="field">
                    <div class="control">
                        <textarea class="textarea is-primary" placeholder="Primary textarea"></textarea>
                    </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Submit</button>
                <button class="button" @click="closeModal">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
   </section>
 
</template>
<script>
 
  export default { 
    components: {

    },

    data() {
      return{
        username: '',  
      }
    },
    methods: {
        showModal(){
          document.getElementById('modalAsk').classList.add('is-active'); 
        },
        closeModal(){
            document.getElementById('modalAsk').classList.remove('is-active'); 
        },
       
    },
    
  }
</script>
<style>

</style>

