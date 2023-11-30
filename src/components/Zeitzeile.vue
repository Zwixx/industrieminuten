<template>
 <tr>
    <td>{{ day }}</td>
    <td><InputMask class="ZeitzeileEdit" v-model="beginn" mask="99:99" placeholder="12:00" @update:modelValue="updateValue"/></td>
    <td><InputMask class="ZeitzeileEdit" v-model="ende" mask="99:99" placeholder="12:00" @update:modelValue="updateValue" /></td>
    <td><InputMask class="ZeitzeileEdit" v-model="pause" mask="99:99" placeholder="12:00" @update:modelValue="updateValue" /></td>
    <td>{{ sum }}</td>
  </tr>
</template>
<script lang="ts">
import { convertToTime, convertToIndustrialHours } from './../js/functions'

import InputMask from 'primevue/inputmask';

export default {
  data() {
    return {
      beginn: "00:00",
      ende: "00:00",
      pause: "00:00",
      tag: "--",
    };
  },
  props: [
    "day",
  ],
  computed: {
    sum() {
      let beginn = convertToIndustrialHours(this.beginn);
      let ende = convertToIndustrialHours(this.ende);
      if (beginn > ende) {
        ende += 24;
      }
      let pause = convertToIndustrialHours(this.pause);
      let differenz = ende - beginn - pause;
      return differenz.toFixed(2) + " / " + convertToTime(differenz);
    }
  },
  components: { InputMask },
  methods: {
    updateValue() {
      let beginn = convertToIndustrialHours(this.beginn);
      let ende = convertToIndustrialHours(this.ende);
      if (beginn > ende) {
        ende += 24;
      }
      let pause = convertToIndustrialHours(this.pause);
      let differenz = ende - beginn - pause;
      this.$emit('updateSumme', differenz);
    }
  },
}
</script>
<style>
.ZeitzeileEdit {
  width: 60px;
}
</style>