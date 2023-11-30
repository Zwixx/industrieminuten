<template>
  <main>
    
    <table>
      <caption>Industriestundenrechner</caption>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Beginn</th>
          <th>Ende</th>
          <th>Pause</th>
          <th>Industriestunden / Zeit</th>
        </tr>
      </thead>
      <tbody>
        <Zeitzeile day="Mo" @updateSumme="updateStunden1"/>
        <Zeitzeile day="Di" @updateSumme="updateStunden2"/>
        <Zeitzeile day="Mi" @updateSumme="updateStunden3"/>
        <Zeitzeile day="Do" @updateSumme="updateStunden4"/>
        <Zeitzeile day="Fr" @updateSumme="updateStunden5"/>
        <Zeitzeile day="Sa" @updateSumme="updateStunden6"/>
        <Zeitzeile day="So" @updateSumme="updateStunden7"/>
        <tr><td colspan="4" align="right">Summe:</td><td>{{ total }}</td></tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import { convertToTime } from './js/functions'
import Zeitzeile from './components/Zeitzeile.vue';

function sum(thys : any) {
  let text = (thys.total1 + thys.total2 + thys.total3 + thys.total4 + thys.total5 + thys.total6 + thys.total7);
  thys.total = text.toFixed(2) + " / " + convertToTime(text);
}

export default {
  components: {
    Zeitzeile
  },
  data() {
    return {
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      total5: 0,
      total6: 0,
      total7: 0,
      total: "",
    };
  },
  methods: {
    updateStunden1(value : number) {
      this.total1 = value;
      sum(this);
    },
    updateStunden2(value : number) {
      this.total2 = value;
      sum(this);
    },
    updateStunden3(value : number) {
      this.total3 = value;
      sum(this);
    },
    updateStunden4(value : number) {
      this.total4 = value;
      sum(this);
    },
    updateStunden5(value : number) {
      this.total5 = value;
      sum(this);
    },
    updateStunden6(value : number) {
      this.total6 = value;
      sum(this);
    },
    updateStunden7(value : number) {
      this.total7 = value;
      sum(this);
    },
  }
};
</script>

<style>
</style>
