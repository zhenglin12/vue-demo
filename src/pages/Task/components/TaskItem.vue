<template>
  <div class="task-item">
    <div class="task-item__title">
      <span>
        <i
          :class="{
            collected: task.favorited,
            'el-icon-star-on': task.favorited,
            'el-icon-star-off': !task.favorited,
          }"
        ></i>
        <span>项目id</span>
        <i class="el-icon-document"></i>
        <span style="margin-left: 12px;">
          <el-tag size="mini" type="info"  v-for="tag in task.components" :key="tag"> {{tag}} </el-tag>
        </span>
      </span>
      <span>
        <el-tag :type="status">{{task.status}}</el-tag>
      </span>
    </div>
    <div class="task-item__info1">
      <div class="task-item__info1__card">
        <div class="task-item__info1__card__main">
          <span>{{task.info1.bugs.remain}} / {{task.info1.bugs.total}}</span>
          <span class="task-item__info1__card__main__rank">
            <el-tag size="medium" :type="rankType">{{task.info1.bugs.rank}}</el-tag>
          </span>
        </div>
        <div class="task-iten__info1__card__sub">
          bug情况
        </div>
      </div>
      <div class="task-item__info1__card">
        <div class="task-item__info1__card__main">

          {{task.info1.newTestCases}} | {{newTestCasesRate}}
        </div>
        <div class="task-iten__info1__card__sub">
          新增测试用例
        </div>
        
      </div>
      <div class="task-item__info1__card">
        <div class="task-item__info1__card__main">
          {{task.info1.smokingFailed}}
        </div>
        <div class="task-iten__info1__card__sub">
          冒烟失败
        </div>
      </div>
      <div class="task-item__info1__card">
        <div class="task-item__info1__card__main">
          {{task.info1.regressionTestCases}} | {{regressionTestCasesRate}}
        </div>
        <div class="task-iten__info1__card__sub">
          回归测试用例
        </div>
        
      </div>
    </div>
    <div class="task-item__info2">
      <Job v-for="job in task.info2" :key="job.name" :name="job.name" :status="job.status" :type="job.type">
      </Job>
    </div>
  </div>
</template>

<script>
import Job from "./Job.vue";
export default {
  name: "TaskItem",
  components: {
    Job
  },
  props: {
    task: Object
  },
  computed: {
    status: function() {
      switch (this.task.status) {
        case "delay":
          return "danger";
        case "normal":
          return "success";
        case "finished":
          return "info";
        default:
          return "info";
      }
    },
    rankType: function() {
      switch (this.task.info1.bugs.rank) {
        case "A":
          return "success";
        case "B":
          return "warning";
        case "C":
          return "danger";
        default:
          return "info";
      }
    },
    newTestCasesRate: function() {
      return `${parseInt(this.task.info1.newTestCasesRate * 100, 10)}%`;
    },
    regressionTestCasesRate: function() {
      return `${parseInt(this.task.info1.regressionTestCasesRate * 100, 10)}%`;
    }
  }
};
</script>

<style scoped>
.task-item {
  background: #fff;
  box-shadow: 4px 4px 8px #888888;
  margin-bottom: 16px;
  padding: 12px;
}

.collected {
  color: #fff019;
}
.task-item__title {
  display: flex;
  justify-content: space-between;
}

.task-item__info1 {
  display: flex;
}
.task-item__info1__card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100px;
}
.task-item__info1__card__main {
  font-size: 30px;
  display: inline-block;
  border-bottom: 3px solid #82bad4;
  position: relative;
}
.task-item__info1__card__main__rank {
  position: absolute;
  top: 0;
  right: -30px;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
}
.task-item__info1__card__sub {
  font-size: 12px;
}
</style>
