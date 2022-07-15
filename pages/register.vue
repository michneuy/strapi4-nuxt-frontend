<script setup>
definePageMeta({
  layout: false,
});
useHead({
  title: "Login BEGOINGTO",
});
const username = ref();
const identifier = ref();
const password = ref();
const { register } = useStrapiAuth();
const router = useRouter();
const onSubmit = async () => {
  try {
    await register({ username: username.value,identifier: identifier.value, password: password.value });
    router.push("/admin/dashboard");
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <main class="form-signin w-25 m-auto text-center">
      <form @submit.prevent="onSubmit">
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt="logo"
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-bold text-uppercase">sign up</h1>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            v-model="username"
          />
          <label for="username">Username</label>
        </div>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="identifier"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check my-2 text-start">
          <input type="checkbox" class="form-check-input" id="remeber" />
          <label class="form-check-label" for="remeber">
            Agree
          </label>
        </div>
        <button class="w-100 btn btn-primary text-uppercase" type="submit">
          Sign up
        </button>
        <div class="d-flex justify-content-between mt-3">
          <NuxtLink to="/">Back Home</NuxtLink>
          <NuxtLink to="/login">Login</NuxtLink>
        </div>
        <p class="my-2 text-muted">&copy; 2022</p>
      </form>
    </main>
  </div>
</template>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
