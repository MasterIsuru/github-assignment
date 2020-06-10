import React from 'react';
import { Layout, Icon } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

const { Header } = Layout;

const PageHeader = () => {
  const history = useHistory();
  const { username, project } = useParams();

  const renderHeaderContent = () => {
    if (username && project) {
      return (
        <h2 style={{ paddingLeft: 20 }}>
          <Icon style={{ fontSize: 16 }} type='left' onClick={() => history.push(`/${username}`)} />
          &nbsp;{project}
        </h2>
      );
    }
    if (username) {
      return (
        <h2 style={{ paddingLeft: 20 }}>
          <Icon style={{ fontSize: 16 }} type='left' onClick={() => history.push(`/`)} />
          &nbsp;{`${username}'s Projects`}
        </h2>
      );
    }
    return null;
  }

  return (
    <Header theme="light" style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: '0' }}>
      {renderHeaderContent()}
    </Header>
  )
}

export default PageHeader;
