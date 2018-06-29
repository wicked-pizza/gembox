import Vue from 'vue'
import App from '../components/App.vue'
import { createStore } from '../store/index'
import axios from 'axios'

export default () => {
  const app = new Vue({
    el: '#app-root',
    store: createStore(),
    render: h => h(App)
  })

  axios.get('https://api.airtable.com/v0/appoXt9IzudhG0uki/Table%201', {
    params: {
      view: 'Grid view',
      api_key: 'keyNcyTZPSWDSm10h'
    }
  }).then((res) => {
    app.$store.dispatch('SET_DATA', { data: res.data.records })
  })

  return app
}