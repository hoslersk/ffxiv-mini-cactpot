<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <main>
    <Container>
      <Heading level="1">FFXIV - Mini Cactpot</Heading>
      <form>
        <div class="row">
          <div 
            v-for="(options, index) in config.options"
            class="column" 
            v-bind:key="index"
          >
            <Select 
              v-bind:options="options"
              v-bind:index="index"
              v-bind:value="state.selections[index]"
              @update="update"
            />
          </div>
        </div>
        <button @click="reset">Reset</button>
      </form>
      <pre>
        <code>{{ state }}</code>
      </pre>
    </Container>
  </main>
</template>

<script>
  import { computed, reactive } from 'vue';

  import Container from './components/container.vue'
  import Heading from './components/heading.vue'
  import Select from './components/select.vue'

  const store = {
    debug: true,

    state: reactive({
      selections: {},
    }),

    updateSelections(value, index) {
      if (this.debug) {
        console.log('updateSelections', { value, index });
      }

      this.state.selections = { ...this.state.selections, [index]: value }
    },

    // addSelection(value, index) {
    //   if (this.debug) {
    //     console.log('addSelection', { value, index });
    //   }

    //   this.state.selections = [...this.state.selections, value]
    // },

    // removeSelection(value, index) {
    //   if (this.debug) {
    //     console.log('removeSelection', { value, index });
    //   }

    //   this.state.selections = this.state.selections.filter(selection => selection === value)
    // },

    resetSelections() {
      if (this.debug) {
        console.log('resetSelections');
      }

      this.state.selections = {}
    }
  }

  const config = {
    options: [
      // First row
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],

      // Second row
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],

      // Third row
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    payoutsBySum: {
      6: 10000,
      7: 36,
      8: 720,
      9: 360,
      10: 80,
      11: 252,
      12: 108,
      13: 72,
      14: 54,
      15: 180,
      16: 72,
      17: 180,
      18: 119,
      19: 36,
      20: 306,
      21: 1080,
      22: 144,
      23: 1800,
      24: 3600,
    }
  }

  export default {
    name: 'App',
    components: {
      Container,
      Heading,
      Select,
    },
    data() {
      return {
        config,
        state: store.state,
      }
    },
    methods: {
      update(e, index) {
        console.log('updateSelections', { value: e.target.value, index })
        store.state.selections = { ...store.state.selections, [index]: e.target.value }
      },
      reset() {
        store.state.selections = {}
      }
    },
    provide() {
      return {
        selectionValues: computed(() => 
          Object.values(this.state.selections).map(value => parseInt(value))
        ),
      }
    },
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

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex: 1 0 33.33%;
    max-width: 33.33%;
  }
</style>
