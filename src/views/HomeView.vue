<template>
  <div class="home">
    <section class="pt-20 pb-24 2xl:py-40 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="mb-16 md:mb-24 text-center">
          <h2 class="mb-8 md:mb-14 text-4xl text-black font-bold font-heading">
            Star Wars Api - Demonstation site
          </h2>
          <p class="text-lg text-gray-800">
            This site is created as an experiment to use the Star Wars Api in a
            VueJs application with the Tailwind CSS framework.
          </p>
        </div>
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap items-center -mx-3">
            <div class="w-1/5 px-3 mb-8 lg:mb-0">
              <div class="px-6 py-6 bg-gray-500 rounded-3xl">
                <div class="pb-8 mb-14 border-b border-gray-400">
                  <div class="flex justify-between items-center px-3">
                    <h3 class="text-3xl text-white font-bold font-heading">
                      Planets
                    </h3>
                  </div>
                </div>
                <ul class="text-lg text-white mb-16">
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Climate information</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Gravity off the planet</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Total population</span>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    class="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                    href="/planets"
                    >View all</a
                  >
                </div>
              </div>
            </div>
            <div class="w-1/5 px-3 mb-8 lg:mb-0">
              <div class="px-6 py-6 bg-gray-500 rounded-3xl">
                <div class="pb-8 mb-14 border-b border-gray-400">
                  <div class="flex justify-between items-center px-3">
                    <h3 class="text-3xl text-white font-bold font-heading">
                      Starships
                    </h3>
                  </div>
                </div>
                <ul class="text-lg text-white mb-16">
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Cargo capacity</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Hyperdrive ratings</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Nr of passengers</span>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    class="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                    href="/starships"
                    >View all</a
                  >
                </div>
              </div>
            </div>
            <div class="w-1/5 px-3 mb-8 lg:mb-0">
              <div class="px-6 py-6 bg-yellow-400 rounded-3xl">
                <div class="pb-8 mb-14 border-b border-blueGray-300">
                  <div class="flex justify-between items-center px-3">
                    <h3 class="text-3xl text-white font-bold font-heading">
                      Films
                    </h3>
                  </div>
                </div>
                <ul class="text-lg text-white mb-16">
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Director information</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Extract from the movie</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Producer information</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Release date</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Episode ID</span>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    class="inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white"
                    href="/films"
                    >View all</a
                  >
                </div>
              </div>
            </div>
            <div class="w-1/5 px-3 mb-8 lg:mb-0">
              <div class="px-6 py-6 bg-gray-500 rounded-3xl">
                <div class="pb-8 mb-14 border-b border-gray-400">
                  <div class="flex justify-between items-center px-3">
                    <h3 class="text-3xl text-white font-bold font-heading">
                      Peoples
                    </h3>
                  </div>
                </div>
                <ul class="text-lg text-white mb-16">
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Full names of the characters</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Characters date of birth</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Hair, skin and eyes color</span>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    class="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                    href="/people"
                    >View all</a
                  >
                </div>
              </div>
            </div>
            <div class="w-1/5 px-3">
              <div class="px-6 py-6 bg-gray-500 rounded-3xl">
                <div class="pb-8 mb-14 border-b border-gray-400">
                  <div class="flex justify-between items-center px-3">
                    <h3 class="text-3xl text-white font-bold font-heading">
                      Vehicles
                    </h3>
                  </div>
                </div>
                <ul class="text-lg text-white mb-16">
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Cargo capacity</span>
                  </li>
                  <li class="flex items-center mb-8">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Total costs in credits</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-6">
                      <svg
                        width="20"
                        height="16"
                        viewbox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Display vehicle class</span>
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    class="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                    href="/vehicles"
                    >View all</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
