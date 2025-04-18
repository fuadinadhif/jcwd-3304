"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationRules = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be less than 12 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Password must be contain a lower case and an uppercase"
    )
    .required("Password is required"),
});

export default function FormikPage() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationRules}
        onSubmit={(values, { resetForm }) => {
          alert(
            `Hallo, ${values.name}! Your email is ${values.email} and your password is ${values.password}`
          );
          resetForm();
        }}
      >
        {() => {
          return (
            <Form className="grid gap-4">
              <div className="grid">
                <label htmlFor="name">Name</label>
                <Field
                  className="border border-white"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type your name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-2"
                />
              </div>
              <div className="grid">
                <label htmlFor="email">Email</label>
                <Field
                  className="border border-white"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-2"
                />
              </div>
              <div className="grid">
                <label htmlFor="password">Password</label>
                <Field
                  className="border border-white"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-2"
                />
              </div>
              <button type="submit" className="bg-white text-black">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </main>
  );
}
