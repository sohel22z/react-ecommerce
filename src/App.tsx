import React from 'react';
import { Theme, ThemePanel } from '@radix-ui/themes';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme accentColor='sky' grayColor='sand' radius='large' scaling='95%' appearance='light' panelBackground='solid'>
          <AppRoutes />
          <ThemePanel/>
        </Theme>
      </QueryClientProvider>
    </>
  )
}

export default App;