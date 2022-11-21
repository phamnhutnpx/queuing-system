import React from 'react';
import { Link } from 'react-router-dom';
// import BreadCrumb from '../../../components/Breadcrumb';
import icons from '../../../shared/assests/icons';

import './styles.scss';

const DeviceDetail = () => {
  return (
    <>
      <div className="device--detail">
        <div>
          {/* <BreadCrumb /> */}
          <h2>Quản lý thiết bị</h2>
        </div>

        <div style={{ display: 'flex', width: '100%' }}>
          <div className="device--detail__wrapper">
            <div style={{ marginLeft: '24px', paddingTop: '16px' }}>
              <div className="device--detail__title">
                <h3>Thông tin thiết bị</h3>
              </div>

              <div className="device--detail__items">
                <div className="device--detail__items__item">
                  <div className="device--detail__items--content">
                    <h3>Mã thiết bị:</h3>
                    <h3>Tên thiết bị:</h3>
                    <h3>Địa chỉ IP:</h3>
                  </div>

                  <div>
                    <p>KIO_01</p>
                    <p>Kiosk</p>
                    <p>128.172.308</p>
                  </div>
                </div>

                <div className="device--detail__items__item">
                  <div>
                    <h3>Loại thiết bị:</h3>
                    <h3>Tên đăng nhập:</h3>
                    <h3>Mật khẩu:</h3>
                  </div>

                  <div>
                    <p>Kiosk</p>
                    <p>Linhkyo011</p>
                    <p>CMS</p>
                  </div>
                </div>
              </div>

              <div className="device--detail__description">
                <h3>Dịch vụ sử dụng:</h3>
                <p>
                  Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô
                  hấp, Khám tổng quát.
                </p>
              </div>
            </div>
          </div>

          <Link to="/device/update" className="device--detail--update__btn">
            <img src={icons.addSquareIcon} alt="updateIcon" />
            <h4>Cập nhật thiết bị</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeviceDetail;
