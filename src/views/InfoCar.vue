<template>
  <HeaderComponent />
  <div class="wrapper__info__car">
    <div class="wrapper__info__car__inner">
      <div class="block__name__car__price">
        <p>Название: <span>Цена:</span></p>
      </div>
      <div class="blocks__info__img">
        <div class="block__information__car">
          <p>Марка:</p>
          <p>Модель:</p>
          <p>Поколение:</p>
          <p>Конфигурация:</p>
          <p>Пробег:</p>
          <p>Цена:</p>
        </div>
        <div class="block__info__img__car">
          <Galleria
            :numVisible="5"
            :responsiveOptions="responsiveOptions"
            :value="imagesCar"
          >
            <template #item="slotProps">
              <img
                :alt="slotProps.item.alt"
                :src="slotProps.item.src"
                class="img__galleria"
              />
            </template>
            <template #thumbnail="slotProps">
              <img
                :alt="slotProps.item.alt"
                :src="slotProps.item.src"
                class="img__galleria__down"
              />
            </template>
          </Galleria>
        </div>
      </div>
      <div class="block__description__car">
        <p>Комментарии продавца:</p>
      </div>
      <div class="block__seller">
        <div class="block__seller__img__username">
          <img
            :src="require('@/assets/img/Rectangle 26.jpeg')"
            alt=""
            class="block__seller__img"
          />
          <p>Глеб</p>
        </div>
        <Button class="p-button-text" icon="pi pi-comment" label="Написать" />
        <Button :label="labelNumberButton" class="p-button-info" />
      </div>
      <Carousel
        :circular="true"
        :numScroll="3"
        :numVisible="3"
        :responsive-options="responsiveOptionsTwo"
        :value="products"
        style="width: 100%"
      >
        <template #header>
          <p class="p-carousel-header">Похожие автомобили</p>
        </template>
        <template #item="slotProps">
          <div style="display: flex; justify-content: center">
            <div class="p-carousel-content">
              <div class="p-carousel-items-content">
                <img
                  :alt="slotProps.data.name"
                  :src="slotProps.data.src"
                  class="carousel__img"
                />
              </div>
              <div>
                <p class="p-carousel-header">{{ slotProps.data.name }}</p>
                <p class="p-carousel-header">{{ slotProps.data.price }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "InfoCar",
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      imagesCar: [
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 1",
          title: "Рисунок 1",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 3",
          title: "Рисунок 3",
        },
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 2",
          title: "Рисунок 2",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 4",
          title: "Рисунок 1",
        },
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 5",
          title: "Рисунок 2",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
        },
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 5",
          title: "Рисунок 2",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "768px",
          numVisible: 5,
        },
        {
          breakpoint: "500px",
          numVisible: 4,
        },
        {
          breakpoint: "420px",
          numVisible: 3,
        },
        {
          breakpoint: "360px",
          numVisible: 2,
        },
      ],
      responsiveOptionsTwo: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "550px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      labelNumberButton: "Показать телефон",
      products: [
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
        {
          src: require("../assets/img/Rectangle 26.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
        {
          src: require("../assets/img/Rectangle 27.jpeg"),
          alt: "Рисунок 6",
          title: "Рисунок 3",
          name: "Lada Granta",
          price: "1000000",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.wrapper__info__car {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.wrapper__info__car__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 940px;
  height: 100%;
  flex-direction: column;
}

.blocks__info__img {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.block__info__img__car {
  width: 50%;
  height: 100%;
}

.img__galleria {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.img__galleria__down {
  width: 60px;
}

.block__seller {
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 4px 39px 1px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background: #ffffff;
  padding: 25px;
}

.block__seller__img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
}

.block__seller__img__username {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel__img {
  width: 90%;
  height: 150px;
  object-fit: cover;
}

@media screen and (max-width: 1000px) {
  .wrapper__info__car__inner {
    width: 768px;
  }
  .blocks__info__img {
    flex-direction: column-reverse;
  }
  .block__info__img__car {
    width: 100%;
    height: 100%;
  }
  .img__galleria {
    width: 100%;
    height: 66vh;
    object-fit: cover;
  }
}

@media screen and (max-width: 800px) {
  .wrapper__info__car__inner {
    width: 100%;
    padding: 0 1rem;
  }
}

@media screen and (max-width: 500px) {
  .block__seller {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
}

@media screen and (max-width: 500px) {
  .img__galleria {
    height: 35vh;
  }
}
</style>
