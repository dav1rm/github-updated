import React from 'react';

import { useStorage } from '~/hooks/storage';
import { Loading } from '~/components';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
  const { loading, users } = useStorage();

  if (loading) {
    return <Loading />;
  }

  return users?.length > 0 ? <AppRoutes /> : <AuthRoutes />;
}
