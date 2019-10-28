<template>
<div>
    <p>兄弟</p>
    <slot name="test"></slot>
    <slot :data="parentMsg.total"></slot>
</div>
</template>

<script>
import {getSchool} from "../api/api"
import Bus from '../assets/Bus.js'
export default {
    data(){
        return{
            msg:'',
            parentMsg:"",
        }
    },
    created(){
        var that=this
        Bus.$on('send',function(val){
            that.msg=val
            console.log(that.msg)
        })
    },
    methods:{
        apiTest(){
            getSchool({
                pageNum: 1,
                pageSize: 24
            }).then(res=>{
                this.parentMsg=res.data
            })
        },
    },
    mounted(){
        this.apiTest()
    }

}
</script>

<style>

</style>
