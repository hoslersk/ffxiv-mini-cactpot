<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <main>
    <Container>
      <Heading level="1">FFXIV - Mini Cactpot</Heading>
    </Container>
  </main>
</template>

<script>
import Container from './components/container.vue'
import Heading from './components/heading.vue'

export default {
  name: 'App',
  components: {
    Container,
    Heading,
  }
}
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(61, 29, 29);
    color: rgb(201, 195, 195);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
</style>
