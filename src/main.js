// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjexem1he3let0153tpc5ftu1"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  provide: apolloProvider.provide(),
  template: "<App/>"
});
