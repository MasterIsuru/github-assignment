import React from 'react';
import { Row } from 'antd';

import Header from '../../components/Header';
import ProjectReadMe from './components/ProjectReadMe';

const SingleProjectContainer = () => {
  return (
    <>
      <Header />
      <div style={{ background: '#ECECEC', minHeight: '100vh' }}>
        <div className="fixHeaderLayout">
          <div className="container pt-3">
            <Row gutter={[14, 14]}>
              <ProjectReadMe />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProjectContainer;
