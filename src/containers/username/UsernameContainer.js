import React, { memo } from 'react';
import { Card, Col, Row, Layout } from 'antd';

import UsernameForm from './components/UsernameForm';

const { Content } = Layout;

const UsernameContainer = () => {
  return (
    <Content >
      <div style={{ background: '#ECECEC', padding: '95px 30px 30px 30px', minHeight: '100vh' }}>
        <Row gutter={16}>
          <Col md={{ span: 16, offset: 4 }} lg={{ span: 10, offset: 7 }} >
            <Card bordered={false} className="withShadow">
              <Row gutter={[10, 24]} className="wizard-branding">
                <Col span={24}>
                  <h2>Github Username</h2>
                  <UsernameForm />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default memo(UsernameContainer)
