<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
      <div class="box">
        <div class="panel-box">
        <panel class="panel panel-yellow" label="Total IMP" :value="imp.current" :max="imp.max"></panel>
        <panel class="panel panel-green"  label="Total CV" :value="cv" :max="cv"></panel>
        <panel class="panel panel-blue"  label="CPA" :value="cpa" :max="cpa"></panel>
        <panel class="panel panel-purple"  label="CPC" :value="cpc" :max="cpc"></panel>
      </div>
        <LineChart></LineChart>
      </div>
      <!-- <state :imp="imp.current" :cv="cv" :cpa="cpa" :cpc="cpc"></state> -->
      <!-- <div class="category-component">
        <category></category>
      </div> -->
      <div class="campaigns-container">
        <campaigns :campaigns="campaigns"></campaigns>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Sidebar from "@/components/sidebar/sidebar.vue";
import Meter from "@/components/meter.vue";
import Panel from "@/components/panel.vue";
import State from "@/components/state/state.vue";
import Category from "@/components/category/category.vue";
import Capaigns from "@/components/campaigns/campaigns.vue";
import LineChart from "@/components/charts/line/component.vue";

export default {
  data() {
    return {
      imp: {
          current: 5000000,
          max: 10000000,
      },
      cv: 1000,
      cpc: 0.01,
      cpa: 2000,
      campaigns: [
        {
          id: 1001,
          name: "hogehoge",
          imp: 20000,
          cv: 100,
          status: "active",
          startDate: "2018-01-07",
          endDate: "2018-04-30",
        },
        {
          id: 1002,
          name: "fugafuga",
          imp: 14000,
          cv: 90,
          status: "stop",
          startDate: "2018-01-07",
          endDate: "2018-02-28",
        },
        {
          id: 1003,
          name: "geo targeting",
          imp: 25000,
          cv: 100,
          status: "active",
          startDate: "2018-03-01",
          endDate: "2018-04-12",
        },
        {
          id: 1001,
          name: "retargeting",
          imp: 20000,
          cv: 100,
          status: "active",
          startDate: "2018-05-07",
          endDate: "2018-08-12",
        },
        {
          id: 1002,
          name: "funnel targeting",
          imp: 14000,
          cv: 90,
          status: "stop",
          startDate: "2018-03-07",
          endDate: "2018-05-12",
        },
        {
          id: 1003,
          name: "audience targeting",
          imp: 25000,
          cv: 100,
          status: "active",
          startDate: "2018-01-10",
          endDate: "2018-03-01",
        }
      ],
    }
  },
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar,
    "panel": Panel,
    "state": State,
    "category": Category,
    "campaigns": Capaigns,
    "LineChart": LineChart,
  }
}
</script>

<style lang="scss">
main {
  width: calc(100% - 135px);
  overflow: auto;
  margin-top: 60px;
  margin-left: 135px;
  padding: 15px 25px;
  color: white;

  .box {
    color: white;
    width: 100%;
    height: 370px;
    padding: 10px 0;
    background: rgba(4, 5, 59, 0.6);
    border-radius: 0;
    .panel-box {
      padding: 0px 40px;
      height: 80px;
      width: 100%;
      .panel {
        float: left;
        margin: 0px 35px 0px 0px;
      }
    }
  }

  .category-component {
    float: left;
  }
  .campaigns-container {
    float: left;
    width: 100%;
  }
}
</style>
