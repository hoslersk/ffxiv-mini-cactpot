<script>
  import { h as createElement } from 'vue'

  function Heading(props, context) {
    return createElement(
      `h${props.level}`,
      { ...context.attrs, className: 'heading' },
      context.slots,
    );
  }

  Heading.props = ['level']

  export default Heading
</script>

<style>
  h1 {
    font-size: 3rem;
    text-align: center;
  }
</style>