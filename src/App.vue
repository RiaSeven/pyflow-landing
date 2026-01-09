<script setup>
import CustomCursor from './components/CustomCursor.vue';
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <CustomCursor />
  <NavBar />

  <router-view></router-view>

  <FooterBar />
</template>