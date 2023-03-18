<template>
    <div>
    Users Page
<h1> Welcome {{ this.$route.params.id }}</h1>
<h2>{{ name }}</h2>

    </div>
</template>

<script setup>
import { store } from './store';
import { ref } from 'vue';

const name = ref('')

const getUserName = ()=>{
    store.user.map((each)=>{
        if(this.$route.params.id === each.Username){
            name.value = each.Username
        }
    })
}


getUserName()
</script>

<style lang="scss" scoped>

</style>