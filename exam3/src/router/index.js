/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
// import HomeView from '@/components/HomeView.vue'
// import AboutView from '@/components/AboutView.vue'
// import UserView from '@/components/UserView.vue'
// import UserPostsView from '@/components/UserPostsView.vue'
// import NestedUserView from '@/components/NestedUserView.vue'
// import NestedUserPost from '@/components/NestedUserPost.vue'
// import NestedUserProfile from '@/components/NestedUserProfile.vue'
// import namedRoutes from '@/router/named.js'

// const routes = [
//   {path: '/', component:HomeView},
//   {path: '/about', component:AboutView},
//   {path: '/users/:username', component:UserView},
//   {path: '/users/:username/posts/:postId', component:UserPostsView},
//   {path: '/user/:id', component:NestedUserView,
//     children:[{
//       path:'profile',
//       component: NestedUserProfile
//     }, {
//       path: 'posts',
//       component: NestedUserPost
//     }]
//   },
// ...namedRoutes]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router 