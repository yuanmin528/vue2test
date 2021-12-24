<template>
  <div class="hello">
    <el-upload
      drag
      multiple
      action="/"
      name="files"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="uploadChange"
      ref="upload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击选择文件</em></div>
    </el-upload>
    <div style="margin:20px 0;">您一共选择了 {{ fileList.length }} 个文件</div>
    <el-button class="addUser" style="width:100px" @click="upload()"
      >上传到服务器</el-button
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      fileList: [],
      fileName: "",
      visible: false
    };
  },
  methods: {
    //uploadchange 事件
    uploadChange(file, fileList) {
      this.fileList = fileList;
    },
    //点击上传
    async upload() {
      //new formData对象
      let formData = new FormData();
      this.fileList.forEach(item => {
        //将文件添加到 formData 中
        formData.append("files", item.raw);
      });
      this.$http
        .post(`/excel/compareExcel.ll`, formData, { responseType: "blob" })
        .then(res => {
          let url = window.URL.createObjectURL(new Blob([res.data]));
          let link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.setAttribute("download", "compareExcel.xls"); //指定下载后的文件名，防跳转
          document.body.appendChild(link);
          link.click();
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
