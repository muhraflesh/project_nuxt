
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login')
    } else if (!store.state.hrd) {
      alert("Page Admin hanya untuk HRD!");
      return redirect('/profile')
    }
  }
 