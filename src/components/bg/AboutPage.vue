<template>
    <div>
        {{ title }}
        this is a second child component using optional api
    </div>
  <slot></slot>

</template>
<script>
export default {
    props:['title'],
    data(){
        return{

        }
    }
}
</script>

