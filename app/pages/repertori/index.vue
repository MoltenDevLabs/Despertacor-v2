<template>
  <div class="flex flex-col justify-center text-center">
    <h1 class="text-3xl font-bold my-8 underline">Repertori</h1>
    <ul>
      <li v-for="song in repertoriStore.songs" :key="song.id" class="mb-2">
        <NuxtLink 
          :to="{ name: 'repertori-id', params: { id: song.id } }"
          class="hover:underline"
        >
          {{ song.title }}
        </NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useRepertoriStore } from "../../../stores/repertoriStore.js"
const repertoriStore = useRepertoriStore();
</script>
