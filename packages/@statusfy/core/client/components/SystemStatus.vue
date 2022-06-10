<template>
  <div>
    <div class="systems-container flex flex-col">
      <system v-for="system in systems" :key="system.name" :system="system" />
    </div>
  </div>
</template>

<script>
import System from "./System";

export default {
  components: {
    System
  },
  props: {
    systems: {
      type: Array,
      require: true,
      default: () => []
    }
  }
};
</script>
