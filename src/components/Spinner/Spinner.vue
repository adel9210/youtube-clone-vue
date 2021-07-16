<template>
  <img class="spinner" src="../../assets/spinner.gif" />
  <h5 class="spinner__slang">Loading</h5>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.spinner {
  height: 80px;
  margin: 0 auto;
  width: 100px;
  display: block;

  &__slang {
      text-align: center;
      font-size: 1rem;
  }
}
</style>