<template>
  <div class="home">
    <h1>{{ $store.state.home.msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-color: $primaryColor;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 22px;
    color: $textColor;
    font-weight: 600;
  }
}
</style>
