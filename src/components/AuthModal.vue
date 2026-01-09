<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const props = defineProps(['isOpen']);
const emit = defineEmits(['close']);

const { loginWithGoogle, loginWithEmail, registerWithEmail } = useAuth();

const isLoginMode = ref(true);
const email = ref('');
const password = ref('');
const pseudo = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
  errorMsg.value = '';
  isLoading.value = true;

  let res;
  if (isLoginMode.value) {
    res = await loginWithEmail(email.value, password.value);
  } else {
    res = await registerWithEmail(email.value, password.value, pseudo.value);
  }

  isLoading.value = false;

  if (res.success) {
    emit('close');
  } else {
    if (res.error.includes('auth/invalid-credential')) errorMsg.value = "Identifiants incorrects.";
    else if (res.error.includes('auth/email-already-in-use')) errorMsg.value = "Email déjà utilisé.";
    else if (res.error.includes('auth/weak-password')) errorMsg.value = "Mot de passe trop court.";
    else errorMsg.value = "Une erreur est survenue.";
  }
};

const handleGoogle = async () => {
  const res = await loginWithGoogle();
  if (res.success) emit('close');
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    @click.self="$emit('close')">

    <div
      class="relative w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">

      <div
        class="absolute top-0 w-full h-20 -translate-x-1/2 pointer-events-none left-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent">
      </div>

      <button @click="$emit('close')"
        class="absolute z-10 transition-colors top-4 right-4 text-slate-400 hover:text-white">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="relative z-10 mb-2 text-3xl text-center text-white font-display">
        {{ isLoginMode ? 'Bon retour !' : 'Rejoindre PyFlow' }}
      </h2>
      <p class="relative z-10 mb-8 text-sm text-center text-slate-400">
        {{ isLoginMode ? 'Connectez-vous pour continuer votre progression' : 'Créez un compte pour sauvegarder votre XP'
        }}
      </p>

      <form @submit.prevent="handleSubmit" class="relative z-10 space-y-4">

        <div v-if="!isLoginMode">
          <input v-model="pseudo" type="text" placeholder="Pseudo" required
            class="w-full px-4 py-3 text-white transition-all border bg-black/40 border-white/10 rounded-xl focus:border-cyan-400 focus:bg-black/60 focus:outline-none placeholder:text-slate-500">
        </div>

        <div>
          <input v-model="email" type="email" placeholder="Email" required
            class="w-full px-4 py-3 text-white transition-all border bg-black/40 border-white/10 rounded-xl focus:border-cyan-400 focus:bg-black/60 focus:outline-none placeholder:text-slate-500">
        </div>

        <div>
          <input v-model="password" type="password" placeholder="Mot de passe" required
            class="w-full px-4 py-3 text-white transition-all border bg-black/40 border-white/10 rounded-xl focus:border-cyan-400 focus:bg-black/60 focus:outline-none placeholder:text-slate-500">
        </div>

        <div v-if="errorMsg"
          class="py-2 text-sm text-center text-red-400 border rounded-lg bg-red-500/10 border-red-500/20">{{ errorMsg }}
        </div>

        <button type="submit" :disabled="isLoading"
          class="w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed border-none cursor-pointer"
          :class="isLoginMode ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-cyan-500/20' : 'bg-gradient-to-r from-purple-600 to-pink-500 shadow-purple-500/20'">
          {{ isLoading ? 'Chargement...' : (isLoginMode ? 'Se connecter' : "S'inscrire") }}
        </button>
      </form>

      <div class="relative z-10 py-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-white/10"></div>
        </div>
        <div class="relative flex justify-center"><span
            class="px-2 text-sm rounded bg-slate-900/50 text-slate-500 backdrop-blur-sm">Ou</span></div>
      </div>

      <button @click="handleGoogle"
        class="relative z-10 flex items-center justify-center w-full gap-3 py-3 text-white transition-colors border cursor-pointer border-white/10 rounded-xl hover:bg-white/5 bg-white/5">
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4" />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853" />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05" />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335" />
        </svg>
        Google
      </button>

      <div class="relative z-10 mt-6 text-sm text-center text-slate-400">
        {{ isLoginMode ? 'Pas encore de compte ?' : 'Déjà un compte ?' }}
        <button @click="isLoginMode = !isLoginMode"
          class="ml-1 font-medium cursor-pointer text-cyan-400 hover:underline">
          {{ isLoginMode ? "S'inscrire" : 'Se connecter' }}
        </button>
      </div>

    </div>
  </div>
</template>