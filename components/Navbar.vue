<template>
  <nav class="bg-white text-black px-6 py-4 flex justify-between items-center">
    <!-- โลโก้ -->
    <ul class="flex space-x-4">
      <li class="font-bold text-xl">
        <NuxtLink to="/">Petacular</NuxtLink>
      </li>
    </ul>

    <!-- เมนู -->
    <ul class="flex space-x-5">
      <li class="text-yellow-500"><NuxtLink to="/about">Home</NuxtLink></li>
      <li><NuxtLink to="/donate">Shop all</NuxtLink></li>
      <li><NuxtLink to="/pets">How it Works</NuxtLink></li>
      <li><NuxtLink to="/adoption">Reviews</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
    <div class="flex space-x-5">
      <button
        class="border rounded-md border-yellow-500 py-2 px-5 text-yellow-500 shadow-md"
      >
        Log in
      </button>
      <button
        class="border rounded-md border-yellow-500 py-2 px-5 text-text bg-yellow-500 shadow-md"
      >
        Sign up
      </button>
    </div>
  </nav>
</template>

<script setup></script>
