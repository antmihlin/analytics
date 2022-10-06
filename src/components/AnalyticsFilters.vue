<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

function fetchScores() {
  store.fetchScores();
}

const dataFrom = ref(null);
const dataTo = ref(null);
</script>

<template>
  <div class="filters-wrap">
    <Card>
      <template #content>
        <div class="field col-6">
          <label for="dataFrom">From</label>
          <Calendar inputId="dataFrom" v-model="dataFrom" :showIcon="true" />
        </div>
        <div class="field col-6">
          <label for="dataTo">To</label>
          <Calendar inputId="dataTo" v-model="dataTo" :showIcon="true" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="sass" scoped></style>
