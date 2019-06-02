<template>
  <div class="task">
    <div class="task-head">
      <el-switch
        v-model="rangeType"
        active-text="所有任务"
        inactive-text="我的任务">
      </el-switch>
      <el-button size="small" type="primary">导出报告</el-button>
    </div>
    <TaskItem v-if="tasks.length > 0" v-for="(task) in tasks" :key="task.id" :task="task"/>
    <el-pagination
      style="text-align: center"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";
import axios from "axios";
import api from "src@/api/task";
import { constants } from "fs";

export default {
  name: "Task",
  components: {
    TaskItem
  },
  data() {
    return {
      pageSize: 10,
      rangeType: true,
      tasks: [],
      currentPage: 1,
      total: 1
    };
  },
  mounted: function() {
    this.getTasks({ currentPage: 1 });
  },
  methods: {
    getTasks: function(params) {
      const pageSize = this.pageSize;
      axios.get(api.getTasks, { pageSize, ...params }).then(content => {
        this.tasks = content.list;
        this.currentPage = content.currentPage;
        this.total = content.total;
      });
    },
    handleCurrentChange: function(currentPage) {
      this.getTasks({ currentPage });
    }
  }
};
</script>
<style scoped>
.task-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
</style>
