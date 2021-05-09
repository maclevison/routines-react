import { render } from '@testing-library/react'

import Hero from '.'

describe('<Hero />', () => {
  it('should', () => {
    const { container } = render(<Hero />)

    expect(container).toBeTruthy()
  })
})
