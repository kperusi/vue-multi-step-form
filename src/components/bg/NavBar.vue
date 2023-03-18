<template>
    <div class="nav-bar">
<p><router-link to = '/'>Home</router-link></p>
<p><router-link to = '/about'>About Me</router-link></p>
<p><router-link to = '/login'>Login</router-link></p>
<p><router-link to = '/Signup'>Sign up</router-link></p>
<p><router-link to = '/randomusers'>Random Users</router-link></p>
<p><router-link to = '/users'>Users</router-link></p>
    </div>
    <router-view></router-view>
</template>

<script setup>
import './style/styles.css'


</script>
