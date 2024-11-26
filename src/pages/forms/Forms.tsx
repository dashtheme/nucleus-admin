import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(
    /^[0-9]{10}$/,
    'Phone number must be 10 digits'
  ),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string()
    .matches(/^[0-9]{5}$/, 'Zip code must be 5 digits')
    .required('Required'),
  message: Yup.string(),
  subscribe: Yup.boolean(),
});

const Forms = () => {
  return (
    <div className="forms-page">
      <h1 className="h3 mb-4">Form Examples</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Basic Form</h5>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string().required('Required'),
                  lastName: Yup.string().required('Required'),
                  email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        type="text"
                        className={`form-control ${
                          errors.firstName && touched.firstName ? 'is-invalid' : ''
                        }`}
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="invalid-feedback">{errors.firstName}</div>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        className={`form-control ${
                          errors.lastName && touched.lastName ? 'is-invalid' : ''
                        }`}
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="invalid-feedback">{errors.lastName}</div>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className={`form-control ${
                          errors.email && touched.email ? 'is-invalid' : ''
                        }`}
                      />
                      {errors.email && touched.email ? (
                        <div className="invalid-feedback">{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <Field
                        name="message"
                        as="textarea"
                        className="form-control"
                        rows={3}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Advanced Form</h5>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  state: '',
                  zip: '',
                  message: '',
                  subscribe: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ errors, touched, handleReset }) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <Field
                          name="firstName"
                          type="text"
                          className={`form-control ${
                            errors.firstName && touched.firstName
                              ? 'is-invalid'
                              : ''
                          }`}
                        />
                        {errors.firstName && touched.firstName ? (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        ) : null}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <Field
                          name="lastName"
                          type="text"
                          className={`form-control ${
                            errors.lastName && touched.lastName ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.lastName && touched.lastName ? (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className={`form-control ${
                            errors.email && touched.email ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.email && touched.email ? (
                          <div className="invalid-feedback">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <Field
                          name="phone"
                          type="text"
                          className={`form-control ${
                            errors.phone && touched.phone ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.phone && touched.phone ? (
                          <div className="invalid-feedback">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <Field
                        name="address"
                        type="text"
                        className={`form-control ${
                          errors.address && touched.address ? 'is-invalid' : ''
                        }`}
                      />
                      {errors.address && touched.address ? (
                        <div className="invalid-feedback">{errors.address}</div>
                      ) : null}
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <Field
                          name="city"
                          type="text"
                          className={`form-control ${
                            errors.city && touched.city ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.city && touched.city ? (
                          <div className="invalid-feedback">{errors.city}</div>
                        ) : null}
                      </div>

                      <div className="col-md-3 mb-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <Field
                          as="select"
                          name="state"
                          className={`form-select ${
                            errors.state && touched.state ? 'is-invalid' : ''
                          }`}
                        >
                          <option value="">Select...</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                        </Field>
                        {errors.state && touched.state ? (
                          <div className="invalid-feedback">{errors.state}</div>
                        ) : null}
                      </div>

                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <Field
                          name="zip"
                          type="text"
                          className={`form-control ${
                            errors.zip && touched.zip ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.zip && touched.zip ? (
                          <div className="invalid-feedback">{errors.zip}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="subscribe"
                          className="form-check-input"
                        />
                        <label className="form-check-label" htmlFor="subscribe">
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary">
                        <FontAwesomeIcon icon={faSave} className="me-2" />
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleReset}
                      >
                        <FontAwesomeIcon icon={faUndo} className="me-2" />
                        Reset
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
