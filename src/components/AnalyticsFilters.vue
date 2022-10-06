<script setup lang="ts">
import { ref } from "vue";
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

const dataFrom = ref(null);
const dataTo = ref(null);

function fetchScores(data) {
  store.fetchScores(data);
}

function onDataSelectHandler() {
  fetchScores({ from: dataFrom.value, to: dataTo.value });
}

function clearDates() {
  dataFrom.value = null;
  dataTo.value = null;
  fetchScores({ from: dataFrom.value, to: dataTo.value });
}
</script>

<template>
  <div class="filters-wrap">
    <Card>
      <template #content>
        <div class="flex flex-row flex-wrap justify-content-end gap-2">
          <div class="flex flex-column">
            <label for="dataFrom">From</label>
            <Calendar
              inputId="dataFrom"
              v-model="dataFrom"
              dateFormat="yy/mm/dd"
              @date-select="onDataSelectHandler($event)"
              :showIcon="true"
            />
          </div>
          <div class="flex flex-column">
            <label for="dataTo">To</label>
            <Calendar
              inputId="dataTo"
              v-model="dataTo"
              dateFormat="yy/mm/dd"
              @date-select="onDataSelectHandler($event)"
              :showIcon="true"
            />
          </div>
          <div class="flex align-self-end">
            <Button
              :disabled="!dataFrom && !dataTo"
              @click="clearDates"
              icon="pi pi-times"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="sass" scoped></style>
