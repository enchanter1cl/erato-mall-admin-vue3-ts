<template>
  Login
  <div>
    <el-form :model="state.ruleForm" ref="loginForms"></el-form>
    <el-button @click="submitForm">点击登录</el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login'
}
</script>


<script setup lang="ts">
import {reactive, ref} from "vue";
import md5 from 'js-md5';
import type {LoginReq} from "@/api/user/userTypeVo";
import {reqLogin} from "@/api/user";
import useUserStore from "@/store/modules/userStore";

//获取 el-form 组件
let loginForms = ref();

const state = reactive({
  ruleForm: {
    userName: 'admin',
    passwordMd5: md5('123456')
  },
  rules: {
    username: [
      { required: 'true', message: '账户不能为空', trigger: 'blur' }
    ],
    password: [
      { required: 'true', message: '密码不能为空', trigger: 'blur' }
    ]
  }
})

const userStore = useUserStore();

const submitForm = () => {
    loginForms.value.validate();
    const loginReq: LoginReq = state.ruleForm;
    userStore.userLogin(loginReq);
}

</script>