<script setup>
definePageMeta({
  layout: false,
});
useHead({
  title: "Login BEGOINGTO",
});
const identifier = ref("");
const password = ref("");
const errs = ref();
const { login } = useStrapiAuth();
const router = useRouter();
const onSubmit = async () => {
  try {
    await login({ identifier: identifier.value, password: password.value });
    router.push("/admin/dashboard");
  } catch (e) {
    errs.value = e;
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
        <h1 class="h3 mb-3 fw-bold text-uppercase">sign in</h1>
        <template v-if="errs">
          <div class="alert alert-danger text-start" role="alert">
            <p class="m-0" v-for="(e,i) in errs.error.details.errors" :key="i">
              {{ e.message }}
            </p>
          </div>
        </template>
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
          <label class="form-check-label" for="remeber"> Remember me </label>
        </div>
        <button class="w-100 btn btn-primary" type="submit">Sign in</button>
        <div class="d-flex justify-content-between mt-3">
          <NuxtLink to="/">Back Home</NuxtLink>
          <NuxtLink to="/register">Register</NuxtLink>
        </div>
        <p class="my-2 text-muted">&copy; 2022</p>
      </form>
    </main>
  </div>
</template>
