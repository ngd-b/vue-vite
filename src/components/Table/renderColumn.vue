<script>
export default {
  name: "RenderColumn",
  props: {
    render: {
      type: Function,
      default: () => () => {},
    },
    scope: {
      type: Object,
      default: () => {},
    },
  },
  render() {
    const { row, column, $index } = this.scope;
    return this.render(row, column, $index);
  },
};
</script>
