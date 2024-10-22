import { createRoot } from 'react-dom/client';

import App from './App';

function main() {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw Error('root element not found');
  }

  const root = createRoot(rootElement);
  root.render(<App />);
}

main();
