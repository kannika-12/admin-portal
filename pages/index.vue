<template>
  <section>
    <div
      class="bg-white flex flex-col md:flex-row items-center gap-10 md:gap-20 h-150"
    >
      <div class="container px-20 py-30 w-1/2 h-150">
        <p class="text-lg font-semibold text-black mb-2">New Themes</p>
        <h1
          class="text-4xl md:text-7xl font-bold text-gray-800 mb-4 tracking-wide"
        >
          Customized <br />
          pet Portraits
        </h1>
        <p class="text-black text-base mt-6">
          Pet care is essential for keeping your furry, feathered, or scaly<br />
          friends happy and healthy. Here are some general guidelines<br />
          for responsible pet care
        </p>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-black text-base font-medium px-5 py-2 rounded shadow mt-10"
        >
          Shop now
        </button>
      </div>
      <div class="relative border-yellow-500 w-1/2 h-150">
        <svg
          class="absolute inset-0 w-full h-fulltransform scale-x-[-1]"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,250 C0,200 0,300 300,200 L0,0 L0,0 Z" fill="#fbbf24" />
        </svg>
        <img
          src="/cat.png"
          alt="Cute Cat"
          class="w-120 right-10 mx-auto relative transform scale-x-[-1]"
        />
        <img
          src="/dog.webp"
          alt="Dog Portraits"
          class="w-50 absolute bottom-20 right-30 border-4 border-white shadow-lg rounded"
        />
      </div>
    </div>
    <h1 class="flex items-center justify-center text-5xl font-bold my-4">
      New Arrivals
    </h1>
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-gray-200"
    >
      <div v-for="item in products" :key="item.id" class="px-4 py-10 border-2">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-40 object-cover rounded"
        />
        <h2
          class="flex justify-center items-center text-lg font-bold text-gray-800"
        >
          {{ item.title }}
        </h2>
        <!-- แสดงราคาลด + ราคาปกติ -->
        <div class="flex justify-center items-center gap-2 mt-1">
          <p class="text-yellow-500 font-bold text-lg">${{ item.price }}</p>
          <p
            v-if="item.originalPrice && item.originalPrice > item.price"
            class="text-red-500 line-through text-sm"
          >
            $ {{ item.originalPrice }}
          </p>
        </div>

        <!-- ⭐ ส่วนแสดงดาวรีวิว -->
        <div class="flex justify-center items-center mt-2">
          <span v-for="n in 5" :key="n" class="text-blue-400 text-xl">
            <span v-if="n <= item.rating">★</span>
            <span v-else class="text-gray-300">★</span>
          </span>
        </div>
        <!-- จำนวนรีวิว -->
        <span
          class="flex justify-center items-center text-sm text-gray-500 ml-2"
        >
          {{ item.reviews }} reviews
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: products } = await useFetch("/api/products");
</script>
