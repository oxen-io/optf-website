import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import isLive from '@/utils/environment';

export interface Values {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  recaptcha?: boolean | string;
}

export default function ContactUsForm() {
  const [buttonText, setButtonText] = useState('Submit');
  const labelClasses = 'font-bold mb-2';
  const inputClasses = 'bg-gray-50 border-2 border-gray-100';
  const errorClasses = 'text-red-600 border-red-600';

  return (
    <div className="flex flex-col mx-5 lg:mb-10 md:w-5/6 xl:w-1/2">
      <h1 className="mt-16 text-4xl font-semibold">
        Help us build the tools you need
      </h1>
      <h4 className="my-10">
        Found a bug? Got a great idea? Want to give us some feedback? Drop us a
        line.
      </h4>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
          recaptcha: false,
        }}
        validate={(values: Values) => {
          const errors: Values = {};
          if (!values.name) {
            errors.name = 'This field is required';
          } else if (!values.email) {
            errors.email = 'This field is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } else if (!values.subject) {
            errors.subject = 'This field is required';
          } else if (!values.message) {
            errors.message = 'This field is required';
          } else if (!values.recaptcha) {
            errors.recaptcha = 'reCAPTCHA is required.';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setButtonText('Submitting...');
          setSubmitting(false);
          let response;
          try {
            response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            switch (response.status) {
              case 201:
                setButtonText('Sent successfully ✓');
                break;
              case 400:
              default:
                setButtonText('Submit failed ✗');
                break;
            }
          } catch (error) {
            setButtonText('Submit failed ✗');
          }
        }}
      >
        {({ isSubmitting, errors, setFieldValue }) => (
          <Form>
            <div className="flex flex-col justify-between my-10 md:flex-row ">
              <div className="flex flex-col w-full mr-5">
                <label className={classNames(labelClasses)} htmlFor="name">
                  Name<span className="text-red-600">*</span>
                </label>
                <Field
                  placeholder="Required"
                  className={classNames([
                    inputClasses,
                    errors.name && errorClasses,
                  ])}
                  type="text"
                  name="name"
                />
                <ErrorMessage
                  className={classNames(errorClasses)}
                  name="name"
                  component="span"
                />
              </div>
              <div className="flex flex-col w-full mt-10 md:mt-0">
                <label htmlFor="email" className={classNames(labelClasses)}>
                  Email<span className="text-red-600">*</span>
                </label>
                <Field
                  className={classNames([
                    inputClasses,
                    errors.email && errorClasses,
                  ])}
                  placeholder="Required"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className={classNames(errorClasses)}
                  name="email"
                  component="span"
                />
              </div>
            </div>
            <div className="flex flex-col w-full my-10">
              <label htmlFor="subject" className={classNames(labelClasses)}>
                Subject <span className="text-red-600">*</span>
              </label>
              <Field
                className={classNames([
                  inputClasses,
                  errors.subject && errorClasses,
                ])}
                placeholder="Required"
                type="text"
                name="subject"
              />
              <ErrorMessage
                className={classNames(errorClasses)}
                name="subject"
                component="span"
              />
            </div>
            <div className="flex flex-col my-10">
              <label htmlFor="message" className={classNames(labelClasses)}>
                Message<span className="text-red-600">*</span>
              </label>
              <Field
                className={classNames([
                  inputClasses,
                  errors.message && errorClasses,
                  'resize-none',
                ])}
                placeholder="Message"
                rows={6}
                as="textarea"
                name="message"
              />
              <ErrorMessage
                className={classNames(errorClasses)}
                name="message"
                component="span"
              />
            </div>
            <div className="flex flex-col">
              <ReCAPTCHA
                sitekey={String(
                  isLive()
                    ? process.env.GOOGLE_RECAPTCHA_FORM_SITE_PRODUCTION_KEY
                    : process.env.GOOGLE_RECAPTCHA_FORM_SITE_DEVELOPMENT_KEY
                )}
                onChange={(value) => {
                  console.log('onchange funciton');
                  setFieldValue('recaptcha', value);
                }}
              />
              <ErrorMessage
                className={classNames(errorClasses)}
                name="recaptcha"
                component="span"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 my-10 font-bold text-white bg-blue-500 rounded-md"
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
