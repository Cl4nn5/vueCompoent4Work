<template>
  <div id="app">
    <VHeader />
    <br />
    키보드 잘 안되서 슬프다

    <section class="cmp_date">
      <h3>날짜 선택</h3>
      <div class="date_row">
        <div class="col-6">string 일시</div>
        <SelectPicker :showSeconds="false" @setDateTime="getDateTime" />
      </div>
      <div class="date_row">
        <div class="col-6">object 일시</div>
        <SelectPicker :showSeconds="false" @setDateTime="getDateTime" :resultType="'object'" />
      </div>
    </section>

    <section class="row mt-4">
      <div class="col-3">
        <h4>결과 보여줄 공간</h4>
      </div>
      <div>
        <textarea class="w-75" readonly ref="result"></textarea>
      </div>
    </section>
  </div>
</template>

<script>
import VHeader from "./components/vHeader.vue";
import SelectPicker from "./components/utils/SelectPicker.vue";
require('bootstrap')

export default {
  name: "App",
  components: {
    VHeader,
    SelectPicker,
  },
  methods: {
    getDateTime(datetime){
      console.log(datetime);
      this.showResult(datetime);
    },
    showResult(res){
      res = typeof(res) == "object" ? JSON.stringify(res) : res;
      this.$refs.result.innerHTML = res;
    }
  },
};
</script>

<style lang="scss">
@import "bootstrap";
@import "./style/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.date_row {
  display: flex;
  width: 80%;
  border-radius: 2px;
  border: 1px solid black;
  // box-shadow: black;

  div {
    flex: 1;
  }
}
</style>
