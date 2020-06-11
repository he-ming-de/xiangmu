<template>
 <div>
  <div>
  <input type="text" placeholder="请输入你想搜索的商品名称" class="inputs">
  </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
getdata(){
axios.get(`/api/tableData`).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
}
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.inputs{
    width: 260px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding-left: 20px;
    outline: none;
}
</style>