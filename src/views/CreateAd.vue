<template>
  <HeaderComponent />
  <div class="wrapper__create__ad">
    <div class="wrapper__create__ad__inner">
      <Dropdown
        v-model="markCar"
        :options="marks"
        optionLabel="name"
        placeholder="Марка"
      />
      <Dropdown
        v-model="modelCar"
        :options="models"
        optionLabel="name"
        placeholder="Модель"
      />
      <Dropdown
        v-model="genCar"
        :options="gens"
        optionLabel="name"
        placeholder="Поколение"
      />
      <Dropdown
        v-model="conCar"
        :options="cons"
        optionLabel="name"
        placeholder="Конфигурация"
      />
      <FileUpload
        :fileLimit="10"
        :maxFileSize="10000000"
        :multiple="true"
        accept="image/*"
        name="car"
      >
        <template
          #header="{ chooseCallback, uploadCallback, clearCallback, files }"
        >
          <div>
            <p class="p-fileupload-file-name">Фотографии автомобиля</p>
            <div class="block__buttons__upload">
              <Button
                class="p-button-rounded"
                icon="pi pi-images"
                @click="chooseCallback()"
              ></Button>
              <Button
                :disabled="!files || files.length === 0"
                class="p-button-rounded p-button-success"
                icon="pi pi-cloud-upload"
                @click="
                  () => {
                    uploadCallback();
                    myUploader(files);
                  }
                "
              ></Button>
              <Button
                :disabled="!files || files.length === 0"
                class="p-button-rounded p-button-danger"
                icon="pi pi-times"
                @click="clearCallback()"
              ></Button>
            </div>
          </div>
        </template>
      </FileUpload>
      <InputNumber v-model="milCar" placeholder="Пробег" />
      <InputNumber v-model="priceCar" placeholder="Цена" />
      <Calendar
        v-model="dateCar"
        dateFormat="mm/yy"
        placeholder="Дата покупки автомобиля"
        view="month"
      />
      <Textarea
        v-model="description"
        :autoResize="true"
        cols="30"
        placeholder="Честно опишите достоинства и недостатки своего автомобиля"
        rows="5"
      />
      <Dropdown
        v-model="ptsCar"
        :options="pts"
        option-label="name"
        placeholder="ПТС"
      />
      <InputText v-model="stateNumber" placeholder="Гос номер" />
      <InputText v-model="vinNumber" placeholder="VIN/ номер кузова" />
      <InputText
        v-model="stsCar"
        placeholder="Свидетельство о регистрации (СТС)"
      />
      <InputText v-model="colorCar" placeholder="Цвет машины" />
      <Button label="Разместить объявление" />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "CreateAd",
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      markCar: null,
      modelCar: null,
      genCar: null,
      conCar: null,
      milCar: null,
      priceCar: null,
      photoCar: null,
      ptsCar: null,
      dateCar: null,
      description: null,
      stateNumber: null,
      vinNumber: null,
      stsCar: null,
      colorCar: null,
      imgCar: null,
      marks: [],
      models: [],
      gens: [],
      cons: [],
      mils: [],
      pts: [
        { name: "Оригинал ПТС" },
        { name: "Дубликат ПТС" },
        { name: "Нет ПТС" },
      ],
    };
  },
  methods: {
    myUploader(event) {
      this.imgCar = event;
      console.log(this.imgCar);
    },
  },
};
</script>

<style lang="scss">
.wrapper__create__ad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.wrapper__create__ad__inner {
  display: flex;
  justify-content: center;
  width: 640px;
  height: 100%;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
  padding: 2rem 0;
}

.block__buttons__upload {
  display: flex;
  gap: 1rem;
}

@media screen and (max-width: 1000px) {
  .wrapper__create__ad__inner {
    width: 768px;
  }
}

@media screen and (max-width: 800px) {
  .wrapper__create__ad__inner {
    width: 100%;
    padding: 2rem 1rem;
  }
}
</style>
