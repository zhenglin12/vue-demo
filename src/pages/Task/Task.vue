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
    <TaskItem v-if="tasks.length > 0" v-for="(task, index) in tasks" :key="index" :task="task"/>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";
import axios from "axios";
import api from "src@/api/task";

export default {
  name: "Task",
  components: {
    TaskItem
  },
  data() {
    return {
      rangeType: true,
      tasks: []
    };
  },
  mounted: function() {
    axios.get(api.getTasks).then(content => {
      console.log(content);
      this.tasks = content;
    });
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
