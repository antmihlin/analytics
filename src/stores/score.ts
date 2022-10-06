import { defineStore } from "pinia";
import axios from "axios";

import { mapStats, setParams } from "@/helpers/stats.helper";
import type { Score, ScoreParams } from "@/models/score.data";

const apiEndpoint = "https://datasource.kapsarc.org/api/records/1.0/search/?dataset=spot-prices-for-crude-oil-and-petroleum-products";

export const useScoreStore = defineStore("score", {
  state: () => ({
    scores: [{ title: "sfgweger" }, { title: "235345634" }] as
      | Score[]
      | undefined,
    // scores: undefined as Score[] | undefined
    stats: undefined,
    labels: undefined,
    datasets: undefined
  }),
  actions: {
    async fetchScores(data: ScoreParams) {
      const date = setParams(data);

      const params = {
        sort: '-period',
        facet: 'period',
        q: date
      };
      const response = await axios.get(apiEndpoint, {params});
      console.log("🚀 ~ file: score.ts ~ line 30 ~ fetchScores ~ response", response?.data?.records)

      const formattedData = mapStats(response?.data?.records);

      this.stats = response?.data?.records || undefined;

      this.labels = formattedData.labels;
      this.datasets = formattedData.datasets;
    },
  },
});


