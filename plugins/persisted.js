import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
 
export default () => {
    createPersistedState({
        getState: (auth) => Cookies.get(auth),
        setState: (auth, state) => Cookies.set('auth', auth),
        storage: {
            getItem: auth => Cookies.get('auth'),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (auth, value) => Cookies.set('auth', auth, { expires: 3, secure: true }),
            removeItem: auth => Cookies.remove('auth')
          }
      })
}