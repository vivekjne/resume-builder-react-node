import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import css from './css/preview.module.css';
import EmailIcon from '../../assets/images/email.png';
import PhoneIcon from '../../assets/images/phone.png';
import LocationIcon from '../../assets/images/location.png';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';

function formatDate(date) {
  let tempDate = new Date(date);
  return tempDate.getMonth();
}

function Preview({ data }) {
  console.log({ data });
  return (
    <>
      <ScrollToTopOnMount />
      {data ? (
        <div className={css['resume__preview_container']}>
          <Row>
            <Col xs={12} sm={4} className={css['resume__personal-details']}>
              <Container>
                <h3>
                  {data.name &&
                    data.name.split(' ').map((n) => (
                      <>
                        {n} <br />
                      </>
                    ))}
                  <div className={css['small-divider']}></div>
                </h3>

                <ul className={css['resume__personal-details-item']}>
                  <li>
                    <img src={EmailIcon} />
                    <span>{data.email}</span>
                  </li>

                  <li>
                    <img src={PhoneIcon} />
                    <span>{data.telephone}</span>
                  </li>

                  <li>
                    <img src={LocationIcon} />
                    <span>{data.address}</span>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col xs={12} sm={8} className={css['resume__summary']}>
              <Container>
                <h6>Professional Summary</h6>
                <p>{data.summary}</p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} className={css['resume__skills_education']}>
              <Container className={css['skills__container']}>
                <h6>Skills</h6>
                <ul>
                  {Array.isArray(data.skills) &&
                    data.skills.map((d) => <li>{d}</li>)}
                </ul>
              </Container>

              <Container className={css['education__container']}>
                <h6>Education</h6>
                {Array.isArray(data.education) &&
                  data.education.map((edu) => (
                    <p>
                      <strong>{edu.institute}</strong>
                      <br />
                      {edu.location} . {edu.passingDate}
                      <br />
                      Degree: {edu.degree}
                    </p>
                  ))}
              </Container>
            </Col>
            <Col xs={12} sm={8} className={css['resume__skills_experience']}>
              <Container className={css['experience_container']}>
                <h6>WORK HISTORY</h6>
                {Array.isArray(data.education) &&
                  data.experience.map((exp) => (
                    <p className="mb-4">
                      <strong>
                        {exp.company} - {exp.designation}
                      </strong>
                      <br />
                      {exp.location}
                      <br />
                      {exp.from} - {exp.to}
                    </p>
                  ))}
              </Container>
            </Col>
          </Row>
        </div>
      ) : (
        <h2>FAILED TO LOAD PREVIEW</h2>
      )}
    </>
  );
}

export default Preview;
