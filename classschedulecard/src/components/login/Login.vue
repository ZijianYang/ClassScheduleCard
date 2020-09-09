<template>
  <div class="container" v-bind:style="styleContainer">
    <div class="row row-centered">
      <div class="well col-md-6 col-centered">
        <form>
          <div class="form-group">
            <label for="userName">用户名</label>
            <input type="text" class="form-control" id="userName" placeholder="用户名" />
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="password" class="form-control" id="password" placeholder="密码" />
          </div>
          <button type="submit" class="btn btn-default">登录</button>
        </form>
        <div style="display:flow-root;">
          <router-link style="float:left;" :to="{ name: redirect}">忘记密码</router-link>
          <router-link style="float:right;" :to="{ name: 'register'}">注册</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    Login
    <br/>
    <router-link :to="{ name: redirect}">继续</router-link>
  </div>-->
</template>

<script>
export default {
  name: "Login",
  props: ["redirect"],
  data: function () {
    return {
      styleContainer: {
        height: "100%",
      },
    };
  },
  mounted: function () {
    let avaiHeight = document.documentElement.clientHeight;
    if (avaiHeight > 600) this.styleContainer.height = avaiHeight + "px";
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*web background*/
.container {
  display: table;
}

.row {
  display: table-cell;
  vertical-align: middle;
}
/* centered columns styles */
.row-centered {
  text-align: center;
}
.col-centered {
  display: inline-block;
  float: none;
  text-align: left;
  margin-right: -4px;
}
</style>
