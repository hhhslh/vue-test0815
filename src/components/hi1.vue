<template>
    <div>
        <h1>子</h1>
        <p>{{message}}</p>
        <button @click="sendMsgtoParent">向父组件传值</button>
        <button @click="sendMsgtobro">兄弟组件传值</button>
        <slot name="slotName"></slot>
        <slot :data="parentMsg.total"></slot>
        <p>{{$route.params.username}}————{{$route.params.id}}</p>
    </div>
</template>

<script>
import {getSchool} from "../api/api"
import Bus from '../assets/Bus.js'
export default {
    data(){
        return{
            a:0,
            parentMsg:"",
        }
    },
    // 父传子
    props:["message"],
    methods:{
        sendMsgtoParent(){
            // 子传父
            this.$emit("sendMsgtoParent","this message from children")
             console.log(this.message)
        },
        // 兄弟传值
        sendMsgtobro(){
            Bus.$emit('send',this.a++)
        },
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
