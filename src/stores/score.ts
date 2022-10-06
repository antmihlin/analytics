import { defineStore } from "pinia";

interface ScoreParams {
  from?: string;
  to?: string;
}

interface Score {
  title?: string;
}

export const useScoreStore = defineStore("score", {
  state: () => ({
    scores: [{ title: "sfgweger" }, { title: "235345634" }] as
      | Score[]
      | undefined,
    // scores: undefined as Score[] | undefined
  }),
  getters: {
    // getScores(state) {
    //   return state.scores;
    // }
  },
  actions: {
    fetchScores(data: ScoreParams) {
      this.scores?.push({ title: "sfgweger" });
    },
  },
});
