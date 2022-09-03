<template>
  <div class="login-container">
    <div class="login-bg" />
    <div class="login-form">
      <h2>Vite+Vue3</h2>
      <el-form ref="formRef" :rules="rules" :model="form">
        <el-form-item prop="userName">
          <el-input
            v-model="form.userName"
            :suffix-icon="User"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="submit-btn"
            type="primary"
            @click="handleSubmit(formRef)"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { User, Hide } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { uesSystemStore } from '@/store/system.js'

//
const loading = ref(false)
// Form 登陆表单
const form = reactive({
  userName: '',
  password: '',
})
//
const formRef = ref()
// 表单校验
const rules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
}
// store
const systemStore = uesSystemStore()
// 提交
const handleSubmit = async (form) => {
  if (!form) {
    return
  }
  loading.value = true
  const params = {
    ...form.value,
  }
  try {
    // 校验form
    await form.validate()
    // 登录接口调用
    // await this.$http.get(params)

    await systemStore.login(params)
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>
<style lang="less" scoped>
  .login-container {
    background: #303133;
    height: 100%;
    .login-form {
      position: absolute;
      right: 300px;
      top: 50%;
      width: 520px;
      height: 450px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      transform: translate(0, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      h2 {
        margin-bottom: 40px;
        color: #fff;
        font-size: 48px;
      }
      /deep/ .el-form {
        width: 360px;
        .el-form-item__content {
          justify-content: center;

          .el-input {
            --el-input-height: 48px;
            .el-input__wrapper {
              background: rgba(255, 255, 255, 0.1);
              .el-input__inner {
                color: #fff;
                font-size: 20px;
              }
            }
          }
          .el-button.submit-btn {
            margin-top: 15px;
            width: 130px;
            height: 40px;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
