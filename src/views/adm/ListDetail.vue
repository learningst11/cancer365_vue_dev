<template>
  <div>
    <h1>신청 리스트 상세 조회</h1>
    <table>
      <colgroup>
        <col width="20%">
        <col width="80%">
      </colgroup>
      <tr>
        <th>회차</th>
        <td>{{ detail.round }}</td>
      </tr>
      <tr>
        <th>성함</th>
        <td>{{ detail.name }}</td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td>{{ detail.phone }}</td>
      </tr>
      <tr>
        <th>병원명</th>
        <td>{{ detail.hospital }}</td>
      </tr>
      <tr>
        <th>부서/직함</th>
        <td>{{ detail.position }}</td>
      </tr>
      <tr>
        <th>초청자</th>
        <td>{{ detail.inviter }}</td>
      </tr>
      <tr>
        <th>병원소재지</th>
        <td>{{ detail.address1 }} {{ detail.address2 }}</td>
      </tr>
      <tr>
        <th>관심주제</th>
        <td>{{ detail.topics ? detail.topics.split(',').join(', ') : '' }}</td>

      </tr>
      <tr>
        <th>동의</th>
        <td>{{ detail.terms }}</td>
      </tr>
    </table>

    <div class="wrap_button">
      <button type="button" @click="goToList();">목록으로</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      detail: {} 
    };
  },
  methods: {
    goToList() {
      this.$router.push('/adm/list');
    },
    async fetchDetail() {
      const id = this.$route.query.id; 
      console.log(id);
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get(`/api/list_detail?id=${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        this.detail = response.data.data; 
        console.log(response.data.data);
      } catch (error) {
        console.error('상세 정보를 불러오는 중 에러 발생:', error);
      }
    }

  },
created() {
  console.log('created 훅이 실행되었습니다.');
  this.fetchDetail(); 
}
}
</script>

<style scoped>


h1{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background-color: #092751;
    color: #fff;
    padding: 0 50px;
}

table{
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
}
table th{
  border-right: 1px solid #E4E7ED;
}

.wrap_button{
  width: 1200px;
  margin: 0 auto;
}

button{
  padding: 0 20px;
  height: 45px;
  font-size: 16px;
  color: #fff;
  background-color: #092751;
  margin-left: auto;
  display: block;
  margin-top: 50px;
  border-radius: 20px;
}


</style>