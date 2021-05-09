import { render } from '@testing-library/react'

import TopBar from '.'

describe('<TopBar />', () => {
  it('should', () => {
    const { container } = render(<TopBar />)

    expect(container).toBeTruthy()
  })
})
