<script>
import { store } from './store';
export default {

    data(){
        return{
            password:'',
            name:'',
            store
        }
    },
    methods:{
       AuthUser(e){
        e.preventDefault();
        store.user.map((each)=>{
            if(this.name===each.UserName){
                console.log('yess')
                this.$router.push(`/users/${this.name}`)
            }
            else{
            console.log('you are not registered')}
        })

        
       
 

       } 
    }

    
}
</script>

<template>
    <div>
    LoginPage
    <form action="" class="form">
    <label for="name">Name</label>
    <input type="text" v-model="name">
    <label for="password">Password</label>
    <input type="text" v-model="password">
    <button @click="AuthUser">Login</button>
    </form>
   
    </div>
</template>
<style lang="scss" scoped>

.form{
    display: flex;
    flex-direction: column;
    width: 280px;
}
.form input{
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1.2px solid rgb(182, 180, 180);
}
.form label{
    margin-top: 8px;
}
.form button{
    margin-top: 10px;
    height: 30px;
    border-radius: 5px;
    border-width: 0;
}
.form button:hover{
    cursor: pointer;
}

</style>