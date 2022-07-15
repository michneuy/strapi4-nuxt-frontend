<script setup>
const { logout } = useStrapiAuth();
const router = useRouter();
const user = useStrapiUser();
const logOut = () => {
  logout();
  router.push("/");
};
</script>
<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-light shadow">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Strapi FrontEnd</NuxtLink>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/"
                >Home</NuxtLink
              >
            </li>

            <template v-if="!user">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/login">Login</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
              </li>
            </template>

            <template v-else>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link active"
                  aria-current="page"
                  to="/admin/dashboard"
                  >Dashboard</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="#" @click="logOut"
                  >Logout</NuxtLink
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="mt-4">
        <slot />
      </div>
    </div>
  </div>
</template>
