<template>
  <div>
    <form>
      <div>
        <label>Kullanıcı Adı:</label>
        <input type="text" v-model="userInfo.username" required />
      </div>

      <div>
        <label>Şifre:</label>
        <input type="password" v-model="userInfo.password" required />
      </div>

      <div>
        <button type="submit" @click.prevent="login()">Giriş</button>
      </div>
    </form>
    <div>
      <button @click="$router.push('/user/save')">Kullanıcı Oluştur</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import { TOKEN } from "@/constants/constants";
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