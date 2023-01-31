<template>
  <AwesomeVueStarRating
    :star="starDefault.star"
    :disabled="starDefault.disabled"
    :maxstars="starDefault.maxstars"
    :starsize="starDefault.starsize"
    :hasresults="starDefault.hasresults"
    :hasdescription="starDefault.hasdescription"
    :ratingdescription="starDefault.ratingdescription"
  />
</template>

<script setup lang="ts">
import AwesomeVueStarRating from "awesome-vue-star-rating";

const starDefault = {
  star: 5, // default star
  ratingdescription: [
    {
      text: "Poor",
      class: "star-poor",
    },
    {
      text: "Below Average",
      class: "star-belowAverage",
    },
    {
      text: "Average",
      class: "star-average",
    },
    {
      text: "Good",
      class: "star-good",
    },
    {
      text: "Excellent",
      class: "star-excellent",
    },
  ],
  hasresults: true,
  hasdescription: true,
  starsize: "lg", //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
  maxstars: 5,
  disabled: false,
};
</script>

<style scoped lang="scss">
.star {
  color: red;
}
.star.active {
  color: red;
}
.list,
.list.disabled {
  &:hover {
    .star {
      color: red !important;
    }
    .star.active {
      color: red;
    }
  }
}
</style>
