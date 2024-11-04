import type { ExtractPropTypes, PropType } from 'vue'
import { defineComponent } from 'vue'
import 'virtual:uno.css'

export type LinkSize = 'small' | 'medium' | 'large'
export type LinkColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const linkProps = {
  size: {
    type: String as PropType<LinkSize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<LinkColor>,
    default: 'purple',
  },
}
export type LinkProps = ExtractPropTypes<typeof linkProps>

export default defineComponent({
  name: 'Link',
  props: linkProps,
  setup(props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    }

    return () => (
      <a
        class={` 
              hover:text-white
              cursor-pointer
              py-${size[props.size].y}
              px-${size[props.size].x}
              text-${`${props.color}-500`}
              text-${size[props.size].text}
              hover:bg-${props.color}-400
              `}
      >
        <span>
          {' '}
          {slots.default ? slots.default() : '默认链接'}
          {' '}
        </span>
      </a>
    )
  },
})
