<template>
  <div class="card" v-if="modelValue">
    <div class="image">
      <div>
        <a
          target="_blank"
          style="text-decoration: none"
          :href="modelValue.aiWebsite"
          ><h1 class="black-color">{{ modelValue.aiName }}</h1></a
        >
      </div>
    </div>
    <p class="text-center">{{ modelValue.description }}</p>
    <a target="_blank" :href="modelValue.aiWebsite">
      <button class="pink-button">Visit</button>
    </a>
    <div
      v-if="!modelValue.videoIframeAdress.includes('not available')"
      style="width: 100%"
    >
      <div class="trailer-section">
        <div>
          <h1 class="black-color text-center">{{ modelValue.aiName }} Trailer</h1>
          <iframe width="560" height="315" :src="modelValue.videoIframeAdress" frameborder="0" allowfullscreen></iframe>
          <p class="text-center">Click to link below and go to the trailer video</p>
          <a target="_blank" :href="modelValue.aiWebsite">
            <button class="pink-button">Go to youtube trailer video</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="card" v-if="dailyAiImage">
    <h1>Today`s Beautiful AI Image</h1>
    <p class="image-section-p">SadAI thought result entire day!</p>
    <img
      :src="dailyAiImage"
      alt="There is no suggested image today. I can`t thinking. Am I broken? Wanna image? contact@enginkaratas.com"
    />

    <div class="thinking-section">
      <dot-loader
        class="logoSpinner"
        :loading="defaultLoader"
        :color="logoSpinnerColor"
        :size="logoSpinnerSize"
      ></dot-loader>
      <p>Thinking tomorrow...</p>
    </div>
  </div>
</template>

<script setup>
import DotLoader from "vue-spinner/src/DotLoader.vue";
import { defineProps } from "vue";
const defaultLoader = true;
const logoSpinnerColor = "#f1c4ed";
const logoSpinnerSize = "40";

const props = defineProps({
  modelValue: null,
  dailyAiImage: null,
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  overflow: hidden;
  position: relative;
  color: black;
  margin-bottom: 2.3em;
  .text-center {
    text-align: center;
  }
  .black-color {
    color: #000000;
  }
  .image-section-p {
    position: relative;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: -1.2em;
    margin-bottom: 0.5em;
    padding: 0.5em 0.1em 0.1em 0.1em;
  }
  p {
    text-align: justify;
    font-size: 1.5em;
    margin: 0;
    padding: 0.5em 0.1em 0.1em 0.1em;
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    //shadow
    width: 97%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .trailer-section {
    align-items: center;
    justify-content: center;
    //shadow
    width: 100%;
    height: 100%;
  }
  .iframe-youtube {
    padding-top: 1em;
    width: 100%;
    height: 280px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  a,
  .w-100percent {
    width: 100%;
  }
  .pink-button {
    color: black;
    background-color: #f1c4ed;
    width: 100%;
    border-radius: 15px 15px 15px 15px;
    margin-top: 1em;
  }

  .thinking-section {
    width: 130px;
    color: white;
    height: 55px;
    p {
      font-size: 1.1em;
      margin: 0;
      padding: 0;
    }
    position: absolute;
    right: 27px;
    bottom: 0;
    display: flex;
    flex-direction: left;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f1c4ed;

    background-color: black;
    border-radius: 25% 25% 25% 25%;
    .logoSpinner {
      margin: 1.3em;
    }
  }
  .read-the-docs {
    color: #999999;
  }
}
</style>
