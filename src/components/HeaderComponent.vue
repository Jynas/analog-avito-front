<template>
  <div class="header">
    <div class="header_inner">
      <p class="logo">Auto<span>Sport</span></p>
      <Button
        v-if="!table"
        class="p-button-warning p-button-sm"
        icon="pi pi-plus-circle"
        label="Разместить объявление"
      />
      <a v-if="!table" class="log__in" href="#">Вход и Регистрация</a>
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
      :style="{ width: '400px' }"
      header="Header"
    >
      <template #header>
        <p class="text__header__modal">Регистрация</p>
      </template>

      <template #default>
        <div class="block__login">
          <div>
            <InputText
              v-model="register.userName"
              :style="{ width: '95px' }"
              placeholder="Имя"
              type="text"
            />
            <InputText
              v-model="register.userSurname"
              :style="{ width: '95px' }"
              placeholder="Фамилия"
              type="text"
            />
          </div>
          <InputText
            v-model="register.userLogin"
            :style="{ width: '195px' }"
            placeholder="Логин"
            type="text"
          />
          <Password
            v-model="register.password"
            :feedback="true"
            :style="{ width: '195px' }"
            placeholder="Пароль"
          />
          <Password
            v-model="register.passwordTwo"
            :feedback="false"
            :style="{ width: '195px' }"
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
      :style="{ width: '400px' }"
      header="Header"
    >
      <template #header>
        <p class="text__header__modal">Вход</p>
      </template>

      <template #default>
        <div class="block__login">
          <InputText
            v-model="login.userName"
            :style="{ width: '195px' }"
            placeholder="Логин"
            type="text"
          />
          <Password
            v-model="login.password"
            :feedback="false"
            :style="{ width: '195px' }"
            placeholder="Пароль"
          />
        </div>
      </template>
      <template #footer>
        <Button
          class="p-button-warning p-button-sm"
          label="Войти"
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
          to: "/",
          icon: "pi pi-plus-circle",
          command: () => {
            console.log("Разместить объявление");
          },
        },
        {
          label: "Регистрация",
          to: "/",
          icon: "pi pi-user-plus",
          visible: () => this.isLogin !== true,
          command: () => {
            this.modalRegister = true;
          },
        },
        {
          label: "Вход",
          to: "/",
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
          to: "/",
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
  font-family: Play-Bold;
  font-size: 33px;
  color: #ffffff;
  margin: 0;

  span {
    color: #ffc107;
  }
}

.button__header {
  @include flex();
  font-family: Play-Bold;
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
  font-family: Play-Bold;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
}

.img__button {
  width: 15px;
  height: 15px;
  margin-right: 14px;
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
