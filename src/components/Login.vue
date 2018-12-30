<template>
  <div class="info">
    <div>
    </div>
    <!-- ref表示组件名称，用于直接操作DOM -->
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="container">
     <div class="userInfo">
      <el-form-item prop="username">
        <el-input prefix-icon="myicon myicon-user" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="myicon myicon-key" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="btn">登录</el-button>
      </el-form-item>
     </div>
    </el-form>
  </div>
</template>
<script>
import { login } from '../api/api.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 调用接口之前做表单验证
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          //  表单验证通过
          let params = {
            username: this.form.username,
            password: this.form.password
          }
          // 调用登录接口, 提交与用户登录信息
          login(params).then(res => {
            console.log(res)
            if (res.meta.status === 400) {
              // 存储token
              localStorage.setItem('mytoken', res.meta.status)
              // 跳转到主页
              this.$router.push({name: 'home'})
            } else {
              // 登录失败，提示
              this.$message({
                message: res.meta.msg,
                type: 'error'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  width: 400px;
  margin: 100px auto;
}
.btn{
  width: 100%;
}
.userInfo{
    position: absolute;
    text-align: center;
    width: 400px;
    margin-left: -40px;
}
 .container {
    box-sizing: border-box;
    margin: 180px auto 0;
    width: 500px;
    height: 340px;
    background-color: #fff;
    position: relative;
  }
.info .el-form-item__content{
  margin-left: 0!important;
}
</style>
