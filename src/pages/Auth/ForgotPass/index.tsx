import { Col } from 'antd';
import { media } from '../../../shared/assests';
import FormReset from './FormReset';
import './style.scss';

const ForgotPass = () => {
  return (
    <div className="wrap">
      <Col span={10} className="form__login">
        <img src={media.logo} alt="" />
        <FormReset />
      </Col>

      <Col
        span={14}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className="image__bg">{media.images.imgForgotPass}</div>
        <div className="title">
          <span className="title__01">HỆ THỐNG</span>
          <span className="title__02">QUẢN LÝ XẾP HÀNG</span>
        </div>
      </Col>
    </div>
  );
};

export default ForgotPass;
