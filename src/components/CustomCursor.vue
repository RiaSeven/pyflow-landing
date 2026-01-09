<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursor = ref(null);

const updateCursor = (e) => {
  if (cursor.value) {
    // 192 correspond à la moitié de la taille (24rem = 384px / 2 = 192px)
    // pour centrer le curseur
    cursor.value.style.left = (e.clientX - 192) + 'px';
    cursor.value.style.top = (e.clientY - 192) + 'px';
  }
};

onMounted(() => {
  document.addEventListener('mousemove', updateCursor);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor);
});
</script>

<template>
  <div ref="cursor"
    class="fixed w-96 h-96 rounded-full pointer-events-none z-[9999] blur-[40px] transition-all duration-300 ease-out"
    style="background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);">
  </div>
</template>