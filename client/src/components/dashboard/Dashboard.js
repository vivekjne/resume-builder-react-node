import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100% - 48px)'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>
        You dont have any resumes
        <br />
        <Link to="/resume/new">+ Add New</Link>
      </h2>
    </div>
  );
}
