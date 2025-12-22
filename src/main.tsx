import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import './styles/index.css';
import { Auth0ProviderWithRedirect } from './auth/Auth0ProviderWithRedirect.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirect>
        <App />
      </Auth0ProviderWithRedirect>
    </BrowserRouter>
  </StrictMode>
);
