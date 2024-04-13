<template>
  <div class="option">
    <div class="option-form">
      <el-form :model="optionModel" size="mini">


        <el-form-item label="年级：">
          <el-select v-model="optionModel.grade" placeholder="请选择年级">
            <label v-for="item in allGrades">
              <el-option :label=item.label :value=item.value></el-option>
            </label>
          </el-select>
        </el-form-item>

        <el-form-item label="单元：">
          <el-select v-model="optionModel.unit" placeholder="请选择单元">
            <label v-for="item in allUnits">
              <el-option :label=item.label :value=item.value></el-option>
            </label>
          </el-select>
        </el-form-item>

        <el-form-item label="题目数量:">
          <span>
            <span class="option-sub-label">总页数：</span>
            <el-input-number
                v-model="optionModel.pageCount"
                :min="1"
                label="总页数"
            />
            <span class="option-sub-label label-page-size">每页题目数：</span>
            <el-input-number
                v-model="optionModel.pageSize"
                :min="1"
                label="每页条数"
            />
          </span>
        </el-form-item>
      </el-form>
    </div>
    <div class="option-declare"/>
  </div>
</template>

<script>
export default {
  name: 'Option',
  data() {
    return {
      optionModel: {
        grade: "7-0",//年级，0:上，1:下
        unit: "1",//单元
        examNum: 100, // 生成题目数量
        pageCount: 5, // 总页数
        pageSize: 20, // 每页题目数量
      },
      allGrades: [
        {"label": "七年级-上册", "value": "7-0"},
        {"label": "七年级-下册", "value": "7-1"},
      ],
      allUnits: [
        {"label": "Unit 1", "value": "1"},
        {"label": "Unit 2", "value": "2"},
        {"label": "Unit 3", "value": "3"},
        {"label": "Unit 4", "value": "4"},
        {"label": "Unit 5", "value": "5"},
        {"label": "Unit 6", "value": "6"},
        {"label": "Unit 7", "value": "7"},
        {"label": "Unit 8", "value": "8"},
        {"label": "Unit 9", "value": "9"},
        {"label": "Unit 9", "value": "10"},
      ],
    };
  },
  methods: {
    getOption() {
      return this.optionModel;
    },
  },
};
</script>

<style scoped>
.option {
  width: 100%;
  /*display: flex;*/
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.option-form {
  width: 100%;
  margin-left: 20px;
}

.option-sub-label {
  font-size: 12px;
  color: #606266;
}

.label-page-size {
  padding-left: 10px;
}

.option-declare {
  width: 100%;
}

/deep/ .el-form-item {
  margin-bottom: 0;
}
</style>
