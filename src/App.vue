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
import Zeitzeile from './components/Zeitzeile.vue';

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
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
      console.log(this.total)
    },
    updateStunden2(value : number) {
      this.total2 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
    updateStunden3(value : number) {
      this.total3 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
    updateStunden4(value : number) {
      this.total4 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
    updateStunden5(value : number) {
      this.total5 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
    updateStunden6(value : number) {
      this.total6 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
    updateStunden7(value : number) {
      this.total7 = value;
      this.total = (this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7).toFixed(2);
    },
  }
};
</script>

<style>
</style>
