<template>
  <div id="fixedTableArea">
    <div id="topArea">
      <div id="topLeftArea">
          <table id="topLeftTable" class="fixedTable">
              <tbody>
                  <tr>
                      <td>column0</td>
                      <td>column1</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div id="topRightArea">
          <table id="topRightTable" class="fixedTable">
              <tbody><tr><td>column2</td><td>column3</td><td>column4</td><td>column5</td><td>column6</td><td class="dummyColumn"></td></tr></tbody>
          </table>
      </div>
    </div>
    <div id="bottomArea">
      <div id="bottomLeftArea" @scroll="scrollOnBottomRight">
          <table id="bottomLeftTable" class="fixedTable">
              <tbody><tr><td>data0-0</td><td>data0-1</td></tr><tr><td>data1-0</td><td>data1-1</td></tr><tr><td>data2-0</td><td>data2-1</td></tr><tr><td>data3-0</td><td>data3-1</td></tr><tr><td>data4-0</td><td>data4-1</td></tr><tr><td>data5-0</td><td>data5-1</td></tr><tr><td>data6-0</td><td>data6-1</td></tr><tr><td class="dummyRow"></td><td class="dummyRow"></td></tr></tbody>
          </table>
      </div>
      <div id="bottomRightArea" @scroll="">
          <table id="bottomRightTable" class="fixedTable">
              <tbody><tr><td>data0-2</td><td>data0-3</td><td>data0-4</td><td>data0-5</td><td>data0-6</td></tr><tr><td>data1-2</td><td>data1-3</td><td>data1-4</td><td>data1-5</td><td>data1-6</td></tr><tr><td>data2-2</td><td>data2-3</td><td>data2-4</td><td>data2-5</td><td>data2-6</td></tr><tr><td>data3-2</td><td>data3-3</td><td>data3-4</td><td>data3-5</td><td>data3-6</td></tr><tr><td>data4-2</td><td>data4-3</td><td>data4-4</td><td>data4-5</td><td>data4-6</td></tr><tr><td>data5-2</td><td>data5-3</td><td>data5-4</td><td>data5-5</td><td>data5-6</td></tr><tr><td>data6-2</td><td>data6-3</td><td>data6-4</td><td>data6-5</td><td>data6-6</td></tr></tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    // window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    scrollOnBottomRight () {
      const bottomRightArea = document.getElementById("bottomRightArea")
      
      document.getElementById("bottomLeftArea").scrollTop = bottomRightArea.scrollTop
      document.getElementById("topRightArea").scrollLeft = bottomRightArea.scrollLeft
    },

    scrollOnBottomLeft () {
      const bottomLeftArea = document.getElementById("bottomLeftArea")
      
      document.getElementById("bottomRightArea").scrollTop = bottomLeftArea.scrollTop
    }

  }
}
</script>

<style>
#fixedTableArea {
    width: 590px;
    height: 200px;
    background-color: #DDFFFF;
}
#topLeftArea {
    float: left;
}
#topRightArea {
    width: 400px;
    float: left;
    overflow: hidden;
}
#bottomLeftArea {
    float: left;
    height: 170px;
    overflow: hidden;
}
#bottomRightArea {
    width: 400px;
    height: 170px;  
    /* overflow: scroll; */
}
#topArea {
}
#bottomArea {
  float: left;
  overflow: scroll;
}

.fixedTable {
    border-collapse: collapse;
}
.fixedTable td {
    border: 1px solid #888;
    min-width: 90px;
    max-width: 90px;
    overflow: hidden;
    white-space: nowrap;
    height: 30px;
}
.fixedTable td.dummyColumn {
    width: 17px;
    border: 0px;
}
.fixedTable td.dummyRow {
    height: 18px;
    border: 0px;
}
</style>
