import React from 'react';
import { Row } from 'antd';

import Header from '../../components/Header';
import ProjectTable from './components/ProjectTable';

const ProjectsContainer = () => {
  return (
    <>
      <Header />
      <div style={{ background: '#ECECEC', minHeight: '100vh' }}>
        <div className="fixHeaderLayout">
          <div className="container pt-3">
            <Row gutter={[14, 14]}>
              <ProjectTable />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsContainer;
