<template>
  <div class="page_login">
    <form class="bx_login" @submit.prevent="login"> 
      <img src="@/assets/logo.png" alt="logo">
      <h3>관리자 로그인</h3>
      <label>
        <input type="text" v-model="id" ref="idInput" class="input_id" placeholder="ID">
      </label>
      <label>
        <input type="password" v-model="password" placeholder="PW">
      </label>
    <button type="submit" class="btn_login">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          id: this.id,
          password: this.password,
        });

        if (response.data.success) {
          localStorage.setItem('authToken', response.data.token);
          this.$router.push({ path: '/adm/list' });
        } else {
          this.loginError = '로그인 실패: 잘못된 ID 또는 비밀번호';
          alert(this.loginError);
        }
      } catch (error) {
        this.loginError = '로그인 중 문제가 발생했습니다.';
      }
    },
  },
  async mounted() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      try {
        const response = await axios.get('/api/check-auth', {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Cache-Control': 'no-cache'
          }
        });
        if (!response.data.isAuthenticated) {
          localStorage.removeItem('authToken'); 
          this.$refs.idInput.focus();
        } else {
          this.$router.push('/adm/list');
        }
      } catch (error) {
        console.error('인증 상태 확인 중 오류 발생:', error);
        localStorage.removeItem('authToken'); 
        this.$refs.idInput.focus();
      }
    } else {
      this.$refs.idInput.focus();
    }
  }
};
</script>



<style scoped>
.page_login .bx_login{width: 1920px !important;}
.page_login .bx_login > img{width: 50%; max-width: 420px;}
.page_login .bx_login { position: absolute; top: 0; left: 0; display: flex; flex-flow: column nowrap; align-items: center; justify-content: center; width: 100%; height: 100vh; } 
.page_login h3 { font-size: 34px; font-weight: 700; margin-top: 30px; } 
.page_login p { color: var(--MAIN, #4181a0); font-size: 16px; font-weight: 400; letter-spacing: -0.32px; margin-top: 13px; } 
.page_login .bx_login label { display: flex; flex-direction: column; padding: 8px 0; position: relative; } 
.page_login .bx_login label:nth-of-type(1) { margin-top: 50px; } 
.page_login .bx_login label:before { width: 120px; content: attr(title); color: var(--font1, #303133); font-size: 14px; font-weight: 400; letter-spacing: -0.28px; } 
.page_login .bx_login label input { width: 360px; height: 50px; font-size: 16px; margin-top: 10px; border-radius: 16px; border: 1px solid var(--MAIN, #4181a0); } 
.page_login .bx_login label input + img { position: absolute; right: 15px; bottom: 25px; } 
.page_login .btn_login { width: 360px; height: 50px; border-radius: 16px; background: var(--SUB, #20284e); color: #fff; font-size: 18px; font-weight: 700; letter-spacing: -0.28px; margin-top: 48px; } 
.page_login .btn_login:hover { left: 2px; top: 2px; } 
.page_login .btn_login:hover:after { box-shadow: 3px 3px 0 var(--point); } 
.page_login .btn_login:active { left: 5px; top: 5px; } 
.page_login .btn_login:active:after { box-shadow: none; } 
.page_login .btn_login + p { color: #fff; } 


</style>