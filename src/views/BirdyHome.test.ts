import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'

import BirdyHome from './BirdyHome.vue'

describe('BirdyHome', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const component = mount(BirdyHome)

    expect(component).toBeTruthy()
  })
})
