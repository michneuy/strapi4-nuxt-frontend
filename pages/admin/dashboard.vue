<script setup>
const user = useStrapiUser();
definePageMeta({
  middleware: 'auth',
  layout: "custom",
})
</script>
<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="">
      <h1><b>{{user.username}}</b> Welcome to Dashboard  <i class="bi bi-ticket-fill"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.justify-content-center{&.align-items-center{
  height: 90vh;
}}
</style>
