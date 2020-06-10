import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Col, Table, Icon } from 'antd';

import { getProjects } from '../../../actions/projects';

const columns = [
  {
    title: '',
    dataIndex: 'name',
    render: (text, row) => <div>
      <h3>{text}</h3>
      <h5>{row.description}</h5>
    </div>,
  }
];

const ProjectTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { username } = useParams();

  const projectList = useSelector(state => state.projects.projectList);
  const projectListLoading = useSelector(state => state.projects.loading);

  useEffect(() => {
    dispatch(getProjects(username));
  }, [dispatch, username]);

  return (
    <Col md={{ span: 24 }} lg={{ span: 24 }}>
      <Card className="no-padding dashboardConnections">
        <Table
          onRow={(row) => ({
            onClick: event => history.push(`/${username}/${row.name}`)
          })}
          showHeader={false}
          columns={columns}
          dataSource={projectList && projectList.length ? projectList : []}
          className="connections-list"
          loading={{
            spinning: projectListLoading,
            indicator: <Icon type="loading" />,
          }}
        />
      </Card>
    </Col>
  )
}

export default (ProjectTable)
