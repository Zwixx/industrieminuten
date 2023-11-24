<template>
    <form>
        <InputMask class="ZeitzeileEdit" v-model="beginn" mask="99:99" placeholder="12:00" />-
        <InputMask class="ZeitzeileEdit" v-model="ende" mask="99:99" placeholder="12:00" />Pause:
        <InputMask class="ZeitzeileEdit" v-model="pause" mask="99:99" placeholder="12:00" />
        <span>&nbsp;&nbsp;{{ sum }}</span>
    </form>
    
</template>
<script lang="ts">
import InputMask from 'primevue/inputmask';
import moment from 'moment'

function convertToIndustrialHours(timeString : String) {
    const [hours, minutes] = timeString.split(':').map(Number);

    const industrialHours = hours + minutes / 60;

    return industrialHours;
}

function convertToTime(industrialHours : number) {
    const hours = Math.floor(industrialHours);
    const minutes = Math.round((industrialHours - hours) * 60);

    const formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;

    return `${hours}:${formattedMinutes}`;
}

function toZeit(uhrzeit : String) {

}

export default {
  data() {
    return {
      beginn: "00:00",
      ende: "00:00",
      pause: "00:00",
    };
  },
  computed: {
    sum() {
      let beginn = convertToIndustrialHours(this.beginn);
      let ende = convertToIndustrialHours(this.ende);
      if (beginn > ende) {
        ende += 24;
      }
      let pause = convertToIndustrialHours(this.pause);
      let differenz = ende - beginn - pause;
      return "Industriestunden: " + differenz.toFixed(2) + ", Zeit: " + convertToTime(differenz);
    }
  },
  components: { InputMask }
}
</script>
<style>
.ZeitzeileEdit {
  width: 60px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>