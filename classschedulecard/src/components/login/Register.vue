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
          <div class="form-group">
            <label for="password">重复密码</label>
            <input type="password" class="form-control" id="pardonpassword" placeholder="重复密码" />
          </div>
          <div class="form-group">
            <label for="password">图片验证码</label>
            <img v-bind:src="src" />
            <input type="text" class="form-control" id="imageCode" placeholder="图片验证码" />
          </div>
          <button type="submit" class="btn btn-default">注册</button>
        </form>
        <div style="display:flow-root;">
          <router-link style="float:left;" :to="{ name: 'login'}">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      styleContainer: {
        height: "100%",
      },
      src: "",
    };
  },
  computed: {
    Token() {
      return this.$store.getters.GetToken();
    },
  },
  methods:{
    ImageCode:()=>{
    //   var self=this;
    //   self.$ajax.post(
    //       token:self.Token
    //     )
    //   ).then(function(res){
    //     self.src=res.data.Data;
    //   }).catch();
    }
  },
  mounted: function () {
    let avaiHeight = document.documentElement.clientHeight;
    if (avaiHeight > 600) this.styleContainer.height = avaiHeight + "px";
    this.ImageCode();
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
