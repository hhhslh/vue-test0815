<template>
    <div>
        <hi1 :message="parentMsg.total" @sendMsgtoParent="msgFromChild">
            <template v-slot:slotName>
                <p>v-slot</p>
            </template>
            <template v-slot:default="user">
                {{ user.data }}
            </template>
        </hi1>
        <hi2>
            <p slot="test">具名插槽</p>
            <div slot-scope="user">
                <p>匿名插槽</p>
                <p>作用域插槽{{user.data}}</p>
            </div>
        </hi2>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import hi1 from '../components/hi1'
import hi2 from '../components/hi2'
import {getSchool} from "../api/api"
export default {
    components:{
        hi1,
        hi2
    },
    data(){
        return{
            parentMsg:"",
        }
    },
    methods:{
        //   子传父
        msgFromChild(child){
            console.log(child)
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
