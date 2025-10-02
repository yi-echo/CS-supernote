<script lang="ts" setup>
import type { MenuItem } from '@/types/MenuNav';
const props = defineProps<{
  menu: MenuItem[];
}>();
console.log(props.menu)
</script>

<template>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="item in props.menu" :key="item.id">
      <router-link
        class="nav-link active"
        aria-current="page"
        :to="item.routeName ? { name: item.routeName } : item.path"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>
