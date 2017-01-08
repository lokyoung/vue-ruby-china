import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://ruby-china.org/api/v3'
export default {
  getTopic (id) {
    return Vue.http.get(`topics/${id}`, { headers: { Accept: 'application/json' } })
      .then(res => {
        return res.body.topic
      }, err => {
        return err
      })
  },
  getTopics () {
    return Vue.http.get('topics/', { headers: { Accept: 'application/json' } })
      .then(res => {
        return res.body.topics
      }, err => {
        return err
      })
  },
  getReplies (id) {
    return Vue.http.get(`topics/${id}/replies`, { headers: { Accept: 'application/json' } })
      .then(res => {
        return res.body.replies
      }, err => {
        return err
      })
  }
}
