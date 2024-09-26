/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController = () => import('#pages/controllers/home_controller')
const AboutController = () => import('#pages/controllers/about_controller')

router.get('/', [HomeController, 'render']).as('pages.home')
router.get('/about', [AboutController, 'render']).as('pages.about')
