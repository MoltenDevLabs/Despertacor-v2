<template>
  <div class="flex flex-col justify-center text-center">
    <h1 class="font-bold my-8 underline">{{ song?.title }}</h1>
    <p>{{ song?.lyrics }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRepertoriStore } from '../../../stores/repertoriStore.js'

const route = useRoute()
const repertoriStore = useRepertoriStore()
const song = repertoriStore.songs.find((s) => s.id === Number(route.params.id))
</script>
