import BaseLayout from "./BaseLayout.vue";
import Task from "./pages/Task/Task.vue";

const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: BaseLayout,
    children: [
      {
        path: "task",
        name: "Task",
        component: Task
      },
      {
        path: "",
        component: Task
      }
    ]
  }
];

export default routes;
