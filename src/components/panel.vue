<template>
    <div class="panel">
      <!-- <div class="panel-label"><span>{{label}}</span></div> -->
      <span class="label">{{label}}</span>
      <span class="value">{{value.toLocaleString()}}</span>
      <!-- <div class="panel-value"><span>{{value.toLocaleString()}}</span></div> -->
      <!-- <div class="panel-meter">
          <Meter class="meter-style" :value="value" :max="max"></Meter>
          <span>%</span>
      </div> -->
    </div>
</template>

<script>
import Meter from "@/components/meter.vue";
export default {
  props: {
      label: String,
      value: Number,
      max: Number,
  },
  components: {
    "Meter": Meter
  }
}
</script>

<style lang="scss">
@import "bulma";
.panel {
  color: white;
  height: 70px;
  width: 200px;
  position: relative;

  .label {
    position: absolute;
    color: white;
    // opacity: 0.8;
    font-size: 14px;
    font-weight: normal;
    top: 10px;
    left: 20px;
  }

  .value {
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 20px;
  }

  .panel-label {
    height: 25px;
    width: 100%;
    padding: 0px 15px;
    text-align: left;
    span {
      // opacity: 0.8;
      font-size: 16px;
    }
  }

  .panel-value {
    height: 40px;
    text-align: right;
    padding: 0px 20px;
    span {
      font-size: 20px;
      line-height: 40px;
      vertical-align: middle;
    }
  }

  .panel-meter {
    height: 30px;
    padding: 0px 15px;
    font-size: 13px;
    .meter-style {
      line-height: 30px;
      vertical-align: middle;
      width: 100px;
      height: 5px;
      border-radius: 2.5px;
    }
    span {
      opacity: 0.8;
    }
  }
}

// panel color
.panel-yellow {
  background: #b5d113;
  .panel-label {
    // background: rgb(187, 160, 11);
  }
}
.panel-green {
  background: #0ed180fd;
  .panel-label {
    background: rgb(14, 161, 81);
  }
}
.panel-blue {
  background: #0e91cefd;
  .panel-label {
    background: rgb(11, 128, 196);
  }
}
.panel-purple {
  background: #c715a0fd;
  .panel-label {
    background: rgb(179, 14, 157);
  }
}
</style>
