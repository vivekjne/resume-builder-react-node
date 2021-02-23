import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import { resumeExperienceSchema } from '../../utils/validations/authYupSchemas';
import {
  checkFormikValid,
  checkFormikInValid
} from '../../utils/formikHelpers';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';
function ExperienceForm({ onNext, onBack }) {
  const scrollRef = React.useRef();

  return (
    <>
      <ScrollToTopOnMount />
      <Formik
        initialValues={{
          experience: [
            { company: '', designation: '', location: '', from: '', to: '' }
          ]
        }}
        validationSchema={resumeExperienceSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          onNext(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <FieldArray name="experience">
              {({ insert, remove, push }) => (
                <>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <h2 style={{ marginBottom: '25px' }}>Experience Details</h2>
                    <Button
                      variant="link"
                      onClick={() => {
                        push({
                          company: '',
                          designation: '',
                          location: '',
                          from: '',
                          to: ''
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
                      +Add another address
                    </Button>
                  </div>
                  {formik.values.experience.length > 0 &&
                    formik.values.experience.map((exp, index) => (
                      <>
                        <h4 className="mb-2 mt-2">Experience {index + 1}</h4>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeExperienceCompany"
                          >
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                              {...formik.getFieldProps(
                                `experience.${index}.company`
                              )}
                              isValid={checkFormikValid(
                                formik,
                                'experience',
                                'company',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'experience',
                                'company',
                                index
                              )}
                              type="text"
                              placeholder="Enter Company"
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeExperienceDesignation"
                          >
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                              {...formik.getFieldProps(
                                `experience.${index}.designation`
                              )}
                              type="text"
                              placeholder="Enter Designation"
                              isValid={checkFormikValid(
                                formik,
                                'experience',
                                'designation',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'experience',
                                'designation',
                                index
                              )}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={12}
                            controlId="resumeExperienceLocation"
                          >
                            <Form.Label>Company Location</Form.Label>
                            <Form.Control
                              type="text"
                              {...formik.getFieldProps(
                                `experience.${index}.location`
                              )}
                              placeholder="Enter Location"
                              isValid={checkFormikValid(
                                formik,
                                'experience',
                                'location',
                                index
                              )}
                              isInvalid={checkFormikInValid(
                                formik,
                                'experience',
                                'location',
                                index
                              )}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeExperienceFrom"
                          >
                            <Form.Label>From</Form.Label>
                            <Form.Control
                              {...formik.getFieldProps(
                                `experience.${index}.from`
                              )}
                              type="date"
                              placeholder="Enter From Date"
                              isValid={checkFormikValid(formik, 'from', index)}
                              isInvalid={checkFormikInValid(
                                formik,
                                'experience',
                                'from',
                                index
                              )}
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="resumeExperienceTo"
                          >
                            <Form.Label>To</Form.Label>
                            <Form.Control
                              {...formik.getFieldProps(
                                `experience.${index}.to`
                              )}
                              max="2021-02-21"
                              type="date"
                              placeholder="Enter To Date"
                              isInvalid={checkFormikInValid(
                                formik,
                                'experience',
                                'to',
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
                  Next: Skills
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ExperienceForm;
