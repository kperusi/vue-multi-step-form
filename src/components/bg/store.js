import { reactive } from "vue";


export const store = reactive({
    name: "",
    password: "",
    user:[],

      addUser() {

        this.user = [...this.user,this.user={UserName:this.name,UserPassword:this.password}]
        
      console.log(this.user)
    },
     
})