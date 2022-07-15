<script setup>
const { logout } = useStrapiAuth();
const router = useRouter();
const user = useStrapiUser();
const logOut = () => {
  logout();
  router.push("/");
};
defineNuxtLink({
  activeClass: 'active'
})
</script>
<template>
  <main class="d-flex flex-nowrap">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <i class="bi bi-bootstrap pe-none me-2 fs-2 text-primary"></i>
        <span class="fs-4">Strapi FrontEnd</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link link-dark">
            <i class="bi bi-house-door"></i>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/dashboard" class="nav-link link-dark"  aria-current="page">
            <i class="bi bi-speedometer2"></i>
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/posts" class="nav-link link-dark">
            <i class="bi bi-table"></i>
            Posts Management
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/tags" class="nav-link link-dark">
            <i class="bi bi-grid"></i>
            Tags Management
          </NuxtLink>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <i class="bi bi-person-circle"></i>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><button class="dropdown-item" type="button" @click="logOut">Sign out</button></li>
        </ul>
      </div>
    </div>
    <div class="content w-100">
      <div class="py-3">
        <slot />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;

  .sidebar {
    width: 280px;
  }
}
</style>
