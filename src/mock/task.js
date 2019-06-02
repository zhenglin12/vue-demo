import Mock from "mockjs";
import api from "../api";

Mock.mock(api.task.getTasks, "get", {
  code: 200,
  message: "sql cuowu",
  content: [
    {
      favorited: true,
      status: "delay",
      components: ["标签1", "标签2", "标签3", "标签4"],
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
      favorited: false,
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
      favorited: false,
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
});
