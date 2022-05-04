<template>
  <div>
    <table>
      <thead>
      <th>{{ $t('url.list.id') }}</th>
      <th>{{ $t('url.list.fullUrl') }}</th>
      <th>{{ $t('url.list.shortenerUrl') }}</th>
      </thead>
      <tbody>
      <tr v-for="url in urls" :key="url.id">
        <td>{{ url.id }}</td>
        <td>{{ url.fullUrl }}</td>
        <td>{{ url.shortUrl }}</td>
        <button @click="deleteUrl(url.id)">{{ $t('url.list.delete') }}</button>
      </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/url/save')">{{ $t('url.list.searchNewUrl') }}</button>
    </div>
    <div>
      <button @click="$router.push('/url/search')">{{ $t('url.list.searchShortenerUrl') }}</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import {TOKEN} from "@/constants/constants";

export default {
  data() {
    return {
      urls: [],
    };
  },

  methods: {
    getUrl() {
      apiService
          .get("/url/list", {
            headers: {
              Authorization: localStorage.getItem(TOKEN),
            },
          })
          .then((response) => {
            console.log(response);
            this.urls = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    deleteUrl(id) {
      apiService
          .delete("/url/delete/" + id, {
            headers: {
              Authorization: localStorage.getItem(TOKEN),
            },
          })
          .then(() => {
            this.getUrl();
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },

  mounted() {
    this.getUrl();
  },
};
</script>

<style>
</style>