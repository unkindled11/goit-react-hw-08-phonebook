import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Loader from 'shared/shared-components/loader';
import PrivateRoutes from 'shared/shared-components/routes/PrivateRoutes';
import PublicRoutes from 'shared/shared-components/routes/PublicRoutes';

const LayOut = lazy(() => import('./LayOut'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoutes />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
