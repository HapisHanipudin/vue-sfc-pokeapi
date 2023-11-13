<template>
  <div class="p-4 flex justify-center">
    <img class="w-[350px]" src="../assets/pokemon.png" alt="" />
  </div>
  <div class="flex justify-center">
    <input v-model="search" type="text" class="py-2 px-4 rounded-lg w-96" placeholder="Cari Pokemon" />
    <!-- <button class="py-2 px-4 rounded-e-lg bg-slate-300">Cari</button> -->
  </div>
  <div class="flex justify-center">
    <p v-if="searchWarning" class="text-red-500">Cari minimal {{ minSearch }} karakter</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      minSearch: 3,
      searchWarning: false,
    };
  },
  watch: {
    search() {
      if (this.search.length < this.minSearch && this.search.length > 0) {
        this.searchWarning = true;
        this.$emit("search", "");
      } else {
        this.searchWarning = false;
        this.$emit("search", this.search);
      }
    },
  },
  emits: ["search"],
};
</script>
