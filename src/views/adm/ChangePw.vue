<template>
  <div class="page_changepw">
    <form class="bx_login">
      <img src="@/assets/logo.png" alt="logo">
      <h3>관리자 비밀번호 변경</h3>
      <label for="newPassword">
        <input type="password" id="newPassword" ref="pwInput" v-model="newPassword" placeholder="새로운 비밀번호를 입력하세요">
      </label>
      <label for="confirmPassword">
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="비밀번호를 다시 입력하세요">
      </label>
      <button type="button" class="btn_change" @click="changePassword">변경</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      changePwError: '' 
    }
  },
methods: {
async changePassword() {
  if (!this.newPassword.trim() || !this.confirmPassword.trim()) {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  
  if (this.newPassword !== this.confirmPassword) {
    alert("비밀번호가 일치하지 않습니다");
    return;
  }


  try {
    const authToken = localStorage.getItem('authToken');
    const response = await axios.post('/api/change-pw', {
      newPassword: this.newPassword
    }, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    if (response.data.success) {
      alert('비밀번호가 변경되었습니다.');
      this.logout();
    } else {
      alert('비밀번호 변경에 실패하였습니다.')
      this.changePwError = response.data.message;
    }
  } catch (error) {
    this.changePwError = "서버 오류가 발생했습니다";
  }
},

  async logout() {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post('/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      if (response.data.success) {
        this.$router.push('/adm/login');
      }
      localStorage.removeItem('authToken');
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  }
},
  mounted() {
    setTimeout(() => {
      this.$refs.pwInput.focus();
    }, 100);
  }
}
</script>




<style scoped>
.page_changepw .bx_login{width: 1920px !important;}
.page_changepw .bx_login > img{width: 50%; max-width: 420px;}
.page_changepw .bx_login { position: absolute; top: 0; left: 0; display: flex; flex-flow: column nowrap; align-items: center; justify-content: center; width: 100%; height: 100vh; } 
.page_changepw h3 { font-size: 34px; font-weight: 700; margin-top: 30px; } 
.page_changepw p { color: var(--MAIN, #4181a0); font-size: 16px; font-weight: 400; letter-spacing: -0.32px; margin-top: 13px; } 
.page_changepw .bx_login label { display: flex; flex-direction: column; padding: 8px 0; position: relative; } 
.page_changepw .bx_login label:nth-of-type(1) { margin-top: 50px; } 
.page_changepw .bx_login label:before { width: 120px; content: attr(title); color: var(--font1, #303133); font-size: 14px; font-weight: 400; letter-spacing: -0.28px; } 
.page_changepw .bx_login label input { width: 360px; height: 50px; font-size: 16px; margin-top: 10px; border-radius: 16px; border: 1px solid var(--MAIN, #4181a0); } 
.page_changepw .bx_login label input + img { position: absolute; right: 15px; bottom: 25px; } 
.page_changepw .btn_change { width: 360px; height: 50px; border-radius: 16px; background: var(--SUB, #20284e); color: #fff; font-size: 18px; font-weight: 700; letter-spacing: -0.28px; margin-top: 48px; } 
.page_changepw .btn_change:hover { left: 2px; top: 2px; } 
.page_changepw .btn_change:hover:after { box-shadow: 3px 3px 0 var(--point); } 
.page_changepw .btn_change:active { left: 5px; top: 5px; } 
.page_changepw .btn_change:active:after { box-shadow: none; } 
.page_changepw .btn_change + p { color: #fff; } 


</style>