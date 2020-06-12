<template>
  <div>
    <div class="d-f m-b2">
      <div>未读消息(2)</div>
    </div>
    <el-card shadow="always">
    <div v-for="(item,index) in arr" :key="index">
    <div>{{item.name}}</div>
    <div>{{item.time}}</div>
    
    </div>
      <el-button type="primary" disabled>全部标为已读</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr:[
        {
          name:'系统通知]该系统将于今晚凌晨2点到5点进行升级维护',
          time:'2018-04-19 20:00:00'
        },
        {
          name:'今晚12点整发大红包,先到先得',
          time:'2018-04-19 20:00:00'
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  border-bottom: 1px solid #ccc;
}
</style>