<template>
  <div>
    <el-card shadow="always">
      <h2>支持拖拽</h2>
      <div class="p2 item m-t2 m-b2">Element UI自带上传组件</div>

      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <h2 class="m-t2 m-b2">支持裁剪</h2>
      <div id="app">
 3     <button class="btn" @click="toggleShow">设置头像</button>
 4     <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="Avatar1"
16     url="https://httpbin.org/post"></my-upload>
17     <img :src="imgDataUrl">
18   </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
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
  background: rgb(238, 238, 238);
}
</style>
