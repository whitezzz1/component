import { shallowMount } from '@vue/test-utils'

import { describe, expect, it } from 'vitest'
import Button from '../Button'
// 测试分组
describe('button', () => {
  // mount
  it('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })

    // 断言
    expect(wrapper.text()).toBe('Button')
  })

  describe('color', () => {
    it('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
      })
      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('bg-blue-500'),
      ).toBe(true)
    })

    it('red', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
        props: {
          color: 'red',
        },
      })

      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('bg-red-500'),
      ).toBe(true)
    })
  })

  describe('round', () => {
    it('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
      })

      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('rounded-lg'),
      ).toBe(true)
    })

    it('round:true', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
        props: {
          round: true,
        },
      })

      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('rounded-full'),
      ).toBe(true)
    })
  })

  describe('plain', () => {
    it('default', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
      })

      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('bg-blue-500'),
      ).toBe(true)
    })

    it('plain:true', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Button',
        },
        props: {
          plain: true,
        },
      })

      expect(
        wrapper
          .classes()
          .map(v => v.replace('\n', ''))
          .includes('bg-blue-100'),
      ).toBe(true)
    })
  })

  it('icon', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        icon: 'edit',
      },
    })

    expect(
      wrapper
        .find('i')
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('i-ic-baseline-edit'),
    ).toBe(true)
  })
})
