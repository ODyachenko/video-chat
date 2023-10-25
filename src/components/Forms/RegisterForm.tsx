import { useForm, SubmitHandler } from 'react-hook-form';
import React, { FC, useState } from 'react';
import { useCreateUserMutation } from '../../redux/api/userApi';
import { useUploadImageMutation } from '../../redux/api/uploadsApi';
import { BeatLoader } from 'react-spinners';
import './styles.scss';

type Inputs = {
  avatarUrl?: string;
  fullName: string;
  email: string;
  password: string;
};

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const [avatar, setAvatar] = useState(
    'http://localhost:5555/uploads/avatar_private.png'
  );
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [uploadImage] = useUploadImageMutation();
  //   const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const formData = { ...data, avatarUrl: avatar };
      const response: any = await createUser(formData);

      if (response.error) {
        if (response.error.data.message) {
          throw new Error(response.error.data.message);
        } else {
          throw new Error(response.error.data[0].msg);
        }
      }
      reset();
      //   router.push('/login');
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const { data }: any = await uploadImage(formData);
      setAvatar(`http://localhost:5555${data.url}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Сreate account</h1>
      <label className="form__avatar">
        <img
          className="form__avatar--img"
          src={avatar}
          alt="User avatar"
          height={100}
          width={100}
        />
        <input type="file" accept="image/*" onChange={handleChangeFile} />
      </label>
      <input
        className={`form__field ${!!errors.fullName ? 'error' : ''}`}
        type="text"
        placeholder="Full name"
        {...register('fullName', {
          required: 'This field is required',
          minLength: { value: 2, message: 'Min length is 2' },
          maxLength: { value: 30, message: 'Max length is 30' },
        })}
      />
      {errors.fullName && (
        <span className="form__error">{errors.fullName.message}</span>
      )}
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
        {isLoading ? <BeatLoader size={15} color="#fff" /> : 'Create'}
      </button>
    </form>
  );
};
