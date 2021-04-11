import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

test('renders correctly', async () => {
    render(<Spinner />);

    expect(screen.getByLabelText(/loading/i)).toMatchInlineSnapshot(`
        <div
          aria-label="loading..."
          class="sc-bdfBwQ fYEmZi"
        >
          <div />
          <div />
        </div>
    `);
});
