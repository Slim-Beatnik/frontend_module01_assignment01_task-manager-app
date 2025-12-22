import type { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

interface Props {
  children: ReactNode;
}

export const Auth0ProviderWithRedirect = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + '/callback',
      }}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
};
