<template>
    <div class="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
                <figure class="image is-4by4">
                        <img src="hitam247.png" alt="Solusi 247" class="user">
                </figure>
                <br/>
                <ul class="menu-list">
                <li>
                    <a href="#" class="has-text-centered">
                    <h1><b>PROJECT</b></h1>
                    </a>
                </li>
                <li>
                    <a href="/project" class="has-background-primary">
                    <span class="icon"><i class="fa fa-user"></i></span> Project 1
                    </a>

                    <ul>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-list"></i></span> Task 1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-list"></i></span> Task 2
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-list"></i></span> Task 3
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-list"></i></span> Task 4
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-tasks"></i></span> Project 2
                    </a>

                    <ul>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Task 1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Task 2
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-tasks"></i></span> Project 3
                    </a>

                    <ul>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Task 1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span class="icon is-small"><i class="fa fa-link"></i></span> Task 2
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="has-background-primary">
                    <span class="icon"><i class="fa fa-cog"></i></span>Setting
                    </a>

                    <ul>
                    <li>
                        <a href="/divisi">
                        <span class="icon is-small"><i class="fa fa-sign-out"></i></span> Back
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="logout">
                        <span class="icon is-small"><i class="fa fa-sign-out"></i></span> Logout
                        </a>
                    </li>
                    
                    </ul>
                </li>
                </ul>
            </div>
           
</template>
