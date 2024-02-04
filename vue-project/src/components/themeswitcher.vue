<template>
  <div class="switcher" :class="getThemeClass">
    <input
      @click="switchColorScheme()"
      :checked="!isThemeLight"
      type="checkbox"
      class="checkbox"
      id="checkbox"
    />
    <label for="checkbox" class="checkbox-label">
      <i class="fas fa-sun">
        <font-awesome-icon icon="fa-solid fa-sun" />
      </i>
      <i class="fas fa-moon">
        <font-awesome-icon icon="fa-solid fa-moon" />
      </i>
      <span class="ball"></span>
    </label>
  </div>
</template>

<script setup>
import { computed, defineEmits, ref, watch, onMounted } from "vue";

const emit = defineEmits("getColorScheme");
const isThemeLight = ref(true);

onMounted(() => {
  chrome.storage.local.get("theme", (result) => {
    isThemeLight.value = result.theme === "light";
  });
});

watch(isThemeLight, async (newValue) => {
  const newTheme = newValue ? "light" : "dark";
  await chrome.storage.local.set({ theme: newTheme });
  emit("getColorScheme", isThemeLight.value ? "light" : "dark");
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.theme) {
    isThemeLight.value = changes.theme.newValue === "light";
  }
});

const getThemeClass = computed(() => {
  return isThemeLight.value ? "dark" : "light";
});

const switchColorScheme = () => {
  isThemeLight.value = !isThemeLight.value;
  chrome.storage.local.get("theme", (result) => {
  });
};
</script>

<style>
.checkbox {
  opacity: 0;
  position: absolute;
}
.switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  border-radius: 50px;
}
.checkbox-label {
  width: 50px;
  height: 17px;
  border-radius: 50px;
  position: relative;
  padding: 9px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 5px;
  top: 6px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(34px);
}

/*  Support me if you like it */
.support {
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.support a {
  color: #292c35;
  font-size: 32px;
  backface-visibility: hidden;
  display: inline-block;
  transition: transform 0.2s ease;
}

.support a:hover {
  transform: scale(1.1);
}
</style>
