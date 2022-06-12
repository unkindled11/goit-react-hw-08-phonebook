import { Navigate, Outlet } from 'react-router-dom';

import useIsLogin from 'shared/hooks/login-hook';

const PublicRoutes = () => {
  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;
