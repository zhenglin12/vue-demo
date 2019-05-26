<template>
  <div class="task-job">
    <i :class="iconName"></i>
    <span>{{name}}</span>
    <el-tag size="mini" :type="statusType">{{status}}</el-tag>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    type: String,
    name: String,
    status: String
  },
  computed: {
    iconName: function() {
      console.log(this.type);
      return (
        {
          deploy: "el-icon-cloudy",
          benchmark: "el-icon-data-line",
          qatest: "el-icon-takeaway-box",
          smokingtest: "el-icon-smoking"
        }[this.type] || "el-icon-cloudy"
      );
    },
    statusType: function() {
      return (
        {
          pass: "success",
          failed: "danger",
          running: "",
          unstable: "warning"
        }[this.status] || ""
      );
    }
  }
};
</script>

<style scoped>
.task-job {
  display: inline-flex;
  font-size: 24px;
  width: 250px;
  justify-content: center;
  align-items: center;
  /* margin-right: 12px; */
}
</style>
