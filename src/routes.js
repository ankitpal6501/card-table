import { createWebHistory, createRouter } from "vue-router";
import DataTable from "./components/DataTable.vue";
import DataCards from "./components/DataCards.vue";

const routes = [
  {
    name: "DataTable",
    path: "/",
    component: DataTable
  },
  {
    name: "DataCards",
    path: "/datacards",
    component: DataCards
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
