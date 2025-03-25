import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import AppRoutes from './routes';

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme accentColor='sky' grayColor='sand' radius='large' scaling='95%' appearance='light' panelBackground='solid'>
            <AppRoutes />
          {/* <ThemePanel/> */}
        </Theme>
      </QueryClientProvider>
    </>
  )
}

export default App;