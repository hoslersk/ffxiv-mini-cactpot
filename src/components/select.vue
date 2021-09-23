<template>
  <div class="select" id="v-model-select-dynamic">
    <select @change="update($event, index)">
      <option value=""></option>
      <option 
        v-for="option in options"
        :value="option"
        :key="option"
        :disabled="!!selectionValues.value.includes(option)"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    inject: ['selectionValues'],
    props: ['options', 'value', 'index', 'selections'],
    methods: {
      update(e, index) {
        this.$emit('update', e, index)
      },
    }
  }
</script>

<style scoped>
  .select {
    position: relative;
    padding-bottom: 100%;
  }

  .select select {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    text-align: center;
    font-size: 1.5rem;
    display: block;
    appearance: none;
  }
</style>