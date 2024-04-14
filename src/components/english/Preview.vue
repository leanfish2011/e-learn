<template>
  <div class="exam-preview">
    <div>
      <template v-if="examPageList && examPageList.length > 0">
        <div
            v-for="(examPageDatas,pageIndex) in examPageList"
            :key="pageIndex"
            class="sheet-page">
          <div class="page-title">
            单词题（{{ num2Chinese(pageIndex + 1) }}）
          </div>
          <div class="page-subtitle">
            姓名：________________&nbsp;&nbsp;&nbsp;&nbsp;
            日期：________________&nbsp;&nbsp;&nbsp;&nbsp;
            得分：________&nbsp;&nbsp;&nbsp;&nbsp;
            用时：________
          </div>
          <div class="page-content">
            <template v-for="(item,index) in examPageDatas">
              <div :key="index" class="page-content-item">
                <span class="item-cell">
                  <CircleNumber class="item-index" :num="index + 1"/>
                  <span v-html="item.display"></span>
                </span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    <Answer :exam-page-list="examPageList"/>
  </div>
</template>

<script>
import {startExamBatch} from "./english";
import {num2Chinese} from '../../utils/numUtil';
import CircleNumber from '../common/CircleNumber.vue';
import Answer from '../common/Answer.vue';

export default {
  name: 'Preview',
  components: {
    CircleNumber,
    Answer,
  },
  data() {
    return {
      examList: [],// 生成的题列表
      pageSize: 30, // 每页题目数量
    };
  },
  computed: {
    // 页数
    pageNum() {
      return Math.ceil(this.examList.length / this.pageSize);
    },
    // 分页后的数据
    examPageList() {
      if (this.pageNum > 0) {
        return [...(new Array(this.pageNum)).keys()].map((pageIndex) => {
          const startIdx = pageIndex * this.pageSize;
          const endIdx = (pageIndex + 1) * this.pageSize;
          return this.examList.slice(startIdx, endIdx);
        });
      }
      return [];
    },
  },
  methods: {
    // 生成题目
    examGenerator(params) {
      this.pageSize = params.pageSize;

      const examList = startExamBatch(params);
      this.examList = examList.map(item => ({
        display: item.exp,
        answer: item.result,
      }));
    },
    num2Chinese(num) {
      return num2Chinese(num);
    },
  },
};
</script>

<style scoped>

@media print {
  .sheet-page {
    width: 210mm;
    height: 280mm;
    box-shadow: none;
  }
}

.exam-preview {
}

.sheet-page {
  width: 210mm;
  height: 280mm;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
}

.page-title {
  padding: 5px;
  font-size: 16px;
  text-align: center;
  page-break-before: always;
}

.page-subtitle {
  padding: 10px 50px 30px 10px;
  font-size: 14px;
  text-align: center;
}

.page-content {
  height: calc(100% - 160px);
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  /*grid-gap: 50px;*/
}

.page-content-item {
  font-size: 12px;
  //white-space: pre-wrap;
  margin-right: 10px;
}

.item-cell {
  display: flex;
  align-items: center;
}

.item-index {
  margin-right: 10px;
}

</style>
