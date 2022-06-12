import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from 'redux/user/user-operations';
import useIsLogin from 'shared/hooks/login-hook';

import Section from 'shared/shared-components/section';
import RegisterForm from 'components/Registration';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const isLogin = useIsLogin();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const loginUser = useCallback(
    data => {
      return dispatch(signup(data));
    },
    [dispatch]
  );

  return (
    <Section title="Enter your details to Sign Up">
      <RegisterForm onSubmit={loginUser} />
    </Section>
  );
};

export default RegisterPage;
