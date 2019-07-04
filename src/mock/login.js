import Mock from "mockjs";
import api from "../api";

const Random = Mock.Random;

Mock.mock(api.login.login, "post", {
    code: 201,
    message: "密码错误",
    content: {}
});
