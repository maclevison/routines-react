import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should', () => {
    const { container } = render(<Button />)

    expect(container).toBeTruthy()
  })
})
