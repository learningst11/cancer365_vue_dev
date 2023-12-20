<template>
<div>
    <section class="section_top">

        <div class="wrap">

            <p>암환우와 의료진이 함께 만드는<br class="mobile"> 암승리 전국병원 네트워크</p>
            <img src="@/assets/logo.png" alt="logo">
            <p>환자유치 권역선점을 위한<br class="mobile"> 우선가맹설명회에</p>
            <p>전국 병원장님을<br class="mobile"> 초대합니다!</p>

        </div>

        <div class="flexbox">

            <div class="left"><img src="@/assets/section_top_left.png" alt="section_top_left"></div>

            <div class="right"><img src="@/assets/section_top_right.png" alt="section_top_right"></div>

        </div>

    </section>

                 <section class="section_bottom">
                    <p>참가 신청을 원하시면<br class="mobile"> 아래 내용을 작성해주세요.</p>
                    <form @submit.prevent="submitForm">
                      <div class="wrap">
                        <p>회차선택 <span>(필수, 중복선택불가)</span></p>
                       <div class="wrap_label">
                              <!-- 각 라디오 버튼에 v-model 추가 -->
                              <label><input type="radio" v-model="formData.round" value="12월 9일(토) 오후 3시, 서울">12월 9일 (토) 오후3시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="12월 10일(일) 오전 11시, 서울">12월 10일 (일) 오전11시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="12월 13일(수) 오후7시, 서울">12월 13일(수) 오후7시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="12월 16일(토) 오후3시, 부산">12월 16일(토) 오후3시, 부산 부산역 회의실 532호</label>
                              <label><input type="radio" v-model="formData.round" value="12월 17일(일) 오전11시, 전북">12월 17일(일) 오전11시, 전북 익산역 회의실 국화실</label>
                              <label><input type="radio" v-model="formData.round" value="12월 20일(수) 오후7시, 서울">12월 20일(수) 오후7시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="1월 6일(토) 오후3시, 서울">1월 6일(토) 오후3시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="1월 7일(일) 오전11시, 서울">1월 7일(일) 오전11시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="1월 10일(수) 오후7시, 서울">1월 10일(수) 오후7시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="1월13일(토) 오후3시, 광주">1월13일(토) 오후3시, 광주(세부장소 별도안내)</label>
                              <label><input type="radio" v-model="formData.round" value="1월14일(일) 오전11시, 부산">1월14일(일) 오전11시, 부산 부산역 회의실 202호</label>
                              <label><input type="radio" v-model="formData.round" value="1월17일(수) 오후7시, 서울">1월17일(수) 오후7시, 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                              <label><input type="radio" v-model="formData.round" value="1월20일(토) 오후3시 서울">1월20일(토) 오후3시 서울 강서구 마곡중앙6로 63(마곡동 796-5) 마곡테크노타워1 6층 세미나실</label>
                            </div>


                    <div class="flexbox">
                      <label>성함<span> (필수)</span><input type="text" v-model="formData.name"></label>
                      <label>전화번호<span> (필수)</span><input type="text" v-model="formData.phone" @input="formData.phone = formatPhoneNumber(formData.phone)"></label>
                      <label>병원명<span> (필수)</span><input type="text" v-model="formData.hospital"></label>
                      <div>
                        <select name="" id="sido" onchange="sel_sido(this)">
                        <option value="" disabled selected>시/도</option></select>
                        <select name="" id="gungu">
                            <option value="" disabled selected>시/군/구</option>
                        </select>
                    </div>
                      <label>부서/직함<span> (필수)</span><input type="text" v-model="formData.position"></label>
                      <label>초청자<span>(선택)</span><input type="text" v-model="formData.inviter"></label>
                    </div>


                <p>관심주제 <span>(1개 이상 필수)</span></p>
                    <div class="wrap_label">
                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="암 환우 유치">암 환우 유치 - 광고, 홍보, 마케팅, 커뮤니티 제휴 등</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="암 환우 식단 운영">암 환우 식단 운영 - 영양실 운영개선, 식단개선, 영양사 대용식 등</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="암 환우 액티비티 운영">암 환우 액티비티 운영 - 다양한 참여프로그램 도입 및 활성화 등</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="암 환우 치료 인프라 보강">암 환우 치료 인프라 보강 - 치료장비, 케어시설, 약제, 인프라 등</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="병원 경영개선">병원 경영개선 - 경영성과개선, 직원교육, 자금운영 등</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="특별히 없음">특별히 없음</label>

                      <label><input type="checkbox" class="custom-checkbox" v-model="formData.topics" value="기타">기타</label>
                    </div>

            </div>

        <label><input type="checkbox" v-model="formData.terms">설명회 참가를 위한 개인정보 제공 및 마케팅수신 동의 <span>(필수)</span></label>

        <button type="submit">참가 신청하기</button>

        </form>

    </section>
    <footer>

        <div class="wrap">

            <p>회사명 : 온식주파트너스<br>
                소재지 : 서울특별시 강서구 마곡중앙6로 63, 625호(마곡동, 마곡테크노타워)<br>
                사업자등록번호 : 622-36-00997   |   대표자 : 유근성<br>
                COPYRIGHT 2023 온식주파트너스 all rights reserved.</p>

            <img src="@/assets/logo_footer.png" alt="logo_footer">

        </div>

        <div class="wrap">

            <router-link to="/adm/login" class="link_admin">관리자 로그인</router-link>

        </div>

    </footer>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        round: '',
        name: '', 
        phone: '', 
        hospital: '', 
        address1: '', 
        address2: '', 
        position: '', 
        inviter: '', 
        topics: [], 
        terms: false, 
      }
    };
  },
  methods: {
     formatPhoneNumber(value) {
      let numbers = value.replace(/\D/g, ''); 
      let formatted = '';

      for (let i = 0; i < numbers.length; i++) {
        if (i === 3 || i === 7) {
          formatted += '-';
        }
        formatted += numbers[i];
      }

      return formatted;
    }, 
  async submitForm() {

    if (!this.formData.round) {
      alert("회차선택을 해주세요.");
      return;
    }
    if (!this.formData.name) {
      alert("성함을 입력해주세요.");
      return;
    }
    if (!this.formData.phone) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (!this.formData.hospital) {
      alert("병원명을 입력해주세요.");
      return;
    }
    if (!this.formData.position) {
      alert("부서/직함을 입력해주세요.");
      return;
    }
    var address1SelectedOption = document.querySelector("#sido option:checked");
    var address2SelectedOption = document.querySelector("#gungu option:checked");
    if (!address1SelectedOption) {
      alert("병원 소재지 시/도를 선택해주세요.");
      return;
    }
    if (!address2SelectedOption) {
      alert("병원 소재지 시/군/구를 선택해주세요.");
      return;
    }
    if (this.formData.topics.length === 0) {
      alert("관심주제를 선택해주세요.");
      return;
    }
    if (!this.formData.terms) {
      alert("개인정보제공 및 마케팅수신 동의에 체크해주세요.");
      return;
    }

    try {
      var address1SelectedOption = document.querySelector("#sido option:checked");
      var address2SelectedOption = document.querySelector("#gungu option:checked");
      var address1 = address1SelectedOption ? address1SelectedOption.textContent : '';
      var address2 = address2SelectedOption ? address2SelectedOption.textContent : '';

      let termsValue = this.formData.terms ? "동의" : "비동의";

      let dataToSend = {
        ...this.formData,
        address1: address1,
        address2: address2,
        topics: this.formData.topics.join(", "),
        terms: termsValue
      };

      const response = await axios.post('/api/apply', dataToSend);

      if (response.data.success) {
        alert('참가신청이 완료되었습니다.');
        window.location.reload();
      } else {
        alert('오류가 발생했습니다: ' + response.data.message);
      }
    } catch (error) {
      console.error('서버 오류:', error);
      alert('오류가 발생했습니다.');
    }
  }

  }
}
</script>

<style>


  /* .section_top */
  .section_top {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url(@/assets/bg_section_top.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 60px 0;
  }
  .section_top .wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .section_top .wrap p:is(:nth-of-type(1), :nth-of-type(2) ){
    color: #FFF;
    text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 35px;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }

  .section_top .wrap img{
    margin-top: 24px;
    width: 100%;
    max-width: 670px;
  }

  .section_top .wrap p:nth-of-type(3){
    color: #FFF;
  text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 65px;
    font-weight: 500;
    margin-top: 20px;
  }

  .section_top .flexbox{
    display: flex;
    gap: 0 40px;
    margin-top: 80px;
  }

  .section_top .flexbox img{
    width: 100%;
  }

  /* .section_bottom */


  .section_bottom{
    padding-bottom: 100px;
  }

  .section_bottom > p{
    margin-top: 60px;
    color: #333;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  .section_bottom .wrap{
    width: 980px;
    margin-top: 70px;
    padding: 45px;
    border-radius: 30px;
    border: 1px solid var(--line, #E2E2E2);
    background: #FFF;
    margin: 0 auto;
    margin-top: 70px;
  }

  .section_bottom .wrap > p{
    color: #333;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
  }

  .section_bottom .wrap > p span{
    color: #F00;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
  }

  .section_bottom .wrap > p:nth-of-type(2){
    margin-top: 50px;
  }

  .section_bottom form >label{
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 20px;
  }

  .section_bottom form >button{
    color: #fff;
    border-radius: 30px;
    background: #0D3B7B;
    font-size: 20px;
    font-weight: 400;
    width: 300px;
    height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    display: block;

  }

  .section_bottom .wrap_label{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin-top: 25px;
  }

  .section_bottom .wrap_label label{
    display: flex;
    align-items: center;
    gap: 0 20px;
    color: #333;
    font-size: 18px;
    font-weight: 400;
  }

  .section_bottom input[type="radio"],input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }

  .section_bottom .flexbox{
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    gap: 10px 60px;
    justify-content: space-between;
  }

  .section_bottom .flexbox label{
    width: calc(50% - 30px);
  }

  .section_bottom .flexbox label:nth-of-type(5){
    width: 100%;
  }

  .section_bottom .flexbox label input{
    display: block;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
  }

  .section_bottom .flexbox label{
    color: #333;
    font-size: 20px;
    font-weight: 500;
  }

  .section_bottom .flexbox div{
    display: flex;
    gap: 0 60px;
    width: 100%;
  }

  .section_bottom .flexbox div .nice-select{
    width: calc(50% - 30px);
    border:1px solid #d9d9d9;
  }

  .section_bottom .nice-select.open .list{
    width: 100%;
  }
  .section_bottom .nice-select .option{
    width: 100%;
  }

  .section_bottom label span{
    color: #F00;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
  }

  .link_admin{ color: #fff; font-size:16px; margin-top:20px;}

  @media screen and (max-width: 1024px) {

    /* .section_top */
      .section_top{
        height: auto;
        background-position: right;
      }

      .section_top .wrap p:is(:nth-of-type(1), :nth-of-type(2) ){
        font-size: 18px;
      }

      .section_top .wrap img{
        max-width: 270px;
        margin-top: 5px;
      }

      .section_top .wrap p:nth-of-type(3){
        font-size: 30px;
        margin-top: 10px;
      }

      .section_top .flexbox{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0 15px;
        margin-top: 15px;
      }

      .section_top .flexbox > div{
        width: 95%;
      }


      /* .section_bottom */
     .section_bottom > p{
      font-size: 20px;
        }

        .section_bottom .wrap{
          width: 95%;
          padding: 30px 10px;
        }

        .section_bottom .wrap > p{
          font-size: 16px;
        }

        .section_bottom .flexbox{
          flex-direction: column;
        }

        .section_bottom .flexbox label{
          width: 100%;
          font-size: 16px;
        }

        .section_bottom .flexbox label input{
          width: 100%;
        }

        .section_bottom .wrap_label label{
          font-size: 14px;
          gap: 0 10px;
        }

        .section_bottom input[type="radio"],input[type="checkbox"]{
          width: auto;
          height: auto;
        }

        .section_bottom  form >label{
          width: 90%;
          margin: 30px auto;
          gap: 0 10px;
        }

          .section_bottom label span{
          font-size: 16px;
        }

        .section_bottom .wrap > p span{
          font-size: 16px;
        }

        .section_bottom .flexbox div{
          gap: 0 10px;
        }

        .section_bottom .flexbox div .nice-select{
          width: calc(50% - 5px);
        }

        .link_admin{ color: #fff; font-size:14px; margin-top:30px;}
        
  }


  @media screen and (max-width: 400px){


  }

</style>