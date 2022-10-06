<script setup lang="ts">
import { computed, ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const dataValues = ref([30, 40, 60, 70, 5]);

const testData = computed(() => ({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));
</script>

<template>
  <div class="graph-wrap">
    <Card>
      <template #content>
        <LineChart :chartData="testData" />
      </template>
    </Card>
  </div>
</template>

<style lang="sass" scoped></style>
