<template>
  <HeaderComponent />
  <div class="wrapper__main__page">
    <div class="wrapper__main__page__inner">
      <p class="text__name__page">Купить автомобиль</p>
      <div v-if="!table" class="block__info__car">
        <div class="block__info__inner">
          <Dropdown
            v-model="MarkCar"
            :options="marks"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Марка"
          ></Dropdown>
          <Dropdown
            v-model="ModelCar"
            :options="models"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Модель"
          ></Dropdown>
          <Button class="p-button-warning p-button-sm" label="Поиск"></Button>
        </div>
        <div class="block__info__inner">
          <Dropdown
            v-model="ConCar"
            :options="cons"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Конфигурация"
          ></Dropdown>
          <InputNumber
            v-model="MileageCar"
            class="p-inputtext-sm"
            placeholder="Пробег от"
          />
          <InputNumber
            v-model="MileageCarMax"
            class="p-inputtext-sm"
            placeholder="До"
          />
        </div>
        <div class="block__info__inner">
          <Dropdown
            v-model="GenCar"
            :options="gens"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Поколение"
          ></Dropdown>
          <InputNumber
            v-model="PriceCar"
            class="p-inputtext-sm"
            currency="RUB"
            locale="ru-RU"
            mode="currency"
            placeholder="Цена от"
          />
          <InputNumber
            v-model="PriceCarMax"
            class="p-inputtext-sm"
            currency="RUB"
            locale="ru-RU"
            mode="currency"
            placeholder="До"
          />
        </div>
      </div>
      <div v-if="table" class="block__info__car">
        <div class="block__info__inner">
          <InputNumber
            v-model="PriceCar"
            class="p-inputtext-sm"
            currency="RUB"
            locale="ru-RU"
            mode="currency"
            placeholder="Цена от"
          />
          <InputNumber
            v-model="PriceCarMax"
            class="p-inputtext-sm"
            currency="RUB"
            locale="ru-RU"
            mode="currency"
            placeholder="До"
          />
          <Button class="p-button-warning p-button-sm" label="Поиск" />
        </div>
        <div class="block__info__inner">
          <Dropdown
            v-model="ConCar"
            :options="cons"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Конфигурация"
          ></Dropdown>
          <InputNumber
            v-model="MileageCar"
            class="p-inputtext-sm"
            placeholder="Пробег от"
          />
          <InputNumber
            v-model="MileageCarMax"
            class="p-inputtext-sm"
            placeholder="До"
          />
        </div>
        <div class="block__info__inner">
          <Dropdown
            v-model="MarkCar"
            :options="marks"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Марка"
          ></Dropdown>
          <Dropdown
            v-model="ModelCar"
            :options="models"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Модель"
          ></Dropdown>
          <Dropdown
            v-model="GenCar"
            :options="gens"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Поколение"
          ></Dropdown>
        </div>
      </div>
      <div class="block__all__car">
        <div class="block__select__sort">
          <Dropdown
            v-model="SortCar"
            :options="SortCarOptions"
            class="p-inputtext-sm"
            option-label="name"
            optionLabel="name"
            placeholder="Сортировка"
          ></Dropdown>
          <Dropdown
            v-model="TimeStart"
            :options="TimeStartOptions"
            class="p-inputtext-sm"
            optionLabel="name"
            placeholder="Дата"
          ></Dropdown>
        </div>
        <div class="block__all__cars">
          <Card v-for="car in AllCars" :key="car">
            <template #header>
              <img
                :src="require('../assets/img/Rectangle 25.png')"
                alt=""
                class="img__car"
              />
            </template>
            <template #title
              ><p class="p-card-title text__card__max">
                Название машины
              </p></template
            >
            <template #content> Описание машины</template>
            <template #footer>
              <Button label="Просмотр" />
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "MainPage",
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      table: false,
      MarkCar: null,
      ModelCar: null,
      GenCar: null,
      ConCar: null,
      ModCar: null,
      MileageCar: null,
      MileageCarMax: null,
      PriceCar: null,
      PriceCarMax: null,
      TimeStart: null,
      SortCar: null,
      AllCars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      marks: [
        { name: "Lada" },
        { name: "Volvo" },
        { name: "BMW" },
        { name: "Toyota" },
      ],
      SortCarOptions: [
        { name: "По дате размещения" },
        { name: "По возрастанию цены" },
        { name: "По убыванию цены" },
      ],
      TimeStartOptions: [
        { name: "За все время" },
        { name: "За сутки" },
        { name: "За 2 дня" },
        { name: "За 3 дня" },
        { name: "За неделю" },
        { name: "За 2 недели" },
        { name: "За 3 недели" },
        { name: "За месяц" },
      ],
      models: [1, 2, 3, 4],
      gens: [1, 2, 3, 4],
      cons: [1, 2, 3, 4],
      mods: [1, 2, 3, 4],
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  methods: {
    onResize() {
      window.innerWidth <= 800 ? (this.table = true) : (this.table = false);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__main__page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.wrapper__main__page__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 940px;
  height: 100%;
  flex-direction: column;
}

.text__name__page {
  font-family: "Play-Regular", serif;
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  color: #000000;
  text-align: left;
}

.text__card__max {
  width: 250px;
  white-space: pre-wrap;
}

.block__all__cars {
  display: flex;
  padding: 15px 0;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}

.block__info__car {
  padding: 30px;
  width: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 0 4px 39px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  gap: 1rem;
}

.select__info {
  width: 100%;
  min-width: 140px;
  height: 30px;
  border: 1px solid #000000;
  background: #ffffff;
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  margin-bottom: 25px;
}

.block__info__inner {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

.block__info__small__select {
  display: flex;
  justify-content: space-between;
}

.input__info__small {
  width: 95px;
  height: 30px;
  border: 1px solid #000000;
  background: #ffffff;
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  margin-bottom: 25px;
  padding-left: 5px;
}

.button__filter {
  text-decoration: none;
  color: #ffffff;
  background: #ff5c00;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: "Play-Regular", serif;
  font-weight: bold;

  &:hover {
    background: #dc5204;
  }
}

select,
input {
  font-family: "Play-Regular", serif;
  font-weight: bold;
}

.block__all__car {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.block__select__sort {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
  margin: 30px 0 0 0;
}

.select__sort {
  width: 170px;
  height: 30px;
  border: 1px solid #000000;
  background: #ffffff;
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  margin-right: 35px;
  margin-bottom: 30px;
}

.block__car {
  border-top: 1px solid #939393;
  padding-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
}

.block__car__inner {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 100%;
  padding-right: 100px;
}

.block__car__inner__one {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.img__car {
  width: auto;
  height: auto;
  padding-top: 15px;
}

.text__car {
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 17px;
  margin: 10px 0 10px 0;
}

.block__car__inner__two {
  display: flex;
  justify-content: flex-start;
}

.text__car__city {
  color: #555555;
  font-size: 15px;
  text-align: left;
}

.text__car__two {
  font-family: "Play-Regular", serif;
  font-weight: bold;
  font-size: 17px;
  margin: 10px 30px 10px 0;
}

@media screen and (max-width: 1000px) {
  .wrapper__main__page__inner {
    width: 768px;
  }
  .text__card__max {
    width: 213px;
  }
}

@media screen and (max-width: 800px) {
  .wrapper__main__page__inner {
    width: 100%;
    padding: 0 15px;
  }
  .text__card__max {
    width: 200px;
  }
  .block__select__sort {
    justify-content: center;
  }
  .block__all__cars {
    justify-content: center;
  }
  .block__info__car {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 500px) {
  .text__card__max {
    width: 250px;
  }
}
</style>
