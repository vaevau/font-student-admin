<template>
  <div class="container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40" />
      <el-table-column prop="id" label="id" width="40" />
      <el-table-column prop="name" label="学生姓名" width="80" />
      <el-table-column prop="idNum" label="身份证号" width="160" />
      <el-table-column prop="photo" label="照片" width="50" />
      <el-table-column prop="gender" label="性别" width="50" />
      <el-table-column prop="schoolplace" label="学校所在乡镇" width="180" />
      <el-table-column prop="schoolname" label="学校全称" width="150" />
      <el-table-column prop="classperiod" label="学段" width="50" />
      <el-table-column prop="grade" label="年级" width="50" />
      <el-table-column prop="theclass" label="班级" width="50" />
      <el-table-column prop="risidence" label="户籍所在地" width="180" />
      <el-table-column prop="currentadress" label="居住地址" width="180" />
      <el-table-column prop="poortype" label="贫困类型" width="100" show-overflow-tooltip />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        name: '王小虎',
        idNum: '36073118812122323',
        photo: '12',
        gender: '男',
        schoolplace: '上天',
        schoolname: 'ydwz',

        address: '上海市普陀区金沙江路 1518 弄'
      }
      ],
      multipleSelection: []
    }
  },

  methods: {
    //   toggleSelection(rows) {
    //     if (rows) {
    //       rows.forEach(row => {
    //         this.$refs.multipleTable.toggleRowSelection(row);
    //       });
    //     } else {
    //       this.$refs.multipleTable.clearSelection();
    //     }
    //   },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 删除当前行确认
    handleDelete(index) {
      this.$confirm('确定删除吗', 'tip', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        this.tableData.splice(this.tableData[index], 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    }

  }
}
</script>

<style lang="scss">
.container {
  width: 96%;
  margin: 20px auto;
  background: #fff;
}

</style>
