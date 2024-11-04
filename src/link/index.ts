import { withInstall } from '../utils/with-install'
import _Link from './Link'

export { linkProps } from './Link'
export type { LinkColor, LinkProps, LinkSize } from './Link'
export const Link = withInstall(_Link)
export default Link

declare module 'vue' {
  export interface GlobalComponents {
    SLink: typeof _Link
  }
}
