<template>
    <nav class="navbar is-mobile is-dark " role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
            <img src="solusi.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger is-dark" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarMenuHeroA">
                <div class="navbar-end">
                    <nuxt-link class="navbar-item" to="/home">Home</nuxt-link>
                    <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                    <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
                    <nuxt-link class="navbar-item" to="/login">Login</nuxt-link>
                    <nuxt-link class="navbar-item" to="/"></nuxt-link>
                </div>
        </div>
    </nav>
</template>
<style>
.logonavbar{
    width: 170px;
    height: 70%;
}
</style>