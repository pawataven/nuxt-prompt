<script setup lang="ts">
import { ref } from "vue"

const showPassword = ref(false)
const isOpen = ref(true)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">

    <!-- overlay -->
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

    <!-- modal -->
    <div class="relative bg-white w-[420px] rounded-lg shadow-xl p-8 z-10">

      <!-- close -->
      <button
        @click="closeModal"
        class="absolute right-4 top-4 text-gray-500 hover:text-black"
      >
        <Icon name="heroicons:x-mark" size="24" />
      </button>

      <!-- title -->
      <h1 class="text-4xl font-bold text-blue-600 text-center mb-6">
        PromptGo
      </h1>

      <!-- email -->
      <div class="mb-4">
        <label class="text-sm font-medium">Email</label>

        <div class="relative mt-1">
          <Icon
            name="heroicons:envelope"
            class="absolute left-3 top-3 text-gray-500"
            size="18"
          />

          <input
            type="email"
            class="w-full border rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- password -->
      <div class="mb-2">
        <label class="text-sm font-medium">Password</label>

        <div class="relative mt-1">

          <Icon
            name="heroicons:lock-closed"
            class="absolute left-3 top-3 text-gray-500"
            size="18"
          />

          <input
            :type="showPassword ? 'text' : 'password'"
            class="w-full border rounded-full pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            @click="togglePassword"
            class="absolute right-3 top-2.5 text-gray-500"
          >
            <Icon name="heroicons:eye" size="18" />
          </button>

        </div>
      </div>

      <!-- forgot -->
      <div class="text-right text-sm mb-6">
        <a href="#" class="text-gray-600 hover:underline">
          Forget Password?
        </a>
      </div>

      <!-- login button -->
      <button
        class="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-full mb-6"
      >
        Login
      </button>

      <!-- divider -->
      <p class="text-center text-sm text-gray-500 mb-4">
        or sign up with
      </p>

      <!-- social -->
      <div class="flex justify-center gap-6 mb-6">

        <button class="text-2xl">
          <Icon name="logos:google-icon" />
        </button>

        <button class="text-2xl">
          <Icon name="logos:facebook" />
        </button>

      </div>

      <!-- signup -->
      <p class="text-center text-sm">
        Don’t have an account?
        <span class="font-semibold cursor-pointer">Sign up</span>
      </p>

    </div>
  </div>
</template>