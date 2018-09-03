<template>
  <input type="text" class="search-campaign" placeholder="キャンペーン検索"/>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "bulma";

  .search-campaign {
    width: 200px;
    height: 32px;
    padding: 2px 12px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(13, 187, 172);
    border-radius: 16px;
    outline: 0;
    font-size: 15px;
    float: right;
    color: white;
    background: transparent;

    &::placeholder {
      color: rgb(120, 236, 211);
      font-size: 15px;
    }
  }
</style>
