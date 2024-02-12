import React from 'react';
import { x } from '@xstyled/styled-components'

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <x.button type="button" color="blue">Hello from host</x.button>
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
