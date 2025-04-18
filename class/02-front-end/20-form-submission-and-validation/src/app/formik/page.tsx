"use client";

import { Formik, Form, Field } from "formik";

export default function FormikPage() {
  return (
    <main>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values, { resetForm }) => {
          alert(`Hallo, ${values.name}! Your email is ${values.email}`);
          resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type your name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email"
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// function firstFunction(param: () => void) {
//   const result = param();
// }

// firstFunction(() => {
//   return 10;
// });
