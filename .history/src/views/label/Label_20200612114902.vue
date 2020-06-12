<template>
  <div>
    <el-tabs v-model="activeName">
    <el-tab-pane label="未读消息()" name="first">
      <div v-if="arr.length>0">
        
          <el-card shadow="always">
            <div v-for="(item,index) in arr" :key="index" class="d-f j-c-s-b p1 item m-b2">
              <div>{{item.name}}</div>
              <div class="d-f a-i-c">
                <div class="m-r2">{{item.time}}</div>
                <el-button type="info" @click="read">标记已读</el-button>
              </div>
            </div>
            <el-button type="primary" @click="reads">全部标为已读</el-button>
          </el-card>
        
      </div>
      <div v-else class="d-f j-c-c">
        <el-card shadow="always">暂无数据</el-card>

      </div>
      </el-tab-pane>
      <div v-if="list.length>0">
        <el-tab-pane label="已读消息()" name="second">
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
      </div>
      <div v-else class="d-f j-c-c">
        <el-card shadow="always">暂无数据</el-card>
      </div>
      <div v-if="del.length>0">
        <el-tab-pane label="回收站()" name="third">
          <el-card shadow="always">
            <div v-for="(item,index) in del" :key="index" class="d-f j-c-s-b p1 item m-b2">
              <div>{{item.name}}</div>
              <div class="d-f a-i-c">
                <div class="m-r2">{{item.time}}</div>
                <el-button type="warning">还原</el-button>
              </div>
            </div>
            <el-button type="info" @click="empty">清空回收站</el-button>
          </el-card>
        </el-tab-pane>
      </div>
      <div v-else class="d-f j-c-c">
        <el-card shadow="always">暂无数据</el-card>
      </div>
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
          time: "2018-04-19 21:00:00"
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
    deletels(item, index) {
      this.list.splice(index);
    },
    read(item, index) {
      this.arr.splice(index, 1);
    },
    reads(item, index) {
      this.arr.splice(index);
    },
    empty(item, index) {
      this.del.splice(index);
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