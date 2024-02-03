<template>
  <div class="home">
    <div class="exam">
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
      <Preview ref="examPreview"/>
    </div>
  </div>
</template>

<script>
import Option from "../common/Option.vue";
import Preview from "../common/Preview.vue";

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
@media print {
  .print_hide {
    display: none;
  }
}

.home {

}

.option {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>
