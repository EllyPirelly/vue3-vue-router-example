import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  // catch-all 404 example
  // will catch any routes that are not covered by routes defined in this file
  // it's a REGEX, not a function
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  // redirect example
  {
    // that's what the route used to be:
    path: '/all-jobs',
    // that's where we want it to go:
    redirect: '/jobs',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
