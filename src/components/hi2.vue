<template>
    <p>兄弟</p>
</template>

<script>
import Bus from '../assets/Bus.js'
export default {
    data(){
        return{
            msg:''
        }
    },
    created(){
        var that=this
        Bus.$on('send',function(val){
            that.msg=val
            console.log(that.msg)
        })

    }

}
</script>

<style>

</style>
