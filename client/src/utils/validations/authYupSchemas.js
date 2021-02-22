import * as Yup from 'yup';
import { object } from 'yup/lib/locale';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6)
});

const registerSchema = Yup.object({
  name: Yup.string().required('Required'),

  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6)
});

const resumePrimarySchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.string().required(),
  telephone: Yup.string().required(),
  summary: Yup.string().required(),
  skills: Yup.array().required()
});

const resumeExperienceSchema = Yup.object({
  experience: Yup.array(
    Yup.object({
      company: Yup.string().required(),
      designation: Yup.string().required(),
      location: Yup.string().required(),
      from: Yup.date().required(),
      to: Yup.date()
    })
  )
});

const resumeEducationSchema = Yup.object({
  education: Yup.array(
    Yup.object({
      institute: Yup.string().required(),
      degree: Yup.string().required(),
      location: Yup.string().required(),
      passingDate: Yup.date().required()
    })
  )
});

export {
  loginSchema,
  registerSchema,
  resumePrimarySchema,
  resumeExperienceSchema,
  resumeEducationSchema
};
