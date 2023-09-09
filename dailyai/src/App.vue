<script setup></script>

<template>
  <div id="app">
    <div class="brainWrapper">
      <div class="right">
        <img src="./assets/brain.png" alt="" srcset="" />
      </div>
      <div class="left">
        <img src="./assets/brain.png" alt="" srcset="" />
      </div>
    </div>
    <div class="header">
      <h1 class="h1Header">SAD AI</h1>
      <p class="entranceSentence">Silence`s AI companion</p>
      <div class="imageWrapper">
        <img class="appLogoImg" src="./assets/appLogo.png" alt="" />
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>

    <div class="tool-sections-wrapper">
      <div class="flamaWrapper">
        <h3>AI TOOL TODAY</h3>
        <p>8.13.2023 Sunday</p>
      </div>

      <div class="toolSections">
        
        <br>
      </div>
      <br>
      <div class="toolSections">
        <div class="card">
          <h1>DAILY AI IMAGE</h1>
          <img src="./assets/aiImage.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 40%;
  position: relative;
  background-color: #a1bbca;
  color: black;

  .right {
    position: absolute;
    top: 0;
    right: 0;
    img {
      width: 200px;
    }
  }
  .left {
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 200px;
    }
  }

  .h1Header {
    color: #d3e5e5;
  }
  .header {
    .appLogoImg {
      border-radius: 50%;
      border: 10px solid #f1c4ed;
    }
    h3 {
      color: #f1c4ed;
      font-size: 1.5em;
    }
  }
  .tool-sections-wrapper{
    position: relative;
    .flamaWrapper{
      background-color: #f1c4ed;
      border-radius: 50% 20%;
      position: absolute;
      right: 0;
      top: 0;
      line-height: .8em;
      h3{
        font-size: 1em;
      }
      p{
        font-size: 1em;
        
      }
    }
    .toolSections{
      background-color: #D3E5E5;
      img{
        width: 100%;
      }
      p{
        text-align: justify;
      }
      button{
        background-color: #f1c4ed;
        color: black;
      }
      iframe{
        width: 100%;
      }
    }
  }
}
</style>
