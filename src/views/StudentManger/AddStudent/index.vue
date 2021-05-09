<template>
  <div class="add-container">
    <div class="title">
      <h3>家庭经济困难学生基本信息档案</h3>
    </div>
    <form action="">
      <div class="basic-info">
        <h4 class="">学生基本信息</h4>
        <div class="main-info">
          <div>
            <strong>学生姓名:</strong> <input id="" type="text" name="name">
          </div>
          <div class="ident-num">
            <strong>身份证号:</strong> <input id="" type="text" name="name">
          </div>
          <div class="upload">
            <strong class="limit-tip">只能上传小于3M</strong>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div>
            <strong>健康状况：</strong>
            <el-select v-model="healthyData" placeholder="请选择" size="small">
              <el-option
                v-for="item in healthy"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <strong>性别:</strong>
            <el-select v-model="genderData" placeholder="请选择">
              <el-option
                v-for="item in gender"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <strong>民族：</strong>
            <el-select v-model="nationData" placeholder="请选择">
              <el-option
                v-for="item in nation"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="is-boarding radio-box">
            <strong>是否寄宿：</strong>
            <el-radio v-model="radio_1" label="1">是</el-radio>
            <el-radio v-model="radio_1" label="2">否</el-radio>
          </div>
        </div>
      </div>
      <div class="to-school-info">
        <h4 class="">就学信息</h4>
        <div class="main-info">
          <div>
            <strong>学校所在乡镇:</strong>
            <el-select
              v-model="townsData"
              filterable
              placeholder="请选择/可搜索以快捷查找"
            >
              <el-option
                v-for="item in towns"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <strong> 学校全称:</strong>

            <el-select v-model="shcNameData" placeholder="请选择">
              <el-option
                v-for="item in schoolName"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="radio-box">
            <strong>是否普惠性幼儿园:</strong>
            <el-radio v-model="radio_2" label="1">是</el-radio>
            <el-radio v-model="radio_2" label="2">否</el-radio>
          </div>
          <div>
            <strong>学段:</strong>
            <el-select v-model="classPeriodData" placeholder="请选择">
              <el-option
                v-for="item in classPeriod"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <strong>年级:</strong>
            <el-select v-model="gradeData" placeholder="请选择">
              <el-option
                v-for="item in grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <strong>班级:</strong>
            <el-select v-model="theClassData" placeholder="请选择">
              <el-option
                v-for="item in theClass"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="margin-top: 26px">
            <strong>学籍号:</strong> <input id="" type="text" name="name">
          </div>
          <div style="margin-top: 26px">
            <strong> 专业名称:</strong> <input id="" type="text" name="name">
          </div>
          <div class="radio-box">
            <strong>是否涉农专业:</strong>
            <el-radio v-model="radio_3" label="1">是</el-radio>
            <el-radio v-model="radio_3" label="2">否</el-radio>
          </div>
          <div>
            <strong>入本校时间:</strong>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="gaokao-info">
        <h4>高考信息</h4>
        <div class="main-info">
          <div>
            <strong>考生号:</strong> <input id="" type="text" name="name">
          </div>
          <div style="margin-top: 22px">
            <strong>报考点学校:</strong> <input id="" type="text" name="name">
          </div>
          <div class="radio-box">
            <strong>考生类别: </strong>

            <el-radio v-model="radio_4" label="1">应届</el-radio>
            <el-radio v-model="radio_4" label="2">往届</el-radio>
          </div>
        </div>
      </div>
      <div class="home-adress">
        <h4>户籍地址</h4>
        <div class="main-info">
          <div>
            <strong>户籍地址:</strong> <input id="" type="text" name="name">
          </div>
          <div>
            <strong>户籍性质:</strong>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="now-adress">
        <h4>现住地址</h4>
        <div class="main-info">
          <strong>现居地址:</strong>
          <div class="current-adress">
            <a-select
              :default-value="provinceData[0]"
              style="margin-left:14px"
              @change="handleProvinceChange"
            >
              <a-select-option v-for="province in provinceData" :key="province">
                {{ province }}
              </a-select-option>
            </a-select>
            <a-select v-model="secondCity" style="margin-left: 14px">
              <a-select-option v-for="city in cities" :key="city">
                {{ city }}
              </a-select-option>
            </a-select>

          </div>
          <div style="margin-left: 124px; margin-top:-30px;">
            <input
              id=""
              type="text"
              name=""
              placeholder="请填写详细地址"
              style="width: 300px"
            >
          </div>
        </div>
      </div>
      <div class="family-info">
        <h4>家庭成员信息</h4>
        <div class="main-info">
          <strong>家庭成员信息:</strong>
          <div class="table-container">
            <table border="1" class="table">
              <tbody>
                <tr>
                  <th style="width:80px">编号</th>
                  <th style="width:80px">姓名</th>
                  <th style="width:86px">与学生关系</th>
                  <th style="width:80px">年龄</th>
                  <th style="width:124px">身份证号码</th>
                  <th style="width:150px">工作获学习单位	</th>
                  <th style="width:110px">年收入</th>
                  <th style="width:176px">健康状况</th>
                  <th style="width:110px">联系电话</th>
                  <th style="width:66px">操作</th>
                </tr>
              </tbody>
            </table>
          </div>
          <el-form
            ref="dynamicValidateForm"
            :model="dynamicValidateForm"
            class="demo-dynamic"
          >
            <el-form-item v-for="(domain, index) in dynamicValidateForm.domains">
              <input style="width:80px"> </input>
              <input style="width:80px"> </input>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <input style="width:80px"></input>
              <input style="width:124px"></input>
              <input style="width:150px"></input>
              <input style="width:110px"><input>
              <input style="width:110px"></input>
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>

            <el-button style="position:relative; left: 130px" @click="addDomain">新增</el-button>
          </el-form>

        </div>
      </div>
      <div class="poor-type">
        <h4>家庭贫困类别及具体描述</h4>
        <div class="main-info">
          <div style="margin-left: 32px">
            家庭贫困类别:<el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="upload-file">
        <h4>附件资料上传</h4>
        <div class="main-info">
          <div class="upload">
            <strong>学生户口薄:</strong>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div class="upload">
            <strong>监护人户口薄:</strong>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div class="upload">
            <strong>贫困佐证:</strong>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <div class="upload">
            <strong>资金入账社保卡:</strong>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
        </div>
      </div>

      <div class="feature-btn">
        <a-button type="primary">确定 </a-button>
        <a-button type="danger"> 重置</a-button>
      </div>
    </form>
  </div>
</template>

<script>
const provinceData = [
  '于都县',
  '市外',
  '章贡区',
  '芙蓉新区',
  '黄金开发区',
  '赣县区',
  '南康区',
  '瑞金市',
  '上犹县',
  '石城县',
  '宁都县',
  '兴国县'
]
const cityData = {
  于都县: ['葛坳乡', '银坑', '马鞍'],
  章贡区: ['文青路', '华润万象城', '云上国际']
}
export default {
  data() {
    return {
      // 下拉框联动
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      // 单选框数据
      radio_1: '1',
      radio_2: '1',
      radio_3: '1',
      radio_4: '1',

      // 下拉框数据
      healthy: [
        {
          value: '选项1',
          label: '健康'
        },
        {
          value: '选项2',
          label: '一般'
        },
        {
          value: '选项3',
          label: '较差'
        }
      ],
      healthyData: '',

      gender: [
        {
          value: '选项1',
          label: '不详'
        },
        {
          value: '选项2',
          label: '男'
        },
        {
          value: '选项3',
          label: '女'
        }
      ],
      genderData: '',

      nation: [
        {
          value: '选项1',
          label: '汉族'
        },
        {
          value: '选项2',
          label: '畲族'
        },
        {
          value: '选项3',
          label: '彝族'
        },
        {
          value: '选项4',
          label: '高三族'
        },
        {
          value: '选项5',
          label: '瑶族'
        }
      ],
      nationData: '',

      towns: [
        {
          value: '选项1',
          label: '三坊头'
        },
        {
          value: '选项2',
          label: '三溪村'
        },
        {
          value: '选项3',
          label: '三贯村'
        },
        {
          value: '选项4',
          label: '三门村'
        },
        {
          value: '选项5',
          label: '上下村'
        },
        {
          value: '选项6',
          label: '上关村'
        },
        {
          value: '选项7',
          label: '上下村'
        },
        {
          value: '选项8',
          label: '上坪村'
        },
        {
          value: '选项9',
          label: '上垅村'
        },
        {
          value: '选项10',
          label: '上堡畲族村'
        },
        {
          value: '选项11',
          label: '上塘村'
        },
        {
          value: '选项12',
          label: '上下村'
        }
      ],
      townsData: '',

      schoolName: [
        {
          value: '选项1',
          label: '于都县教育局'
        }
      ],
      shcNameData: '',

      classPeriod: [
        {
          value: '选项1',
          label: '学前'
        },
        {
          value: '选项2',
          label: '小学'
        },
        {
          value: '选项3',
          label: '初中'
        },
        {
          value: '选项4',
          label: '中职'
        },
        {
          value: '选项5',
          label: '高中'
        },
        {
          value: '选项6',
          label: '大学'
        }
      ],
      classPeriodData: '',

      grade: [
        {
          value: '选项1',
          label: '一年级'
        },
        {
          value: '选项2',
          label: '二年级'
        },
        {
          value: '选项3',
          label: '三年级'
        },
        {
          value: '选项4',
          label: '四年级'
        },
        {
          value: '选项5',
          label: '五年级'
        },
        {
          value: '选项6',
          label: '六年级'
        }
      ],
      gradeData: '',

      theClass: [
        {
          value: '选项1',
          label: '1'
        },
        {
          value: '选项2',
          label: '2'
        },
        {
          value: '选项3',
          label: '3'
        },
        {
          value: '选项4',
          label: '4'
        },
        {
          value: '选项5',
          label: '5'
        },
        {
          value: '选项6',
          label: '6'
        },
        {
          value: '选项7',
          label: '7'
        },
        {
          value: '选项8',
          label: '8'
        },
        {
          value: '选项9',
          label: '9'
        },
        {
          value: '选项10',
          label: '10'
        },
        {
          value: '选项11',
          label: '11'
        },
        {
          value: '选项12',
          label: '12'
        }
      ],
      theClassData: '',

      dynamicValidateForm: {
        domains: [
          {
            value: ''
          }
        ],
        email: ''
      }
    }
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },

    handleProvinceChange(value) {
      this.cities = cityData[value]
      this.secondCity = cityData[value][0]
    }
  }
}
</script>

<style lang="scss" scoped>
.add-container {
  width: 96%;
  margin: 10px auto;
  font-size: 14px;
  .title {
    text-align: center;
    h3 {
      font-weight: 300;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 24px;
    }
  }
  .ident-num {
    padding-top: 6px;
  }
  .current-adress {
    display: flex;
    justify-content: flex-start;
    margin-left: 120px;
    position: relative;
    top: -46px;
    .ant-select {
      width: 120px;
    }
    .ant-select-selection {
      width: 120px;
      border-radius: 0;
      margin: 0;
    }
  }

  h4 {
    height: 30px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    margin-top: 30px;
    border-bottom: 3px solid #000;
  }
  .main-info {
    width: 100%;
    margin: 20px auto;

    & div {
      margin-top: 10px;
    }
    .ant-select-selection-selected-value {
      margin-top: -10px;
    }
    input {
      height: 32px;
      width: 200px;
      margin-left: 10px;
      border: 1px solid #ccc;
    }
    strong {
      width: 120px;
      display: inline-block;
      text-align: right;
      font-weight: 400;
    }
  }

  .radio-box {
    padding-top: 20px;

    span {
      margin-left: 6px;
    }
  }
  .family-info {
     .table-container {
    width: 100%;

    table {
      border: 1px solid #e6e6e6;
      color: #666;
      th {
        text-align: center;
      }
    }
    table:hover {
      background: rgb(241, 240, 240);
    }
  }
    .el-form-item__content {
      // border: 1px solid red;
      // display: flex;
      // justify-content: flex-start;
      // // margin-left: 130px;

      input {

      }
      .el-button {
        height: 32px;
        line-height: 8px;
        border-radius: 0;
        outline: none;
      }
      .el-input {
        margin-top: -14px;
      }
      .el-input__inner {
        width: 80px !important;
      }
    }
  }

  .el-input__inner {
    width: 600px !important;
    border-radius: 0;
  }
  .upload {
    .limit-tip {
      position: relative;
      top: 32px;
    }
    strong {
      position: relative;
      top: 30px;
    }
    .el-upload {
      margin: -120px 0 0 132px;
    }
    .el-upload-list__item {
      width: 280px;
      height: 100px;
      margin-left: 130px;
    }
  }

  .feature-btn {
    text-align: center;
    margin-top: 30px;
    padding-bottom: 30px;
    button {
        margin-left: 40px;
    }
  }
}
</style>
