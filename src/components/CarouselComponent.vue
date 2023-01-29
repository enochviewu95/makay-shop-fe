<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="https://picsum.photos/id/123/1980/500" />
    </swiper-slide>
    <swiper-slide
      ><img src="https://picsum.photos/id/456/1980/500"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://picsum.photos/id/678/1980/500"
    /></swiper-slide>
    ...
  </swiper>
</template>
<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, EffectFade],
    };
  },
};
</script>
