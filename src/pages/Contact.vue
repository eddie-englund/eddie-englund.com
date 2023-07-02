<template>
  <main class="flex flex-col gap-10 py-20 lg:py-10">
    <div>
      <h1 class="text-3xl font-semibold text-white">
        Want to get in contact with me?
      </h1>
      <p>
        Feel free to reach out on
        <a
          href="https://www.linkedin.com/in/eddie-englund/"
          class="text-link hover:text-linkMuted duration:150 ease-in-out"
          >LinkedIn</a
        >!
      </p>
    </div>
    <div class="text-center">
      <img
        src="~/assets/me.jpg"
        alt="a picture of me smiling"
        class="rounded"
      />
      <p class="mt-5">Thats me 👆</p>
    </div>
    <a href="https://www.linkedin.com/in/eddie-englund/" class="lg:hidden">
      <button class="bg-link w-80 rounded px-10 py-2 font-medium text-black">
        LinkedIn
      </button>
    </a>
  </main>
</template>
