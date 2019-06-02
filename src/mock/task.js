import Mock from "mockjs";
import api from "../api";

const Random = Mock.Random;

Mock.mock(api.task.getTasks, "get", {
  code: 200,
  message: "sql cuowu",
  content: {
    "currentPage|+1": 1,
    total: 232,
    list: [
      {
        id: "id001",
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
        id: "id002",
        favorited: false,
        status: "normal",
        components: ["标签1", "标签2", "标签3", "标签4"],
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
        id: "id003",
        favorited: false,
        status: "finished",
        components: ["标签1", "标签2", "标签3", "标签4"],
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
  }
});
