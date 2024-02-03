<template>
  <div class="option">
    <div class="option-form">
      <el-form :model="optionModel">
        <el-form-item label="运算:">
          <el-checkbox-group v-model="optionModel.opeList">
            <el-checkbox label="+" name="type">
              加法
            </el-checkbox>
            <el-checkbox label="-" name="type">
              减法
            </el-checkbox>
            <el-checkbox label="*" name="type">
              乘法
            </el-checkbox>
            <el-checkbox label="/" name="type">
              除法
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="题型:">
          <el-radio-group v-model="optionModel.displayType">
            <el-radio :label="1">
              标准题
            </el-radio>
            <el-radio :label="2">
              填空题
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="括号:">
          <el-radio-group v-model="optionModel.bracketType">
            <el-radio :label="1">
              无括号
            </el-radio>
            <el-radio :label="2">
              有括号
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="结果为整数">
          <el-switch v-model="optionModel.isInt"></el-switch>
        </el-form-item>

        <el-form-item label="算数范围:">
          <el-input-number
              v-model="optionModel.paraMin"
              size="mini"
              label="最小值"
          />
          <span>-</span>
          <el-input-number
              v-model="optionModel.paraMax"
              size="mini"
              label="最大值"
          />
        </el-form-item>

        <el-form-item label="结果范围:">
          <el-input-number
              v-model="optionModel.resultMin"
              size="mini"
              label="最小值"
          />
          <span>-</span>
          <el-input-number
              v-model="optionModel.resultMax"
              size="mini"
              label="最大值"
          />
        </el-form-item>

        <el-form-item label="运算位数:">
          <el-input-number
              v-model="optionModel.numCount"
              :min="2"
              :max="10"
              size="mini"
              label="运算位数"
          />
        </el-form-item>

        <el-form-item label="题目数量:">
          <span>
            <span class="option-sub-label">总页数：</span>
            <el-input-number
                v-model="optionModel.pageCount"
                :min="1"
                size="mini"
                label="总页数"
            />
            <span class="option-sub-label label-page-size">每页题目数：</span>
            <el-input-number
                v-model="optionModel.pageSize"
                :min="1"
                size="mini"
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
        opeList: ['+', '-', '*', '/'], // 可选运算符
        paraMin: 0, // 参与运算的数的最小值
        paraMax: 50, // 参与运算的数的最大值
        resultMin: 0, // 计算结果的最小值
        resultMax: 50, // 计算结果的最大值
        numCount: 3, // 运算位数
        examNum: 100, // 生成题目数量
        pageCount: 5, // 总页数
        pageSize: 20, // 每页题目数量
        displayType: 1, // 题目呈现方式。1：标准题型，2：填空题型
        bracketType: 1, // 有无括号。1：无、2：有
        isInt: true,// 结果为整数
      },
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
