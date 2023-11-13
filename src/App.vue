<script setup>
import searchbar from "./components/search.vue";
</script>

<template>
  <div class="flex justify-center min-h-screen w-screen bg-slate-800">
    <div class="container flex-col flex justify-center bg-slate-600 my-3 gap-6 p-3 rounded-2xl">
      <div class="flex justify-center flex-col">
        <searchbar @search="search" />
      </div>
      <div>
        <router-view :search="searchVal"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
    };
  },
  methods: {
    search(searchq) {
      this.searchVal = searchq;
      // console.log(this.searchVal);
    },
  },
};
</script>
