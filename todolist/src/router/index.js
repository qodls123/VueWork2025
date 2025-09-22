/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import LoginAccount from '@/pages/LoginAccount.vue'
import RegisterAccount from '@/pages/RegisterAccount.vue'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

routes.push(...[
  {path: '/login', component: LoginAccount},
  {path: '/signup', component: RegisterAccount}
])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  console.log('to', to)
  if(to.meta.requireAuth && !userStore.isAuthenticated) {
    return '/login'
  }
  return true
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if(error.status == 401 || error.status == 403) {
      router.push({path: '/login'})
    }
    return Promise.reject(error)
  }
)

export default router
