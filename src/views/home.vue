<script setup>
import pokeball from "../components/pokeball.vue";

// const listPokemon = ref([]);
// const page = ref(1);
// const prev = ref("");
// const next = ref("");

// async function getPokemon(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   listPokemon.value = data.results;
//   prev.value = data.previous;
//   next.value = data.next;
// }

// function getPrev() {
//   page.value--;
//   getPokemon(prev.value);
// }
</script>

<template>
  <div class="flex justify-center flex-wrap gap-2">
    <pokeball v-for="pokemon in listPokemon" width="w-1/5" :key="pokemon.id" :pokemon="pokemon" />
  </div>
  <div class="mt-4 flex justify-center gap-4 text-white font-semibold" v-if="prev || next">
    <button v-if="prev" @click="getPrev" class="">Prev</button>
    <p class="font-normal">{{ page }}</p>
    <button v-if="next" @click="getNext" class="">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listPokemon: [],
      allPokemon: [],
      prev: "",
      next: "",
      page: 1,
      latestlink: "",
    };
  },
  props: {
    search: {
      type: String,
    },
  },
  methods: {
    getPrev() {
      this.page--;
      this.getPokemon(this.prev);
      this.latestlink = this.prev;
    },
    getNext() {
      this.page++;
      this.getPokemon(this.next);
      this.latestlink = this.next;
    },
    async getPokemon(link) {
      const url = link ? link : "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(url);
      const data = await response.json();
      const pokemon = data.results;
      this.prev = data.previous;
      this.next = data.next;

      this.listPokemon = [];
      pokemon.forEach(async (pokemon) => {
        await this.getEachPokemon(pokemon.name);
      });
      // console.log(this.listPokemon);
    },
    async getAllPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10000");
      const data = await response.json();
      const pokemon = data.results;

      this.allPokemon = pokemon;
    },
    async getEachPokemon(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      this.listPokemon.push(data);
      this.listPokemon.sort((a, b) => {
        a.id - b.id;
      });
    },
  },
  mounted() {
    this.getPokemon();
    this.getAllPokemon();
  },
  watch: {
    search() {
      if (this.search) {
        let filteredPoke = this.allPokemon.filter((pokemon) => {
          return pokemon.name.includes(this.search);
        });
        this.listPokemon = [];
        // console.log(filteredPoke);
        filteredPoke.forEach(async (pokemon) => {
          await this.getEachPokemon(pokemon.name);
        });
      } else {
        this.getPokemon(this.latestlink);
      }
    },
  },
};
</script>
