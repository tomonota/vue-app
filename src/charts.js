import Vue from "vue";
import App from "@/components/charts/pie/chart.vue";
import LineChart from "@/components/charts/line/component.vue";

new Vue({
    el: "#vue-chart",
    components: {
        "chart": App,
        "line-chart": LineChart
    }
})