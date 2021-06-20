<template>
  <div>
    <form @submit.prevent="save()">
      <div>
        <p>Adı: {{ user.name }}</p>
        <input
          type="text"
          required
          v-model="user.name"
          placeholder="adınızı giriniz.."
        />
      </div>
      <div>
        <p>Kullanıcı Adı: {{ user.username }}</p>
        <input
          type="text"
          required
          v-model="user.username"
          placeholder="kullanıcı adınızı giriniz.."
        />
      </div>
      <div>
        <p>Şifre: {{ user.password }}</p>
        <input
          type="password"
          required
          v-model="user.password"
          placeholder="şifre giriniz.."
        />
      </div>
      <div>
        <button type="submit">Kaydet</button>
      </div>
    </form>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
export default {
  name: "User",
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
      },
    };
  },

  methods: {
    save() {
      console.log(this.user);
      apiService
        .post("/user/save", this.user)
        .then((response) => {
          console.log(response);
          this.$router.push("/");
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