<template>
    <div>
        <h1>子</h1>
        <p>{{message}}</p>
        <button @click="sendMsgtoParent">向父组件传值</button>
        <button @click="sendMsgtobro">兄弟组件传值</button>
    </div>
</template>

<script>
import Bus from '../assets/Bus.js'
export default {
    data(){
        return{
            a:0
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
        }
    }
}
</script>

<style>

</style>
