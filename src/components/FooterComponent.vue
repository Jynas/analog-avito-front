<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="block__soc">
        <img
          :src="require('../assets/img/footer/tt.svg')"
          alt=""
          class="img__block__soc"
        />
        <img
          :src="require('../assets/img/footer/tg.svg')"
          alt=""
          class="img__block__soc"
        />
        <img
          :src="require('../assets/img/footer/facebook.svg')"
          alt=""
          class="img__block__soc"
        />
        <img
          :src="require('../assets/img/footer/inst.svg')"
          alt=""
          class="img__block__soc"
        />
        <img
          :src="require('../assets/img/footer/vk.svg')"
          alt=""
          class="img__block__soc"
        />
      </div>
      <div class="block__links">
        <a class="footer__links" href="">О проекте</a>
        <a class="footer__links" href="">Помощь</a>
        <a class="footer__links" href="">Правила</a>
        <a class="footer__links" href="">Для СМИ</a>
      </div>
      <p class="footer__text">
        © 1999-{{ new Date().getFullYear() }} AutoSport
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #bbbbbb;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 44px;
  padding-top: 46px;
}

.img__block__soc {
  width: 60px;
  height: 60px;
}

.footer__inner {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block__soc {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.footer__links {
  text-decoration: none;
  font-size: 12px;
  color: #1b75cc;
}

.block__links {
  display: flex;
  width: 394px;
  justify-content: space-between;
  margin-top: 51px;
}

.footer__text {
  color: #bbbbbb;
  font-size: 12px;
  margin: 37px 0 37px 0;
}

@media screen and (max-width: 550px) {
  .footer__inner {
    width: 100%;
  }
  .block__soc,
  .block__links {
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
  .img__block__soc {
    width: 45px;
    height: 45px;
  }
}
</style>
