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
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task"/>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";
export default {
  name: "Task",
  components: {
    TaskItem
  },
  data() {
    return {
      rangeType: true,
      tasks: [
        {
          isCollected: true,
          status: "delay",
          info0: ["标签1", "标签2", "标签3", "标签4"],
          info1: {
            bugs: {
              total: 10,
              remain: 5,
              rank: "B"
            },
            newTestCases: 20,
            newTestCasesRate: 0.53,
            smokingFailed: 10,
            regressionTestCases: 10,
            regressionTestCasesRate: 1
          },
          info2: [
            {
              type: "deploy", // 'deploy', 'benchmark', 'qatest', 'smokingtest',
              name: "job1",
              status: "pass" // 'pass', 'failed', 'unstable', 'running'
            },
            {
              type: "benchmark", // 'deploy', 'benchmark', 'qatest', 'smokingtest',
              name: "job2",
              status: "failed"
            },
            {
              type: "qatest", // 'deploy', 'benchmark', 'qatest', 'smokingtest',
              name: "job3",
              status: "unstable"
            },
            {
              type: "smokingtest", // 'deploy', 'benchmark', 'qatest', 'smokingtest',
              name: "job4",
              status: "running"
            }
          ]
        },
        {
          isCollected: false,
          status: "normal",
          info0: ["标签1", "标签2", "标签3", "标签4"],
          info1: {
            bugs: {
              total: 10,
              remain: 1,
              rank: "A"
            },
            newTestCases: 20,
            newTestCasesRate: 0.53,
            smokingFailed: 10,
            regressionTestCases: 10,
            regressionTestCasesRate: 1
          }
        },
        {
          isCollected: false,
          status: "finished",
          info0: ["标签1", "标签2", "标签3", "标签4"],
          info1: {
            bugs: {
              total: 10,
              remain: 5,
              rank: "C"
            },
            newTestCases: 20,
            newTestCasesRate: 0.53,
            smokingFailed: 10,
            regressionTestCases: 10,
            regressionTestCasesRate: 1
          }
        }
      ]
    };
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
