<template>
  <div>
    <h1>Enter Your Details to be Registered</h1>
    <div>
      <form action="" class="signup">
        <label for="name">Name</label>
        <input type="text" v-model="store.name" />
        <label for="password">Password</label>
        <input type="text" v-model="store.password" />
        <button type="button" @click="addUser">Sign Up</button>
      </form>

     
    </div>
  </div>
</template>

<script>
import {store} from './store.js'
// import {router} from 'vue-router'
export default {


  data() {
    return {

      store
    };

  },
  methods: {
    addUser() {
        // this.user = [...this.user,this.user={UserName:this.name,UserPassword:this.password}]
        store.addUser()
      // console.log(store.user)
      this.$router.push('/')
    },
  },
};
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-direction: column;
  width: 280px;
}
.signup input {
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1.2px solid rgb(182, 180, 180);
}
.signup label {
  margin-top: 8px;
}
.signup button {
  margin-top: 10px;
  height: 30px;
  border-radius: 5px;
  border-width: 0;
}
.signup button:hover {
  cursor: pointer;
}
</style>
