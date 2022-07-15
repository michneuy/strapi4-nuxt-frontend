<script setup lang="ts">
import type { PostRoot } from '~/types/posts'
import type { Strapi4Response } from '@nuxtjs/strapi'
const { find } = useStrapi4();
const config = useRuntimeConfig();
const { data: posts } = await find<Strapi4Response<PostRoot>>("posts");
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <template v-for="post in posts" :key="post.id">
      <div class="col">
        <div class="card h-100">
          <div class="ratio ratio-16x9">
            <img
              :src="
                config.public.baseUrl +
                post.attributes.thumbnail.data.attributes.url
              "
              class="card-img-top"
              alt="thumbnail"
            />
          </div>
          <div class="card-body">
            <div class="d-flex">
              <small>Views : {{ post.attributes.views }}</small>
            </div>
            <h5 class="card-title">
              <NuxtLink
                :to="'/posts/' + post.id"
                class="stretched-link text-decoration-none"
                >{{ post.attributes.title }}</NuxtLink
              >
            </h5>
            <div
              class="d-flex justify-content-between align-content-center align-items-center"
            >
              <span class="badge rounded-pill text-bg-info text-white">{{
                post.attributes.category.data.attributes.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
