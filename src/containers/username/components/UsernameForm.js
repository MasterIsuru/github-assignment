import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const UsernameForm = (props) => {
  const history = useHistory();

  const handleSubmit = e => {
    const { form } = props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        history.push(`/${values.username}`);
      }
    });
  };

  const { form, loading } = props;
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input a username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

const WrappedUsernameForm = Form.create(
  { name: 'username' }
)(UsernameForm);

export default (WrappedUsernameForm);
