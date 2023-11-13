<script setup></script>

<template>
  <div class="m-4">
    <router-link to="/" class="bg-slate-800 py-2 px-4 rounded-lg m-4 text-white">Back</router-link>
  </div>

  <div class="flex">
    <div class="img w-1/2">
      <img class="w-full h-auto rounded-3xl bg-slate-700" :src="pokemon.sprites.front_default" alt="" />
    </div>
    <div class="txt w-1/2 text-white p-3">
      <h1 class="capitalize font-semibold text-2xl">{{ pokemon.name }}</h1>
      <div>
        <span> | </span>
        <span v-for="item in pokemon.types" class="capitalize"> {{ item.type.name }} | </span>
      </div>
      <div class="stats flex-col flex">
        <h1 class="text-2xl font-semibold">Stat</h1>
        <span class="capitalize" v-for="item in pokemon.stats">{{ item.stat.name }}: {{ item.base_stat }}</span>
      </div>
      <div class="ability flex flex-col">
        <h1 class="text-2xl font-semibold">Ability</h1>
        <span class="capitalize" v-for="item in pokemon.abilities">{{ item.ability.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonName: this.$route.params.name,
      pokemon: {},
    };
  },
  methods: {
    async getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`);
      const data = await response.json();
      this.pokemon = data;
      console.log(this.pokemon);
    },
  },
  created() {
    this.getPokemon();
    // console.log(this.$route.params.name);
  },
};
</script>
