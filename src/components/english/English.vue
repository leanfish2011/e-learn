<template>
  <div class="math">
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
import Option from "./Option.vue";
import Preview from "./Preview.vue";

export default {
  name: "English",
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
      params.examNum = parseInt(params.pageCount * params.pageSize, 10);
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
.math {
  width: 100%;
  margin-top: 60px;
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
