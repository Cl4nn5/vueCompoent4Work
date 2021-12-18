<template>
  <div id="app">
    <VHeader />
    <br />
    키보드 잘 안되서 슬프다

    <section class="cmp_date">
      <h3>날짜 선택</h3>
      <div class="date_row">
        <div>일시</div>
        <SelectPicker :showSeconds="false" @setDateTime="getDateTime" />
      </div>
    </section>
  </div>
</template>

<script>
import VHeader from "./components/vHeader.vue";
import SelectPicker from "./components/utils/SelectPicker.vue";

export default {
  name: "App",
  components: {
    VHeader,
    SelectPicker,
  },
  methods: {
    getDateTime(datetime){
      console.log(datetime);
    }
  },
};
</script>

<style lang="scss">
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
