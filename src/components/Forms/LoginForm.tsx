import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { setIsLogin } from '../../redux/slices/userSlice';
import { useLoginUserMutation } from '../../redux/api/userApi';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './styles.scss';
import { Link } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { isLogin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     isLogin && router.push('/');
  //   }, [isLogin]);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response: any = await loginUser(data);
      if (response.error) {
        throw new Error(response.error.data.message);
      }
      localStorage.setItem('token', response.data.token);
      dispatch(setIsLogin(true));
      reset();
    } catch (error: any) {
      console.error(error.message);
      alert(error.message || 'Invalid login or password');
    }
  };

  return (
    <>
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Log into the account</h1>
        <input
          className={`form__field ${!!errors.email ? 'error' : ''}`}
          type="email"
          placeholder="E-mail"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && (
          <span className="form__error">{errors.email.message}</span>
        )}
        <input
          className={`form__field ${!!errors.password ? 'error' : ''}`}
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 5, message: 'Min length is 5' },
          })}
        />
        {errors.password && (
          <span className="form__error">{errors.password.message}</span>
        )}
        <button className="form__btn primary-btn" type="submit">
          {isLoading ? <BeatLoader size={15} color="#fff" /> : 'Log in'}
        </button>
      </form>
    </>
  );
};
