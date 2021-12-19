<template>
  <section class="select_picker_date" :class="classData">
    <!-- 연월일 -->
    <input
      type="date"
      max="9999-12-31"
      class="input_year"
      v-model="date"
      @change="calcDateTime" />
    <div class="select_group" v-if="showHours">
      <!-- 시 -->
      <select
        name=""
        id=""
        class="sp_date sp_mm"
        :class="classTime"
        v-model="dateObj.hour"
        @change="calcDateTime">
        <option
          v-for="(hour, idx) in listObj.hoursList"
          :value="hour"
          :key="idx">
          {{ hour }}
        </option>
      </select>
      <!-- 분 -->
      <select
        name=""
        id=""
        class="sp_date sp_HH"
        :class="classTime"
        v-if="showMinutes"
        v-model="dateObj.minute"
        @change="calcDateTime">
        <option
          v-for="(minute, idx) in listObj.minutesList"
          :value="minute"
          :key="idx">
          {{ minute }}
        </option>
      </select>
      <!-- 초 -->
      <select
        name=""
        id=""
        class="sp_date sp_mm"
        :class="classTime"
        v-if="showMinutes && showSeconds"
        v-model="dateObj.second"
        @change="calcDateTime">
        <option
          v-for="(second, idx) in listObj.secondsList"
          :value="second"
          :key="idx">
          {{ second }}
        </option>
      </select>
    </div>
    <!-- <transition>
      <div @click="init">초기화</div>
    </transition> -->
  </section>
</template>
<script>
import moment from "moment";

// 날짜 일부를 받아서 날짜형식 String 으로 반환

export default {
  name: "SelectPicker",
  model: {
    event: "change",
  },
  props: {
    // show UI
    showHours: { type: Boolean, default: true },
    showMinutes: { type: Boolean, default: true },
    showSeconds: { type: Boolean, default: false },
    // class :
    classData: { type: String, default: "col-6" },
    classTime: { type: String, default: "" },
    // resultType : String || Object
    resultType: { type: String, default: "string" },
  },
  data() {
    return {
      // Date : 연월일 || Time : 시분초
      dateObj: {
        year: "",
        month: "",
        day: "",
        hour: "00",
        minute: "00",
        second: "00",
      },
      date: "",
      listObj: {
        hoursList: [""],
        minutesList: [""],
        secondsList: [""],
      },
      //  {
      //   showHours: true,
      //   showMinutes: true,
      //   showSeconds: true,
      // },
      intervalObj: {
        diffMinute: 1,
        diffSecond: 1,
      },
    };
  },
  computed: {
    
  },
  watch: {
    dateObj: {
      deep: true,
      handler(){}
    },
    date(newVal) {
      this.dateObj.year = moment(newVal).format("Y");
      this.dateObj.month = moment(newVal).format("MM");
      this.dateObj.day = moment(newVal).format("DD");
    },
  },
  methods: {
    init() {
      this.date = moment().format("Y-MM-DD");

      this.listObj.hoursList = new Array(24);
      for (let i = 0; i < this.listObj.hoursList.length; i++) {
        this.listObj.hoursList[i] = i < 10 ? "0" + i : "" + i;
      }
      this.listObj.minutesList = new Array(
        Math.ceil(60 / this.intervalObj.diffMinute)
      );
      for (let i = 0; i < this.listObj.minutesList.length; i++) {
        const minute = i * this.intervalObj.diffMinute;
        this.listObj.minutesList[i] = minute < 10 ? "0" + minute : "" + minute;
      }
      this.listObj.secondsList = new Array(
        Math.ceil(60 / this.intervalObj.diffSecond)
      );
      for (let i = 0; i < this.listObj.secondsList.length; i++) {
        const second = i * this.intervalObj.diffSecond;
        this.listObj.secondsList[i] = second < 10 ? "0" + second : "" + second;
      }
    },

    calcDateTime() {
      // 가독성을 위한 선언부
      let year = this.dateObj.year;
      let month = this.dateObj.month;
      let day = this.dateObj.day;
      let hour = this.dateObj.hour;
      let minute = this.dateObj.minute;
      let second = this.dateObj.second;

      let resDateTime = "";

      if (this.resultType.toLowerCase() == "string") {
        resDateTime =
          `${year}-${month}-${day}` +
          (this.showHours ? ` ${hour}:${minute}:${second}` : "");
      }else if(this.resultType.toLowerCase() == "object"){
        resDateTime = this.dateObj;
      }

      this.$emit("setDateTime", resDateTime);

      return resDateTime;
    },
  },
  created() {
    this.init();
  },
};
</script>
<style lang="scss">
$bgColor: white;

.select_picker_date {
  display: flex;

  .select_group,
  .input_year {
    background: $bgColor;
    display: flex;
    flex: 1;
    width: 100%;

    .sp_date {
      width: 100%;
      flex: 1 1 50%;
      background: $bgColor;
    }
  }
}
</style>