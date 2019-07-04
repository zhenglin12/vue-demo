<template>
    <div class="task">
        <el-form ref="form" :model="form">
            <el-form-item label="用户">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios";
import api from "src@/api/login";
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');

            axios.post(api.login, this.form).then((res) => {
                this.$router.push('/task');
            }).catch( error => {
                    console.log(error)
                    this.errored = true
            });
        }
    }
}
</script>