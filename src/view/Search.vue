<template>
  <div>
    <form>
      <div>
        <label>{{ $t('search.shortenerUrl') }}:</label>
        <input type="text" v-model="shortUrl" required/>
      </div>
      <div>
        <button type="submit" @click.prevent="search()">{{ $t('search.search') }}</button>
      </div>
    </form>
    <div>
      <button @click="$router.push('/url/list')">{{ $t('search.goListUrl') }}</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import {TOKEN} from "@/constants/constants";

export default {
  data() {
    return {
      shortUrl: "",
    };
  },
  methods: {
    search() {
      apiService
          .post("/url/search", this.shortUrl, {
            headers: {
              Authorization: localStorage.getItem(TOKEN),
            },
          })
          .then((response) => {
            console.log(response);
            if (
                response != null &&
                response.data != null &&
                response.data.fullUrl != null
            ) {
              window.location.href = response.data.fullUrl;
            }
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