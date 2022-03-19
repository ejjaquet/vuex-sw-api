<template>
  <div id="app">
    <nav>
      <router-link to="/">Films</router-link> |
      <router-link to="/planets">Planets</router-link>
      <router-link to="/starships">Starships</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/species">Species</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
