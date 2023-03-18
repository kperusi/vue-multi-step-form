<script setup>
import { ref } from "vue";
// const myTitle = ref("Composition Api with fetch api");
const userData = ref([]);

defineProps(["name",'date']);

const getUserData = () => {
  fetch("https://randomuser.me/api/?results=100")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      userData.value = data.results;
      console.log(userData.value);
    });
}; 

getUserData();

</script>

<template>
  <div>{{ name }} {{ date }}</div>
  <section class="card">
    <div v-for="(person, index) in userData" :key="index">
    <div class="image-wrap">
    <img :src=person.picture.large alt="">
    </div>
      <p>{{ person.name.title }} {{ person.name.first }} {{ person.name.last }}</p>
      <h4>{{ person.dob.age }}</h4>
    </div>
  </section>
  <RouterView></RouterView>
</template>
