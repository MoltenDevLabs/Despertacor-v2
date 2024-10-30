<script setup>
const links = [{
  label: 'Features',
  to: '#features',
  exactHash: true
}, {
  label: 'Artistes',
  to: '#artistes',
  exactHash: true
}, {
  label: 'Repertori',
  to: '#repertori',
  exactHash: true
}, {
  label: 'Concerts',
  to: '#concerts',
  exactHash: true
}]

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Coral Despertacor'
const description = 'Web per la coral Despertacor de Reus.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Despertacor <UBadge
        label="Logo"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/MoltenDevLabs"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      Copyright © MoltenDevLabs {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>
