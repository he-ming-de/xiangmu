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
        3
        <button class="btn" @click="toggleShow">设置头像</button>
        4
        <my-upload
          5
          6
          7
          8
          9
          10
          11
          12
          13
          14
          15
          16
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
          :width="200"
          :height="200"
          img-format="png"
          :size="size"
          langType="zh"
          :noRotate="false"
          field="Avatar1"
          url="https://httpbin.org/post"
        ></my-upload>17
        <img :src="imgDataUrl" />
        18
      </div>
    </el-card>
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload';
export default {
  name: "",
  props: {},
  data() {
    return {
        imgDataUrl: "",
        show: false,
        size:2.1
    };
  },
  components: {
      "my-upload": myUpload
  },
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
