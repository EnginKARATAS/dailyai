<template>
  <div class="flama">
    <h3>AI TOOL TODAY</h3>
    <h4>{{ date }}</h4>
  </div>
</template>

<script setup>
//today date format 8.13.2023
const today = new Date();
const date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
</script>

<style scoped lang="scss">
.flama-wrapper {
  .flama {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1c4ed;
    width: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
    h3 {
      margin: 0;
      font-size: 1.2rem;
    }
    h4 {
      margin: 0;
      font-size: 1rem;
    }
  }
}
</style>
