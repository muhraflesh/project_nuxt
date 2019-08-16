import axios from 'axios';

export default ({ $axios, store }) => {
    $axios.defaults.baseURL = 'https://192.168.3.140:3000/api'
  
    if (process.server) {
      return
    }
  
    $axios.interceptors.request.use(request => {
      request.baseURL = 'https://192.168.3.140:3000/api'
  
      // Get token from auth.js store
      const token = store.state.token
  
      // Update token axios header
      if (token) {
        request.headers.common['Authorization'] = token
      }
      return request
    })
  }

