import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { resumeEducationSchema } from '../../utils/validations/authYupSchemas';
import {
  checkFormikValid,
  checkFormikInValid
} from '../../utils/formikHelpers';
function EducationForm({ onNext, onBack }) {
  const scrollRef = React.useRef();

  return (
    <>
      <Formik
        initialValues={{
          education: [
            {
              institute: '',
              degree: '',
              location: '',
              passingDate: ''
            }
          ]
        }}
        validationSchema={resumeEducationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          onNext();
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <FieldArray name="education">
              {({ insert, remove, push }) => (
                <>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <h2 style={{ marginBottom: '25px' }}>Education Details</h2>
                    <Button
                      variant="link"
                      onClick={() => {
                        push({
                          institute: '',
                          degree: '',
                          location: '',
                          passingDate: ''
                        });
                        setTimeout(() => {
                          scrollRef &&
                            scrollRef.current &&
                            scrollRef.current.scrollIntoView({
                              behavior: 'smooth'
                            });
                        }, 300);
                      }}
                    >
                      +Add Education
                    </Button>
                  </div>
                  {formik.values.education.length > 0 &&
                    formik.values.education.map((edu, index) => (
                      <>
                        <h4 className="mb-2 mt-2">Education {index + 1}</h4>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeEducationInstitute"
                          >
                            <Form.Label>Institute</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Institute"
                              {...formik.getFieldProps(
                                `education.${index}.institute`
                              )}
                              isValid={checkFormikValid(
                                formik,
                                'education',
                                'institute',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'education',

                                'institute',
                                index
                              )}
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeEducationDegree"
                          >
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Degree"
                              {...formik.getFieldProps(
                                `education.${index}.degree`
                              )}
                              isValid={checkFormikValid(
                                formik,
                                'education',

                                'degree',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'education',

                                'degree',
                                index
                              )}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={12}
                            controlId="resumeEducationLocation"
                          >
                            <Form.Label>Institute Location</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Institute Location"
                              {...formik.getFieldProps(
                                `education.${index}.location`
                              )}
                              isValid={checkFormikValid(
                                formik,
                                'education',

                                'location',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'education',

                                'location',
                                index
                              )}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={12}
                            controlId="resumeEducationPassingDate"
                          >
                            <Form.Label>Passing Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Enter Passing Date"
                              max={Date.now()}
                              {...formik.getFieldProps(
                                `education.${index}.passingDate`
                              )}
                              isValid={checkFormikValid(
                                formik,
                                'education',

                                'passingDate',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'education',

                                'passingDate',
                                index
                              )}
                            />
                          </Form.Group>
                        </Form.Row>
                      </>
                    ))}
                </>
              )}
            </FieldArray>

            <div ref={scrollRef}></div>
            <Row>
              <Col md={2} className="mb-2 mb-md-0">
                <Button onClick={onBack} variant="dark" block>
                  Back
                </Button>
              </Col>
              <Col md={{ span: 3, offset: 7 }} className="mb-4">
                <Button variant="info" type="submit" block>
                  Next: Preview
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EducationForm;
