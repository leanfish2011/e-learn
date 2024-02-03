<template>
  <el-container>
    <el-aside width="800px">
      <Preview ref="examPreview"/>
    </el-aside>
    <el-main>
      <div class="print_hide">
        <div class="option">
          <Option ref="option"/>
        </div>
        <div class="buttons">
          <el-button type="primary" plain @click="handleExamGenerator">
            生成
          </el-button>
          <el-button @click="handlePrint">
            打印
          </el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Option from "./Option.vue";
import Preview from "./Preview.vue";

export default {
  name: "Home",
  components: {
    Option,
    Preview
  },
  data() {
    return {
      examList: [],
    };
  },
  computed: {
    pageNum() {
      return Math.floor(this.examList.length / 30) - 1;
    },
  },
  methods: {
    handleExamGenerator() {
      const params = this.$refs.option.getOption();
      params.batchNum = parseInt(params.pageCount * params.pageSize, 10);
      console.log('参数：', params);
      this.$refs.examPreview.examGenerator(params);
    },
    handlePrint() {
      window.print();
    },
  }
}
</script>

<style scoped>
.home {

}

.option {
  /*width: 500px;*/
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>
