<template>
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>TAM URL</th>
        <th>KISA URL</th>
      </thead>
      <tbody>
        <tr v-for="url in urls" :key="url.id">
          <td>{{ url.id }}</td>
          <td>{{ url.fullUrl }}</td>
          <td>{{ url.shortUrl }}</td>
          <button @click="deleteUrl(url.id)">Sil</button>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="$router.push('/url/save')">Yeni Url Ekle</button>
    </div>
    <div>
      <button @click="$router.push('/url/search')">Kısa url Ara</button>
    </div>
  </div>
</template>

<script>
import apiService from "@/apis/http-common";
import { TOKEN } from "@/constants/constants";
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