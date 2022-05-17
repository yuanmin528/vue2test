<template>
  <div>
    <h3>从myfooter组件传来的值</h3>
    <ul>
      <li v-for="item of this.$store.state.list" :key="item.id">
        <p>
          <span>{{ item.id }}</span> <span>{{ item.task }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "444"
    };
  },
  created() {}
};
</script>
