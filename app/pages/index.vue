<template>
  <div>
    <ULandingHero
      title="Coral Despertacor"
      description="Aqui una frase (missió) que defineixi la coral"
    >
      <template #links>
        <UButton
          to="./repertori"
          target="_blank"
          size="lg"
          icon="i-heroicons-book-open"
        >
          Repertori
        </UButton>

        <UButton
          to="https://ui.nuxt.com/pro/components"
          target="_blank"
          size="lg"
          color="gray"
          icon="i-heroicons-cube-transparent"
        >
          Components
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection
      headline="Features"
      id="features"
      title="Gaudeix del dijous vespre com fa temps que no fas"
    >
      <template #description>
        Transforma els dijous al vespre en un esdeveniment social i divertit.
      </template>

      <UPageGrid>
        <UPageCard
          icon="i-heroicons-microphone"
          title="Canta"
          description="Text per aquesta tarjeta."
        />
        <UPageCard
          icon="i-heroicons-user-group"
          title="Gent"
          description="Text per aquesta tarjeta."
        />
        <UPageCard
          icon="i-heroicons-heart"
          title="Cor"
          description="Text per aquesta tarjeta."
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        title="No t'ho pensis més"
        description="Vine a probar sense compromís."
      >
        <template #links>
          <UButton
            to="#"
            target="_blank"
            size="lg"
            color="black"
            icon="i-heroicons-credit-card"
          >
            Instagram
          </UButton>
          <UButton
            to="#"
            target="_blank"
            size="lg"
            color="gray"
            trailing-icon="i-heroicons-musical-note"
          >
            Concerts
          </UButton>
        </template>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
