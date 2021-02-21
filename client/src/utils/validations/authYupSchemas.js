import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6)
});

const registerSchema = Yup.object({
  name: Yup.string().required('Required'),

  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6)
});

export { loginSchema, registerSchema };
