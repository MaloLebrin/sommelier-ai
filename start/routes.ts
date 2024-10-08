/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

// region Controller's Imports
const LogoutController = () => import('#auth/controllers/logout_controller')
const HomeController = () => import('#pages/controllers/home_controller')
const AboutController = () => import('#pages/controllers/about_controller')
const LoginController = () => import('#auth/controllers/login_controller')
// endregion

router
  .group(() => {
    router.get('login', [LoginController, 'render']).as('auth.login')
    router.post('login', [LoginController])
    router.delete('logout', [LogoutController]).as('auth.logout')
  })
  .middleware(middleware.guest())
  .prefix('/auth')

router.get('/', [HomeController, 'render']).as('pages.home').use(middleware.auth())
router.get('/about', [AboutController, 'render']).as('pages.about')
