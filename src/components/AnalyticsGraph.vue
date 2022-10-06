<script setup lang="ts">
import { useScoreStore } from "@/stores/score";
import { computed, ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

const store = useScoreStore();

// const stats = computed(() => store.stats);
const labels = computed(() => store.labels);
const datasets = computed(() => store.datasets);

Chart.register(...registerables);

const testData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      data: datasets.value,
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
