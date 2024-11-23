<script>
export default {
  name: 'AuthRedirect',
  data() {
    return {
      loginForm: {
        code: '',
        state: '',
        type: 2
      },
      redirect: '',
      otherQuery: ''

    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.loginForm.code = query.code
          this.loginForm.state = query.state
        }
      },
      immediate: true
    }
  },
  created() {
    const redirect = window.localStorage.getItem('redirect')
    console.log(redirect)
    const query = window.localStorage.getItem('other_query')
    console.log(query)
    this.handleLogin()

    // if (window.localStorage) {
    //   window.localStorage.setItem('x-admin-oauth-code', hash)
    //   window.close()
    // }
  },
  methods: {

    handleLogin() {
      console.log(this.loginForm)
      this.$store.dispatch('user/login3', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
        })
        .catch(() => {
          // Handle login failure

        })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
