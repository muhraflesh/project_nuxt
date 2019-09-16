
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login')
    } else if (!store.state.admin) {
      alert("Page Admin hanya untuk Admin(HRD)!");
      return redirect('/profile')
    }
  }
 