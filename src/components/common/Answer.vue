<template>
  <div class="exam-answer">
    <template v-if="examPageList && examPageList.length > 0">
      <div
          v-for="(examPageDatas,pageIndex) in examPageList"
          :key="pageIndex"
          class="sheet-page">
        <div
            class="page-title"
            :class="pageIndex % 5 === 0 ? 'page-break' : ''">
          口算答案（{{ num2Chinese(pageIndex + 1) }}）
        </div>
        <div class="page-content">
          <template v-for="(item,index) in examPageDatas">
            <div :key="index" class="page-content-item">
              <span class="item-cell">
                <CircleNumber class="item-index" :num="index + 1"/>
                <span>{{ item.answer }}</span>
              </span>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CircleNumber from './CircleNumber.vue';
import {num2Chinese} from '../../utils/numUtil';

export default {
  name: 'Answer',
  components: {
    CircleNumber,
  },
  props: {
    examPageList: {
      type: Array,
      default: null,
    },
  },
  methods: {
    num2Chinese(num) {
      return num2Chinese(num);
    },
  },
};
</script>

<style scoped>

.exam-answer {

}

.sheet-page {
  width: 210mm;
  /*height: 297 mm;*/
  /*margin-top: 20 px;*/
  margin-left: auto;
  margin-right: auto;
  /*box-shadow: 0 2 px 4 px rgba(0, 0, 0, .12), 0 0 6 px rgba(0, 0, 0, .04);*/
}

.page-title {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.page-break {
  page-break-before: always;
}

.page-subtitle {
  padding: 10px 50px 50px 10px;
  font-size: 16px;
  text-align: right;
}

.page-content {
  height: calc(100% - 160px);
  display: grid;
  grid-template-columns: repeat(10, 10%);
  /*grid-template-rows: repeat(auto-fill, 50 px);*/
  /*grid-gap: 50 px;*/
}

.page-content-item {
  font-size: 20px;
  white-space: pre-wrap;
  margin-bottom: 20px;
}

.item-cell {
  display: flex;
  align-items: center;
}

.item-index {
  margin-right: 10px;
}

</style>
