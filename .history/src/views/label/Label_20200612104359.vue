<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="未读消息（）" name="first">
        <el-card shadow="always">
          <div v-for="(item,index) in arr" :key="index" class="d-f j-c-s-b p1 item m-b2">
            <div>{{item.name}}</div>
            <div class="d-f a-i-c">
              <div class="m-r2">{{item.time}}</div>
              <el-button type="info">标记已读</el-button>
            </div>
          </div>
          <el-button type="primary">全部标为已读</el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="已读消息（）" name="second">
        <el-card shadow="always">
          <div v-for="(item,index) in list" :key="index" class="d-f j-c-s-b p1 item m-b2">
            <div>{{item.name}}</div>
            <div class="d-f a-i-c">
              <div class="m-r2">{{item.time}}</div>
              <el-button type="info" @click="deletel">删除</el-button>
            </div>
          </div>
          <el-button type="danger" @click="deletels">删除全部</el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="回收站（）" name="third">
        <el-card shadow="always">
          <div v-for="(item,index) in list" :key="index" class="d-f j-c-s-b p1 item m-b2">
            <div>{{item.name}}</div>
            <div class="d-f a-i-c">
              <div class="m-r2">{{item.time}}</div>
              <el-button type="warning">还原</el-button>
            </div>
          </div>
          <el-button type="info">清空回收站</el-button>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 20:00:00"
        }
      ],
      list: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        }
      ],
      del: [
        {
          name: "[系统通知]你的优惠卷已过期",
          time: "2018-04-19 20:00:00"
        }
      ]
    };
  },
  components: {},
  methods: {
    deletel(item, index) {
      this.list.splice(index, 1);
    },
    deletels(){
this.list.splice(index);
    }
  },
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