export default function ({ store, redirect }) {
  const axios = require('axios')
  const Cookies = process.client ? require('js-cookie') : undefined
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login')
    }

    
            
    
  }
 