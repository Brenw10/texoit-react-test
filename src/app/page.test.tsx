import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './page';
import ReactQueryProvider from '@/core/ReactQueryProvider';

describe('testing movies page', () => {
  it('check if all tables are present', () => {
    render(
      <ReactQueryProvider>
        <Dashboard />
      </ReactQueryProvider>
    );
  });
});
