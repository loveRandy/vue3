<!--  -->
<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <header>
            <h1>VUE3-后台管理系统</h1>
          </header>
          <a-form :model="form" @finishFailed="handleSubmit">
            <a-form-item>
              <a-input
                v-model:value="form.username"
                size="large"
                placeholder="Username"
              >
                <template v-slot:prefix><user-outlined type="user" /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                size="large"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix><lock-outlined type="user" /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" size="large" @click="handleSubmit" block>
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
import {useRouter} from 'vue-router'
import { doLogin } from '@/api'
export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const state = reactive({
      form: {
        username: '',
        password: '',
      },
    })
    const router = useRouter()

    const handleSubmit = async () => {
      const { username, password } = state.form
      if (username.trim() == '' || password.trim() == '') {
        return message.warning('用户名和密码不能为空')
      }
      const res = await doLogin({
        username,
        password,
      })
      if (res.code === 1) {
        localStorage.setItem('token', res.data.token)
        router.push({ path: '/' })
      }
    }

    /* 返回 */
    return {
      ...toRefs(state),
      handleSubmit,
    }
  },
})
</script>
<style lang='less' scoped>
.login-container {
  height: 100vh;
  background: url('~@/assets/images/login/login_bg1.jpg');
  background-size: cover;
  &-form {
    width: calc(100% - 40px);
    height: 380px;
    padding: 8vh;
    margin-top: calc((100vh - 380px) / 2);
    margin-right: 20px;
    margin-left: 20px;
    background: url('~@/assets/images/login/login_form.png');
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    background-color: #fff;

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        display: inline-block;
        width: 40px;
      }

      h1 {
        margin-bottom: 0;
        font-size: 24px;
        color: #222;
        text-align: center;
      }
    }

    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
    }
  }
}
</style>