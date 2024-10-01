import 'unpoly'
import { up } from 'unpoly'
import env from '#start/env'
import.meta.glob(['../images/**'])

if (env.get('NODE_ENV') === 'development') {
  up.log.enable()
}
