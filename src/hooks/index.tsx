import React, { ReactNode } from 'react';

import { StorageProvider } from './storage';

interface AppProviderProps {
  children: ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <>
    <StorageProvider>{children}</StorageProvider>
  </>
);

export default AppProvider;
