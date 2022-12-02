<template>
  <router-view />
</template>
<style lang="scss">
@font-face {
  font-family: "Play-Bold";
  src: url("../src/assets/fonts/Play-Bold.ttf");
}

@font-face {
  font-family: "Play-Regular";
  src: url("../src/assets/fonts/Play-Regular.ttf");
}

@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "Play-Regular", serif;
  text-align: center;
  color: #000000;
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
