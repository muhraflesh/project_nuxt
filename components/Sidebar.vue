<template>
    <aside class="column is-2 aside">
        <figure class="image is-4by4">
            <img src="hitam247.png" alt="Solusi 247" class="user">
        </figure>
                <br/>
        <nav class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a class="is-active" href="#"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Project</a></li>
          </ul>
          <p class="menu-label">
            Menu
          </p>
          <ul class="menu-list">
            <li><a href="#"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Project 1</a></li>
            <li>
                <a href="#"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Project 2</a>
            </li>
            <li>
                <a href="#"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Project 3</a>
                <ul>
                <li><a href="/divisi">Task 1</a></li>
                <li><a href="/divisi">Task 2</a></li>
                </ul>
            </li>
            <li><a href="#"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Project 4</a></li>

            <li>
              <a class=""><i class="fa fa-cog"></i> Settings</a>
              <ul>
                <li><a href="/divisi">Back</a></li>
                <li><a>Logout</a></li>
              
              </ul>
            </li>
            </ul>
            <p class="menu-label">
            Main Menu
            </p>
            <ul class="menu-list">
              <li><a href="/profile"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Profile</a></li>
              <li>
                  <a href="/presensi"><span class="icon is-small"><i class="fa fa-calendar"></i></span> Presensi</a>
              </li>
              <li>
                  <a href="/divisi"><span class="icon is-small"><i class="fa fa-tasks"></i></span> Divisi</a>
                
              </li>
              <li><a href="/bon"><span class="icon is-small"><i class="fa fa-suitcase"></i></span> Bon</a></li>

              <li>
                <a class=""><i class="fa fa-cog"></i> Settings</a>
                <ul>
                
                  <li><a>Logout</a></li>
                
                </ul>
              </li>
             </ul>
          
        </nav>
      </aside>
           
</template>

<style>
.sidebar {
background-color : primary ;
}
</style>
