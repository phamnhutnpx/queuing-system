import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/config';

const FormLogin = () => {
  const navigate = useNavigate();

  console.log('[auth]', auth);

  const onFinish = (values: any) => {
    console.log('Success:', values.names);
    navigate('/');
  };
  return (
    <Form
      style={{ paddingTop: '50px' }}
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <h2 style={{ fontWeight: '700', textAlign: 'center' }}>Đặt lại mật khẩu</h2>
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (names.password.length == 0 || names.username.length == 0) {
                return Promise.reject(new Error(names));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            <div className="loginform_field__label">
              <label>Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
            </div>
            <Form.Item
              validateTrigger={['onSubmit', 'onBlur']}
              messageVariables={{ label: 'good' }}
              className="wrap-login__input"
              name="username"
              rules={[
                { required: true, message: 'Bạn chưa nhập email để khôi phục tài khoản!' },
                {
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Bạn nhập sai định dạng của email',
                  whitespace: true,
                },
              ]}
            >
              <Input className={'login__input'} placeholder="Nhập tài khoản" />
            </Form.Item>

            {/* {loginStatus === "reject" && (
              <div className="wrap-login__input">
              <div className="loginform_field__label">
                <img style={{ width: '15px', marginRight: '3px' }} src={icons.warningIcon} alt="" />
                <label className="active">Sai mật khẩu hoặc tên đăng nhập</label>
              </div>
            </div>
            )} */}

            <Form.Item className="wrap-login__input">
              <Button
                // loading={loginStatus === "pending"}
                type="primary"
                htmlType="submit"
                className="login-form-button submit__btn cancel"
              >
                Hủy
              </Button>
              <Button
                // loading={loginStatus === "pending"}
                type="primary"
                htmlType="submit"
                className="login-form-button submit__btn"
              >
                Tiếp tục
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default FormLogin;
