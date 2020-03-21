<template>
  <div class="home">
    <Top/>
    <router-view />
  </div>
</template>
<script>
import Top from "../components/Top";
export default {
  components: {
    Top
  }
};
</script>
