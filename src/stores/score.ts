import { defineStore } from "pinia";
import axios from "axios";

import { mapStats, setParams } from "@/helpers/stats.helper";
import type { Score, ScoreParams } from "@/models/score.data";

const apiEndpoint = import.meta.env.VITE_STATS_API;

export const useScoreStore = defineStore("score", {
  state: () => ({
    scores: [{ title: "sfgweger" }, { title: "235345634" }] as
      | Score[]
      | undefined,
    // scores: undefined as Score[] | undefined
    stats: undefined as any[] | undefined,
    labels: undefined as string[] | undefined,
    datasets: undefined as number[] | undefined,
  }),
  actions: {
    async fetchScores(data: ScoreParams) {
      const date = setParams(data);

      const params = {
        sort: "-period",
        facet: "period",
        q: date,
        rows: 400,
      };
      const response = await axios.get(apiEndpoint, { params });

      const formattedData = mapStats(response?.data?.records);

      this.stats = response?.data?.records || undefined;

      this.labels = formattedData.labels;
      this.datasets = formattedData.datasets;
    },
  },
});
