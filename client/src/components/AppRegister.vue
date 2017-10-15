<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell medium-5">
        <h1>Register</h1>
        <label class="text-left">Email
          <input type="email" name="email" v-model="email" placeholder="Enter your Email Address">
        </label>
        <label class="text-left">Password
          <input type="password" name="password" v-model="password" placeholder="Enter your Password">
        </label>
        <input type="submit" value="Submit" class="button primary" @click="register" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      await AuthenticationServices.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
