<template>
  <div class="wrap">
    <h1><i></i> <span>신청 리스트 조회</span><button type="button" @click="$router.push('/adm/change_pw');">관리자 비밀번호 변경</button><button type="button" @click="logout">로그아웃</button></h1>
    <div class="wrap_table">

      <table>
        <colgroup>
              <col width="10%">
              <col width="30%">
              <col width="15%">
              <col width="15%">
              <col width="15%">
              <col width="15%">
        </colgroup>
        <tr>
          <th>번호</th>
          <th>회차</th> 
          <th>이름</th>
          <th>연락처</th>
          <th>병원명</th>
          <th>직급</th>
        </tr>
  <tr v-for="(item, index) in lists" :key="item.id" @click="goToDetail(item.id)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.round }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.hospital }}</td>
          <td>{{ item.position }}</td>
        </tr>
      </table>

    </div>

  <div class="pagination">
      <button @click="fetchListData(1)" :disabled="currentPage === 1">처음</button>
      <button @click="fetchListData(currentPage - 1)" :disabled="currentPage === 1">◀</button>
      
      <!-- <span v-for="n in totalPages" :key="n" :class="{ 'bold': n === currentPage }" @click="fetchListData(n)">
        {{ n }}
      </span> -->
         <span v-for="n in paginationRange" :key="n" :class="{ 'bold': n === currentPage }" @click="fetchListData(n)">
      {{ n }}
    </span>
      
      <button @click="fetchListData(currentPage + 1)" :disabled="currentPage === totalPages">▶</button>
      <button @click="fetchListData(totalPages)" :disabled="currentPage === totalPages">끝</button>
    </div>

  </div>


</template>

<script>
import axios from 'axios';

export default {
  name: "List",
 data() {
    return {
      lists: [],
      currentPage: 1,
      totalPages: 0,
      limit: 10
    };
  },
  methods: {
async fetchListData(page = 1) {
  this.currentPage = page;
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await axios.get(`/api/list?page=${page}&limit=${this.limit}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    this.lists = response.data.data;
    this.totalPages = Math.ceil(response.data.total / this.limit);
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
  }
},

     goToDetail(id) {
    this.$router.push(`/adm/list_detail?id=${id}`);
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
      localStorage.removeItem('authToken');
      this.$router.push('/adm/login');
    }
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
  }
}
  },
    computed: {
    paginationRange() {
      let start = Math.max(1, this.currentPage - 2);
      let end = Math.min(start + 4, this.totalPages);

      if (end === this.totalPages) {
        start = Math.max(1, end - 4);
      }

      const range = [];
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
      return range;
    }
  },
    mounted() {
    this.fetchListData();
  }

}
</script>

<style scoped>

.wrap{
    width: 1920px;
}

h1{
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    background-color: #092751;
    color: #fff;
    padding: 0 50px;
}

h1 i{
  width: 150px;
  display: block;
  margin-right: auto;
}

h1 span{
  font-size: 22px;
  color: #fff;
}

h1 button{
  color: #fff;
}

h1 button:nth-of-type(1){
  margin-left: auto;
  margin-right: 20px;
}

.wrap_table{
  height: 600px;
}

table{
    width: 1200px;
    margin: 50px auto;
}

table tr{
  cursor: pointer;
}

.pagination{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
}

.bold{
  font-weight: bold;
}


</style>
