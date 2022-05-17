<template>
  <div>
    <span>{{ num }} </span>
    <button @click="submit()">子组件传递给给父组件的值</button>
    <button @click="submitChild()">兄弟1组件传递给给兄弟2组件的值</button>
  </div>
</template>
<script>
export default {
  name: "child",
  props: ["num"],
  data() {
    return {
      title: "444",
      list: [
        {
          id: 1,
          name: 2
        }
      ]
    };
  },
  methods: {
    submit() {
      console.log(this.title, "this.title");
      this.$emit("submit", this.title);
    },
    submitChild() {
      console.log(this.$store.dispatch("save", this.list), "this.list");
      this.$store.dispatch("save", this.list);
    }
  }
};
</script>
