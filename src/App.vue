<template>
  <main>
    <h3>Industriestundenrechner</h3>
    <table>
        <tr>
          <td>Tag</td>
          <td>Beginn</td>
          <td>Ende</td>
          <td>Pause</td>
          <td>Industriestunden / Zeit</td>
        </tr>
      <Zeitzeile day="Mo" @updateSumme="updateStunden1"/>
      <Zeitzeile day="Di" @updateSumme="updateStunden2"/>
      <Zeitzeile day="Mi" @updateSumme="updateStunden3"/>
      <Zeitzeile day="Do" @updateSumme="updateStunden4"/>
      <Zeitzeile day="Fr" @updateSumme="updateStunden5"/>
      <Zeitzeile day="Sa" @updateSumme="updateStunden6"/>
      <Zeitzeile day="So" @updateSumme="updateStunden7"/>
      <tr><td colspan="5">Summe: {{ total }}</td></tr>
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
      total: 0,
    };
  },
  methods: {
    updateStunden1(value : number) {
      this.total1 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
      console.log(this.total)
    },
    updateStunden2(value : number) {
      this.total2 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
    updateStunden3(value : number) {
      this.total3 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
    updateStunden4(value : number) {
      this.total4 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
    updateStunden5(value : number) {
      this.total5 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
    updateStunden6(value : number) {
      this.total6 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
    updateStunden7(value : number) {
      this.total7 = value;
      this.total = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6 + this.total7;
    },
  }
};
</script>

<style>
</style>
