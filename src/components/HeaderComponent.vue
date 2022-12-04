<template>
  <div class="header">
    <div class="header_inner">
      <router-link class="logo" to="/">Auto<span>Sport</span></router-link>
      <router-link class="router__create__ad" to="/create/ad">
        <Button
          v-if="!table"
          class="p-button-warning p-button-sm"
          icon="pi pi-plus-circle"
          label="Разместить объявление"
        />
      </router-link>
      <p v-if="!table" class="log__in">
        <span @click="modalLogin = true">Вход</span>
        и
        <span @click="modalRegister = true">Регистрация</span>
      </p>
      <Button
        v-if="table"
        class="p-button-warning"
        icon="pi pi-bars"
        type="button"
        @click="toggleMenu"
      />
      <TieredMenu ref="menu" :model="LoginItems" :popup="true" />
    </div>
    <Dialog
      v-model:visible="modalRegister"
      :breakpoints="{ '500px': '90vw' }"
      :modal="true"
      :style="{ width: '400px' }"
      header="Header"
    >
      <template #header>
        <p class="text__header__modal">Регистрация</p>
      </template>

      <template #default>
        <div class="block__login" style="margin-top: 1rem">
          <InputText
            v-model="register.userName"
            placeholder="Имя"
            type="text"
          />
          <InputText
            v-model="register.userSurname"
            placeholder="Фамилия"
            type="text"
          />
          <InputText
            v-model="register.userLogin"
            placeholder="Логин"
            type="text"
          />
          <Password
            v-model="register.password"
            :feedback="true"
            placeholder="Пароль"
          />
          <Password
            v-model="register.passwordTwo"
            :feedback="false"
            placeholder="Подтвердить"
          />
        </div>
      </template>
      <template #footer>
        <Button
          class="p-button-warning p-button-sm"
          label="Войти"
          @click="handleSubmitRegister"
        />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="modalLogin"
      :breakpoints="{ '500px': '90vw' }"
      :modal="true"
      :style="{ width: '400px' }"
      header="Header"
    >
      <template #header>
        <p class="text__header__modal">Авторизация</p>
      </template>

      <template #default>
        <div class="block__login" style="margin-top: 1rem">
          <InputText v-model="login.userName" placeholder="Логин" type="text" />
          <Password
            v-model="login.password"
            :feedback="false"
            placeholder="Пароль"
          />
        </div>
      </template>
      <template #footer>
        <Button
          class="p-button-warning p-button-sm"
          label="Войти"
          style="margin-top: 1rem"
          @click="handleSubmitLogin"
        />
      </template>
    </Dialog>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      userName: null,
      userPassword: null,
      login: { userName: null, password: null },
      register: {
        userName: null,
        userSurname: null,
        userLogin: null,
        password: null,
        passwordTwo: null,
      },
      isLogin: false,
      modalLogin: false,
      modalRegister: false,
      headerLink: [{ label: "autoSport" }],
      LoginItems: [
        {
          label: "Разместить объявление",
          to: "/create/ad",
          icon: "pi pi-plus-circle",
        },
        {
          label: "Регистрация",
          icon: "pi pi-user-plus",
          visible: () => this.isLogin !== true,
          command: () => {
            this.modalRegister = true;
          },
        },
        {
          label: "Вход",
          icon: "pi pi-user",
          visible: () => this.isLogin !== true,
          command: () => {
            this.modalLogin = true;
          },
        },
        {
          label: "Профиль",
          to: "/",
          icon: "pi pi-user",
          visible: () => this.isLogin === true,
          command: () => {
            console.log("Профиль");
          },
        },
        {
          separator: true,
          visible: () => this.isLogin === true,
        },
        {
          label: "Выйти",
          icon: "pi pi-power-off",
          visible: () => this.isLogin === true,
          command: () => {
            this.isLogin = false;
          },
        },
      ],
      table: false,
    };
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    onResize() {
      window.innerWidth <= 800 ? (this.table = true) : (this.table = false);
    },
    handleSubmitRegister() {
      console.log("handleSubmitRegister");
      this.isLogin = true;
      this.modalRegister = false;
    },
    handleSubmitLogin() {
      console.log("handleSubmitLogin");
      this.isLogin = true;
      this.modalLogin = false;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
};
</script>

<style lang="scss">
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  @include flex();
  background-color: #000000;
  height: 54px;
}

.header_inner {
  @include flex();
  justify-content: space-between;
  width: 940px;
  height: 100%;
}

.logo {
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 33px;
  color: #ffffff;
  margin: 0;
  text-decoration: none;

  span {
    color: #ffc107;
  }
}

.button__header {
  @include flex();
  font-family: "Play-Regular", serif;
  font-weight: bold;
  background: #ffc107;
  height: 30px;
  width: 254px;
  border-radius: 7px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background: #dc5204;
  }
}

.log__in {
  font-family: "Play-Regular", serif;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
}

.img__button {
  width: 15px;
  height: 15px;
  margin-right: 14px;
}

.router__create__ad {
  text-decoration: none;
}

@media screen and (max-width: 1000px) {
  .header_inner {
    width: 768px;
  }
}

@media screen and (max-width: 800px) {
  .header_inner {
    padding: 0 15px;
  }
}

.block__login {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.text__header__modal {
  width: 100%;
  text-align: center;
}
</style>
