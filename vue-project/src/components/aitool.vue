<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
console.log(axios.isCancel("something"));
onMounted(() => {
  axios
    .get("https://2k2agenv28.execute-api.eu-north-1.amazonaws.com/items")
    .then((fetched) => {
      console.log(fetched.data[0]);
      dailyAiModel = fetched.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
defineProps<{ msg }>();
let dailyAiModel = {
  aiName: "",
  aiWebsite: "",
  date: "",
  description: "",
  id: 0,
  imagePath: "",
  videoIframeAdress: "",
};
</script>
<template>
  <div>
    <div class="content">
      <div class="card">
        <h1>{{ dailyAiModel.aiName }}ssa</h1>
        <p>{{ dailyAiModel.date }}</p>
        <p>{{ dailyAiModel.description }}</p>
         <h3><a :href="dailyAiModel.aiWebsite"></a>dailyAiModel.aiWebsite</h3>
        <br />
        <h2>{{ dailyAiModel.aiName }} Trailer</h2>
        <div v-if="!dailyAiModel.videoIframeAdress.includes("Not Available")" class="iframe-youtube">
          <iframe
            :src="dailyAiModel.videoIframeAdress"
            frameborder="0"
          ></iframe>
        </div>
        <div class="iframe-tiktok"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
