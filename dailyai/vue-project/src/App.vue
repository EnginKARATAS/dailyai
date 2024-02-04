<template>
  <div id="app" :class="getThemeClass">
    <div class="brainImageWrapper">
      <div class="right">
        <img src="./assets/brain256.png" width="300" alt="brain" />
      </div>
      <div class="left">
        <img src="./assets/brain256.png" width="300" alt="brain" />
      </div>
    </div>
    <div class="header">
      <h1>SADAI</h1>
      <p class="entranceSentence">Silence`s AI companion</p>
      <div class="theme-switcher">
        <theme-switcher @getColorScheme="setColorSchemeToggler"></theme-switcher>
      </div>
      <div
        class="imageWrapper"
        @mouseover="sadaiImagePopupShow"
        @mouseleave="sadaiImagePopupClose"
      >
        <dot-loader
          v-if="changePopupState"
          class="logoSpinner"
          :loading="loadingTodayAiToolSection && loadingTodayImageSection"
          :color="logoSpinnerColor"
          :size="logoSpinnerSize"
        ></dot-loader>
        <div class="imgOverlay" v-if="changePopupState">
          <p>{{ getTodaySadMessage() }}</p>
        </div>
        <img src="./assets/appLogo.png" alt="" />
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>

    <div class="tool-sections-wrapper" :class="getThemeClass">
      <div class="flama-wrapper">
        <Flama />
      </div>
      <div
        class="tool-sections"
        :class="getThemeClass"
        v-if="contentData.dailyAiTool"
      >
        <ToolSection :modelValue="contentData.dailyAiTool" />
      </div>
      <div class="tool-sections" v-else :class="getThemeClass">
        <h3 style="color: black">
          No AI tool suggestion today
          <a style="color: black" href="mailto:contact@enginkaratas.com"
            >contact</a
          >
        </h3>
      </div>

      <div
        class="tool-sections"
        v-if="contentData.dailyAiImage"
        :class="getThemeClass"
      >
        <ToolSection :dailyAiImage="contentData.dailyAiImage" />
      </div>
      <div class="tool-sections" v-else :class="getThemeClass">
        <h3 style="color: black">No AI tool suggestion today:(</h3>
      </div>
    </div>
    <div class="footer" :class="getThemeClass">
      <a target="_blank" href="http://www.enginkaratas.com"
        >www.enginkaratas.com</a
      >
    </div>
  </div>
</template>

<script setup>
import ToolSection from "./components/toolsection.vue";
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import axios from "axios";
import Flama from "./components/flama.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

const logoSpinnerColor = "#f1c4ed";
const logoSpinnerSize = "120px";
let themeColor = ref("light");
let loadingTodayAiToolSection = ref(true);
let loadingTodayImageSection = ref(true);
const contentData = reactive({
  dailyAiTool: null,
  dailyAiImage: null,
});
let popupShowState = ref(false);
onMounted(() => {
  loadingTodayAiToolSection = true;
  loadingTodayImageSection = true;
  getDailyAiTool();
  getDailyAiImage();
});
const getThemeClass = computed(() => {
  return themeColor.value == "dark" ? "dark" : "light";
});
const setColorSchemeToggler = (colorScheme) => {
  themeColor.value = colorScheme;
};

const isThemeLight = computed(() => {
  return isThemeLight.value;
});

// let isThemeLight = ref(true);
const getThemeColor = computed(() => {
  return themeColor.value;
});
const changePopupState = computed(() => {
  return popupShowState.value;
});
const changeThemeState = computed(() => {
  return isThemeLight.value;
});

const getTodaySadMessage = () => {
  const sadMessages = [
    `“Life is just a series of goodbyes.”`,
    `“Love often fades, leaving echoes of what once was.”`,
    `“The stars above mock my insignificance.”`,
    `“Time erases all traces of our existence.”`,
    `“Dreams shattered, hope withers away.”`,
    `“Loneliness echoes in the empty chambers of the heart.”`,
    `“Regret lingers like a persistent shadow.”`,
    `“Memories fade, leaving behind an ache.”`,
    `“The laughter of yesterday is silenced by the tears of today.”`,
    `“Promises are broken, leaving behind shattered trust.”`,
    `“Lost in a world that doesn't notice my absence.”`,
    `“The beauty of life is marred by the stain of pain.”`,
    `“Longing for something just out of reach.”`,
    `“Hearts entwined, only to be torn apart.”`,
    `“Darkness descends, swallowing the light.”`,
    `“The song of sorrow plays on an endless loop.”`,
    `“Happiness slips through fingers like sand.”`,
    `“The mirror reflects a face marked by time's passage.”`,
    `“Hopelessness wraps its cold arms around my soul.”`,
    `“Life's canvas painted with hues of sorrow and regret.”`,
  ];
  return sadMessages[Math.floor(Math.random() * sadMessages.length)];
};

const sadaiImagePopupShow = () => {
  popupShowState.value = true;
};
const sadaiImagePopupClose = () => {
  popupShowState.value = false;
};

const getDailyAiTool = async () => {
  await axios
    .get("https://wqvjsawt4m.execute-api.eu-north-1.amazonaws.com/getAi")
    .then((fetched) => {
      contentData.dailyAiTool = fetched.data[0];
      contentData.dailyAiTool.videoIframeAdress =
        contentData.dailyAiTool.videoIframeAdress.replace(
          "watch?v=",
          "embed/"
        );
      loadingTodayAiToolSection = false;
    })
    .catch((error) => {
      console.log(error);
      loadingTodayAiToolSection = false;
    });
  loadingTodayAiToolSection = true;
};

const getDailyAiImage = async () => {
  await axios
    .get("https://7wd4vnk343.execute-api.eu-north-1.amazonaws.com/")
    .then((fetched) => {
      loadingTodayImageSection = false;
      contentData.dailyAiImage = fetched.data;
    })
    .catch((error) => {
      loadingTodayImageSection = false;
    });
  loadingTodayImageSection = true;
};
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: color 0.5s white;
}

.v-enter-from,
.v-leave-to {
  color: red;
}
#app {
  .brainImageWrapper {
    .right {
      position: absolute;
      right: -75px;
      top: -50px;
    }
    .left {
      position: absolute;
      left: -75px;
      top: -50px;
    }
  }
  .imageWrapper {
    position: relative;
    .logoSpinner {
      position: absolute;
      top: 15px;
      right: 25px;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 10px solid #f1c4ed;
    }
  }
  .header {
    p {
      margin-bottom: 1em;
      opacity: 0.8;
      font-style: italic;
      font-size: 1.1em;
    }
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-bottom: 10px;
      font-size: 50px;
      color: #d3e5e5;
    }
    h3 {
      margin-top: 0;
      font-size: 30px;
      color: #f1c4ed;
    }
  }
  .imgOverlay {
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
      font-size: 1em;
      margin: 0;
      padding: 1.5em;
    }
    //zindex top
    z-index: 1;
    opacity: 0.8;
  }

  .tool-sections-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #a1bbca;
    .flama-wrapper {
      display: flex;
      justify-content: right;
      margin-bottom: -40px;
      margin-right: 20px;
    }
  }

  .tool-sections {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    background-color: #a1bbca;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .tool-sections.dark {
    background-color: #abbbbb;
  }

  .tool-sections.light {
    background-color: #d3e5e5;
  }
  .footer {
    display: flex;
    justify-content: center;
    font-size: 1em;
    opacity: 0.8;
    a {
      color: #393939;
    }
  }
}
.footer.dark {
  background-color: #abbbbb;
}
.footer.light {
  background-color: #d3e5e5;
}

#app .dark {
  background-color: #000000;
}
#app .light {
  background-color: #a1bbca;
}
</style>
