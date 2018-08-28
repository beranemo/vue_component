var componentSideBar = {
  data: function() {
    return {
      header: "this is header",
      content: "this is content"
    }
  },
  template: "#sidebar"
}

var componentMain = {
  data: function() {
    return {
      header: "this is header",
      content: "this is content"
    }
  },
  template: '#main'
}

var componentNavBar = {
  template: "#navbar"
};

var app = new Vue({
  el: '#app',
  components: {
    "component-navbar": componentNavBar,
    "component-main": componentMain,
    "component-sidebar": componentSideBar
  }
});