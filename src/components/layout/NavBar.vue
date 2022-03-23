<template>
  <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="/assets/images/starwars-logo.svg"
          class="mr-3 h-6 sm:h-10"
          alt="StarWars Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-yellow-400"
          >Star Wars API demo</span
        >
      </a>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/films"
              >Films</router-link
            >
          </li>
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/planets"
              >Planets</router-link
            >
          </li>
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/starships"
              >Starships</router-link
            >
          </li>
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/vehicles"
              >Vehicles</router-link
            >
          </li>
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/people"
              >People</router-link
            >
          </li>
          <li>
            <router-link
              class="block py-2 pr-4 pl-3 text-black bg-yellow-400 rounded"
              to="/species"
              >Species</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
