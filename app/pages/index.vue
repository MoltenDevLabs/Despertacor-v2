<template>
  <div>
    <div class="relative">
      <div 
        class="absolute inset-0 bg-cover bg-center z-0" 
        style="background-image: url('https://picsum.photos/640/360');"
      >
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Hero content -->
    <div class="relative z-10">
      <ULandingHero
        title="Coral Despertacor"
        description="Aqui una frase (missió) que defineixi la coral"
        class="text-white"
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
            to="#Artistes"
            target="_blank"
            size="lg"
            color="gray"
            icon="i-heroicons-cube-transparent"
          >
            Artistes
          </UButton>
        </template>
      </ULandingHero>
    </div>
  </div>

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
      <UPageHero
        id="artistes"
        title="Coneix el director"
        description="Aqui va alguna cosa sobre el Noe, i al link un enllaç a la seva pagina"
        align="left"
        :links="[{ label: 'Learn more', color: 'primary', size: 'lg', trailingIcon: 'i-heroicons-arrow-right-20-solid' }]"
      >
        <img
          src="https://picsum.photos/360/360"
          class="mx-auto w-3/4 rounded-full shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
      </UPageHero>

      <span class="mx-auto text-3xl font-bold">Coneix els cantants</span>
      <UPageGrid :ui="{
        wrapper: 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-8'
      }">
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <UAvatar
            size="3xl"
            src="https://picsum.photos/360/360"
            alt="Avatar"
          />
          <span class="text-lg font-medium">Nom Cognom</span>
        </div>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingFAQ 
      :items="FAQitems"
      variant="ghost"
      />
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

<script setup>
  const FAQitems = [{
    label: 'On i quan assajeu?',
    content: 'Tots els dijous de 21h a 22h al segon pis del Casal Despertaferro.'
  }, {
    label: 'No he cantat mai, no se si la coral es per mi.',
    content: 'La coral Despertacor es per tothom qui tingui ganes de passar una bona estona cantant i rient.'
  }, {
    label: "Puc venir a provar si m'agrada?",
    content: 'I tant! Vine a probar sense cap compromís.'
  }, {
    label: 'Dubte?',
    content: 'Resposta.'
  }]
</script>