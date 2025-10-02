<script lang="ts" setup>
import MenuNav from "@/components/MenuNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { userMenuStore } from "@/store/menus";

const store = userMenuStore();
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <MenuNav :menu="store.menus" />
      </div>
      <div class="col-9">
        <div class="row">
          <div class="container-fluid">
            <!-- header-nav -->
            <HeaderNav />
            <!-- main -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
