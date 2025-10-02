<script lang="ts" setup>
import MenuNav from "@/components/MenuNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { userMenuStore } from "@/store/menus";

const store = userMenuStore();
</script>

<template>
  <div id="wrapper">
    <!-- <div
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    > -->
      <MenuNav :menu="store.menus" />
    <!-- </div> -->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!-- <div class="container-fluid"> -->
        <!-- header-nav -->
        <HeaderNav />
        <!-- main -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
