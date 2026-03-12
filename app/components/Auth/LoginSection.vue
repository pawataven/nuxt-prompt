<script setup lang="ts">
import { ref } from "vue";

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-6 xl:px-10">
    <div class="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
      <!-- LEFT LOGIN -->
      <div class="max-w-md w-full">
        <!-- logo -->
        <h1 class="text-5xl font-bold text-blue-600 mb-10 ">PromptGo</h1>

        <!-- Email -->
        <div class="mb-6">
          <label class="text-sm font-medium">อีเมล</label>

          <div class="relative mt-2">
            <Icon
              name="heroicons:envelope"
              class="absolute left-4 top-3 text-gray-500"
              size="18"
            />

            <input
              type="email"
              class="w-full border rounded-full py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <!-- Password -->
        <div class="mb-2">
          <label class="text-sm font-medium">รหัสผ่าน</label>

          <div class="relative mt-2">
            <Icon
              name="heroicons:lock-closed"
              class="absolute left-4 top-3 text-gray-500"
              size="18"
            />

            <input
              :type="showPassword ? 'text' : 'password'"
              class="w-full border rounded-full py-3 pl-11 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              class="absolute right-4 top-3 text-gray-500"
              @click="togglePassword"
            >
              <Icon name="heroicons:eye" size="18" />
            </button>
          </div>
        </div>

        <!-- forgot -->
        <div class="text-right text-sm mb-6">
          <a class="text-gray-600 hover:underline cursor-pointer">
            คุณลืมรหัสผ่าน?
          </a>
        </div>

        <!-- login button -->
        <button
          class="w-full bg-gray-300 hover:bg-gray-400 py-3 rounded-full font-medium transition mb-6"
        >
          Login
        </button>

        <!-- divider -->
        <p class="text-center text-sm text-gray-500 mb-5">or sign up with</p>

        <!-- social -->
        <div class="flex justify-center gap-8 mb-6">
          <button class="text-3xl">
            <Icon name="logos:google-icon" />
          </button>

          <button class="text-3xl">
            <Icon name="logos:facebook" />
          </button>
        </div>

        <!-- signup -->
        <p class="text-center text-sm">
          Don’t have an account?
          <span class="font-semibold cursor-pointer">Sign up</span>
        </p>
      </div>

      <!-- RIGHT ILLUSTRATION -->
      <div class="hidden lg:flex justify-center">
        <div
          class=" p-10 flex justify-center items-center"
        >
          <NuxtImg
            src="/Login/web-developer.svg"
            width="380"
            alt="login illustration"
          />
        </div>
      </div>
    </div>
  </section>
</template>
