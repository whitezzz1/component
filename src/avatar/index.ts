import { withInstall } from '../utils/with-install'

import _Avatar from './Avatar.vue'

export const Avatar = withInstall(_Avatar)
export default Avatar

declare module 'vue' {
  export interface GlobalComponents {
    Avatar: typeof Avatar
  }
}
