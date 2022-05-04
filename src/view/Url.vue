<template>
  <div>
    <form @submit.prevent="save()">
      <div>
        <p>{{ $t('url.url') }}: {{ url.fullUrl }}</p>
        <input
            type="text"
            required
            v-model="url.fullUrl"
            placeholder="tam url giriniz.."
        />
      </div>
      <div>
        <p>{{ $t('url.shortenerUrl') }}: {{ url.shortUrl }}</p>
        <input
            type="text"
            required
            v-model="url.shortUrl"
            placeholder="kısa url giriniz.."/>
      </div>
      <div>
        <button type="submit">{{ $t('url.save') }}</button>
      </div>
    </form>
    <router-link :to="{ name: 'urlList' }">{{ $t('url.backListUrl') }}</router-link>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import {TOKEN} from "@/constants/constants";

export default {
  name: "Url",
  data() {
    return {
      id: null,
      url: {
        fullUrl: "",
        shortUrl: "",
      },
    };
  },

  methods: {
    save() {
      apiService
          .post("/url/save", this.url, {
            headers: {
              Authorization: localStorage.getItem(TOKEN),
            },
          })
          .then((response) => {
            console.log(response);
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