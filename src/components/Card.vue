<template>
  <div class="flex justify-center" data-aos="slide-up" data-aos-duration="8000">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
      <div
        class="card card-compact w-96 bg-base-100 shadow-xl"
        v-for="data in datas"
        :key="data.id"
      >
        <figure>
          <img :src="data.img" alt="gambar" />
        </figure>
        <div class="card-body">
          <router-link :to="{ name: 'detail', params: { id: data.id } }">
            <h2 class="card-title font-bold">{{ data.title }}</h2>
          </router-link>
          <p class="text-slate-600">
            {{ data.description }}
          </p>
          <div class="card-actions justify-end">
            <p class="text-slate-600">{{ data.date }}</p>
            <router-link :to="{ name: 'detail', params: { id: data.id } }">
              <button class="font-semibold text-slate-800">Read More</button>
            </router-link>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { datas } from "@/data";

export default {
  data() {
    return { datas };
  },
};
</script>

<style></style>