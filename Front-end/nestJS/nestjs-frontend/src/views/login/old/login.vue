<script lang="ts" setup>
import axios from "@/utils/axios";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userInfo = reactive({
  username: "",
  usernameMsg: computed(() => {
    const value = userInfo.username;
    // if (!value) {
    //   return "用户名不能为空"
    // }
    const reg = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    if (!reg.test(value) && userInfo.username !== "") {
      return "用户名必须以字母开头，长度为3-16位，只能包含字母、数字和下划线";
    }
  }),
  password: "",
});
const handleLogin = () => {
  console.log(userInfo);
  router.push("/home");
};
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100"
  >
    <!-- TODO -->
    <div class="col-11 col-sm-8 col-lg-6 col-xl-4 col-xxl-4">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >

          <!--  -->
          <input
            type="email"
            :class="['form-control', { 'is-invalid': userInfo.usernameMsg }]"
            v-model="userInfo.username"
            id="exampleInputEmail1"
          />
          <div class="invalid-feedback" id="validationCustomUsername">
            {{ userInfo.usernameMsg }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control is-invalid"
            id="exampleInputPassword1"
            v-model="userInfo.password"
          />
          <div class="invalid-feedback" id="validationCustomUsername">
            Please choose a username.
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button
            type="submit"
            class="btn btn-primary w-100 mb-2 text-light"
            @click="handleLogin()"
          >
            sign in
          </button>
          <router-link
            to="/register"
            class="border rounded w-100 text-decoration-none text-center"
          >
            <button type="submit" class="btn">sign up</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
