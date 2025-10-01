<script lang="ts" setup>
import axios from "@/utils/axios";

const test = async () => {
  const res = await axios.get("/user");
  console.log(res);
};
test();
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100"
  >
    <div class="col-4">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button type="submit" class="btn">sign up</button>
          <router-link
            to="/"
            class="border rounded w-100 text-decoration-none text-center"
          >
            <button type="submit" class="btn btn-primary w-100 mb-2 text-light">
              sign in
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
