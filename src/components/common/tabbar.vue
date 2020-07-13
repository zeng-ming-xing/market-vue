<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"tabbar"
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
.tabbar{
  display: flex;
  background-color: rgb(248, 245, 245);
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}

</style>