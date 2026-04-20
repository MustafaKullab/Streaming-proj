<template>
  <div class="my-header">
    <div class="container-fluid">
      <div class="logo" @click="router.push({ name: 'home' })">
        <h2>stream</h2>
      </div>
      <div class="nav">
        <i class="fa-solid fa-bars" @click="ulShow"></i>
        <ul ref="ulEle">
          <li v-for="link in router.options.routes" :key="link.name">
            <router-link :to="{ name: link.name }">{{ link.meta.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="search-profile">
        <div class="search">
          <transition name="slide">
            <input
              v-if="showSearch"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              class="searchInp"
            />
          </transition>
          <i class="fa-solid fa-magnifying-glass searchIcon" @click="toggleSearch"></i>
        </div>
        <div class="notifiaction">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div class="profile">
          <img src="/images/logo.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showSearch = ref(false);
const ulEle = ref(null);

function toggleSearch(e) {
  showSearch.value = !showSearch.value;
  document.addEventListener("click", (e) => {
    if (!(e.target.classList.contains("searchInp") || e.target.classList.contains("searchIcon"))) {
      showSearch.value = false;
    }
  });
}

function ulShow() {
  ulEle.value.classList.toggle("show");
}
</script>

<style>
.slide-enter-from {
  transform: scaleX(0);
  transform-origin: right;
}
.slide-enter-to {
  transform: scaleX(1);
  transform-origin: right;
}
.slide-leave-from {
  transform: scaleX(1);
  transform-origin: left;
}
.slide-leave-to {
  transform: scaleX(0);
  transform-origin: right;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
</style>
