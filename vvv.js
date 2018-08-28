var componentNavBar = {
  template: "#navbar"
};

var app = new Vue({
  el: '#app',
  components: {
    "component-navbar": componentNavBar
  }
});