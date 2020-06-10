import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Card, Col, Icon } from 'antd';

import { getProjectReadMe } from '../../../actions/projects';

const ProjectReadMe = () => {
  const dispatch = useDispatch();
  const { username, project } = useParams();

  const currentProject = useSelector(state => state.projects.currentProject);
  const currentProjectLoading = useSelector(state => state.projects.loading);

  useEffect(() => {
    dispatch(getProjectReadMe(username, project));
  }, [dispatch, username, project]);

  if (currentProjectLoading) {
    return (
      <Col md={{ span: 24 }} lg={{ span: 24 }}>
        <Card
          className="no-padding dashboardConnections"
          style={{ textAlign: 'center', height: 120, padding: 50 }}
        >
          <Icon type="loading" />
        </Card>
      </Col>
    )
  }

  if (!currentProject || currentProject.error) {
    return (
      <Col md={{ span: 24 }} lg={{ span: 24 }}>
        <Card
          className="no-padding dashboardConnections"
          style={{ textAlign: 'center', height: 120, padding: 50 }}
        >
          No data found!
        </Card>
      </Col>
    )
  }

  return (
    <Col md={{ span: 24 }} lg={{ span: 24 }}>
      <Card
        className="no-padding dashboardConnections"
        style={{ padding: 20 }}
      >
        <ReactMarkdown source={currentProject} />
      </Card>
    </Col>
  )
}

export default ProjectReadMe;
