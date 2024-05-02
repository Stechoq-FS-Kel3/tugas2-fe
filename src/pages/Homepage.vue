<template>
  <section>
    <div class="grid grid-cols-2 gap-4 text-center my-24 md:mb-48">
      <div class="flex justify-center items-center text-center">
        <h1 class="text-xl md:text-5xl font-bold text-left">
          Terhubung <br />
          Dengan Dunia <br />
          Melalui Tulisan
        </h1>
      </div>
      <div class="flex justify-center items-center">
        <img :src="HeroLogo" alt="" />
      </div>
    </div>
  </section>
  <card />
</template>

<script>
import HeroLogo from "@/assets/hero.png";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return { HeroLogo };
  },
};
</script>
