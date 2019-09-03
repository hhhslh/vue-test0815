<template>
    <div>
        <h1>子</h1>
        <p>{{message}}</p>
        <button @click="sendMsgtoParent">向父组件传值</button>
    </div>
</template>

<script>
export default {
    // 父传子
    props:["message"],
    methods:{
        sendMsgtoParent(){
            // 子传父
            this.$emit("sendMsgtoParent","this message from children")
             console.log(this.message)
        }
    }
}
</script>

<style>

</style>
