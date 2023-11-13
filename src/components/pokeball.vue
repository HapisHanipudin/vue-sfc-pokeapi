<template>
  <RouterLink :to="`/detail/${pokemon.name}`" :class="'flex justify-center bg-slate-500 rounded-lg h-auto relative flex-col ' + width">
    <img :src="pokemon.sprites.front_default" class="w-full h-auto bg z-10" alt="" />
    <img src="../assets/pokeball.png" class="z-0 w-2/3 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
    <p class="text-center capitalize p-3 text-white">{{ pokemon.name }}</p>
  </RouterLink>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    width: {
      type: String,
    },
  },
};
</script>
