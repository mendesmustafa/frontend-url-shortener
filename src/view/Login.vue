<template>
  <div>
    <form>
      <div>
        <label>{{ $t('login.username') }}:</label>
        <input type="text" v-model="userInfo.username" required/>
      </div>
      <div>
        <label>{{ $t('login.password') }}:</label>
        <input type="password" v-model="userInfo.password" required/>
      </div>
      <div>
        <button type="submit" @click.prevent="login()">{{ $t('login.login') }}</button>
      </div>
    </form>
    <div>
      <button @click="$router.push('/user/save')">{{ $t('login.createUser') }}</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import {TOKEN} from "@/constants/constants";

export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      apiService
          .post("/user/token", this.userInfo)
          .then((response) => {
            console.log(response);
            localStorage.clear();
            localStorage.setItem(TOKEN, response.data);
            this.$router.push("/url/list");
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style>
</style>