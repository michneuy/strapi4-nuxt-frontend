<script setup lang="ts">
import { SinglePost } from '~/types/post';
const route = useRoute();
const config = useRuntimeConfig()
const client = useStrapiClient();
const {data: post} = await client<SinglePost>(`/posts/${route.params.id}/review`, { method: "GET" });
</script>

<template>
  <div id="detailApp" class="position-relative">
    <div class="position-absolute top-0 start-0">
      <NuxtLink to="/" class="btn btn-primary btn-sm"
        ><i class="fa-solid fa-arrow-left"></i> Back to Home</NuxtLink
      >
    </div>
    <div class="content mb-4">
      <h2 class="fw-bold text-primary">{{ post.title }}</h2>
      <div class="img-fluid img-thumbnail position-relative">
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info p-2"
        >
          {{ post.views }}
          <span class="visually-hidden">unread messages</span>
        </span>
        <img
          :src="config.public.baseUrl + post.thumbnail.url"
          class="w-100"
          alt="thumbnail"
        />
      </div>
      <div class="mt-2">
                    {{post.description}}
                </div>

      <div class="btn-group mt-3" role="group" aria-label="Basic outlined">
        <button
          type="button"
          class="btn btn-outline-primary"
          v-for="tag in post.tags" :key="tag.id"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#detailApp {
  display: flex;
  justify-content: center;
}

#detailApp .content {
  max-width: 600px;
}

.desc p {
  font-size: 18px;
}

.desc p img {
  width: 100%;
  margin: 10px 0;
}
</style>
