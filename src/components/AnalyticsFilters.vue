<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

function fetchScores(data) {
  store.fetchScores(data);
}

const dataFrom = ref(null);
const dataTo = ref(null);
</script>

<template>
  <div class="filters-wrap">
    <Card>
      <template #content>
        <div class="flex flex-row flex-wrap justify-content-end gap-2">
          <div class="flex flex-column">
            <label for="dataFrom">From</label>
            <Calendar inputId="dataFrom" v-model="dataFrom" :showIcon="true" />
          </div>
          <div class="flex flex-column">
            <label for="dataTo">To</label>
            <Calendar inputId="dataTo" v-model="dataTo" :showIcon="true" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="sass" scoped></style>
