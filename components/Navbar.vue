<template>
    <nav class="navbar is-dark">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                <img src="solusi.png" class="logonavbar">
                </a>
                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            My Account
                        </a>
                        <div class="navbar-dropdown">
                            <nuxt-link class="navbar-item" to="/">My Profile</nuxt-link>
                            <hr class="navbar-divider">
                            <a class="navbar-item"> Logout</a>
                        </div>
                    </div>
                    <nuxt-link class="navbar-item" to="/signin">Register</nuxt-link>
                    <nuxt-link class="navbar-item" to="/login"></nuxt-link>
                </div>
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