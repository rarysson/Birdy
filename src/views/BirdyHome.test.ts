import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BirdyHome from './BirdyHome.vue'

describe('BirdyHome', () => {
  it('renders properly', () => {
    const component = mount(BirdyHome)
    expect(component).toBeTruthy()
  })
})
