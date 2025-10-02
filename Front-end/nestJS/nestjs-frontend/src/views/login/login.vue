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
    <!-- Outer Row -->
    <div class="col-xl-10 col-lg-12 col-md-9">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="d-flex flex-column align-items-center justify-content-center mt-4">
            <h1>IAM-Admin</h1>
          </div>

          <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input
                      type="email"
                      :class="[
                        'form-control form-control-user',
                        { 'is-invalid': userInfo.usernameMsg },
                      ]"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."
                      v-model="userInfo.username"
                    />
                    <div class="invalid-feedback" id="validationCustomUsername">
                      {{ userInfo.usernameMsg }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck"
                      />
                      <label class="custom-control-label" for="customCheck"
                        >Remember Me</label
                      >
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                    @click="handleLogin()"
                  >
                    login
                  </button>
                  <hr />
                  <a
                    href="index.html"
                    class="btn btn-google btn-user btn-block"
                  >
                    <i class="fab fa-google fa-fw"></i> Login with Google
                  </a>
                  <a
                    href="index.html"
                    class="btn btn-facebook btn-user btn-block"
                  >
                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                  </a>
                </form>
                <hr />
                <div class="text-center">
                  <a class="small" href="forgot-password.html"
                    >Forgot Password?</a
                  >
                </div>
                <div class="text-center">
                  <!-- <a class="small" href="register.html">Create an Account!</a> -->
                  <router-link to="/register" class="small"
                    >Create an Account!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("@/assets/css/sb-admin-2.min.css");
</style>
