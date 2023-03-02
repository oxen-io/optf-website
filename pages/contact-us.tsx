import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import { useState } from 'react';

export interface Values {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactUs() {
  const labelClasses = 'font-bold mb-2';
  const inputClasses = 'bg-gray-50 border-2 border-gray-100';
  const errorClasses = 'text-red-600 border-red-600';
  const [buttonText, setButtonText] = useState('Submit button');

  return (
    <Layout title="Contact - OPTF">
      <Banner
        title="Get in touch​"
        subtitle="Your feedback and support helps us fulfill our mission of making digital privacy accessible to all."
      />
      <div className="flex flex-col mx-10 lg:mx-40 2xl:mx-auto md:w-1/3">
        <h1 className="text-4xl font-semibold">
          Help us build the tools you need
        </h1>
        <h4 className="my-10">
          Found a bug? Got a great idea? Want to give us some feedback? Drop us
          a line.
        </h4>
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
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
              const result = await response.json();
              console.log(result);
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
          {({ isSubmitting, errors }) => (
            <Form>
              <div className="flex flex-col justify-between y-10 md:flex-row">
                <div className="flex flex-col w-full mr-5">
                  <label className={classNames(labelClasses)} htmlFor="name">
                    Name
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
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className={classNames(labelClasses)}>
                    Email
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
                  Subject
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
                  Message
                </label>
                <Field
                  className={classNames([
                    inputClasses,
                    errors.message && errorClasses,
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
              <button
                type="submit"
                className="px-5 py-3 my-10 text-white bg-blue-500 rounded-sm"
                disabled={isSubmitting}
              >
                {buttonText}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
