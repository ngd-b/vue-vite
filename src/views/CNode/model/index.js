/**
 * 当前活动的类型
 */
import { defineStore } from "pinia";

/**
 * 类型
 */
export const useTabStore = defineStore("tab", {
  state() {
    return {
      activeTab: "",
    };
  },
  actions: {
    changeTab(paylod) {
      console.log("------------------------", paylod);
      this.activeTab = paylod;
    },
  },
});
