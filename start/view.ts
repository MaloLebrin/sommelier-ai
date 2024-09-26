import edge from 'edge.js'
import env from '#start/env'
import { edgeIconify } from 'edge-iconify'
// import { icons as heroIcons } from '@iconify-json/heroicons'

/**
 * Add heroIcons collection
 */
// addCollection(heroIcons)
/**
 * Register a plugin
 */
edge.use(edgeIconify)

/**
 * Define a global property
 */
edge.global('appUrl', env.get('APP_URL'))
