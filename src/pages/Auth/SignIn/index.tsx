import { Col } from 'antd';
import { media } from '../../../shared/assests';
import FormLogin from './FormLogin';
import './style.scss';

const SignIn = () => {
  return (
    <div className="wrap">
      <Col span={10} className="form__login">
        <img src={media.logo} alt="" />
        <FormLogin />
      </Col>

      <Col
        span={14}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className="image__bg">{media.images.imgLogin}</div>
        <div className="title">
          <span className="title__01">HỆ THỐNG</span>
          <span className="title__02">QUẢN LÝ XẾP HÀNG</span>
        </div>
      </Col>
    </div>
  );
};

export default SignIn;
