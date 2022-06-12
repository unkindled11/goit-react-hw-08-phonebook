import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from 'redux/user/user-operations';
import useIsLogin from 'shared/hooks/login-hook';

import Section from 'shared/shared-components/section';
import Login from 'components/Login';

const LoginPage = () => {
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
      return dispatch(login(data));
    },
    [dispatch]
  );

  return (
    <Section title="You may Login hear if you already got an account">
      <Login onSubmit={loginUser} />
    </Section>
  );
};

export default LoginPage;
