import BaseLayout from "./BaseLayout.vue";
import Task from "./pages/Task/Task.vue";
import Login from './pages/Login/Login.vue';

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
      }
        ,
        {
            path: "login",
            name: "Login",
            component: Login,
        },
      {
        path: "",
        component: Task
      }
    ]
  }
];

export default routes;
