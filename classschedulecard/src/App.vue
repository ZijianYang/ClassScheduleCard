<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  name: "App",
  mounted: function () {
    var self=this;
    if (!this.$store.state.auth.Token) {
      this.$ajax({
        method: 'post',
        data: {
          "timespan": "string"
        },
        url: this.$store.state.basic.ApiUrl + "api/Token",
      }).then(function (res) {
          self.$store.commit('auth/setToken', {Token:res.data.Data.Token});
      });
    }
  },
};
</script>
