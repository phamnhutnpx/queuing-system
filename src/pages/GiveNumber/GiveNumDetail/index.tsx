import React from 'react';
import { Link } from 'react-router-dom';
// import BreadCrumb from '../../../components/Breadcrumb';
import icons from '../../../shared/assests/icons';

import './styles.scss';

const GiveNumDetail = () => {
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
                <h3>Thông tin cấp số</h3>
              </div>

              <div className="device--detail__items">
                <div className="device--detail__items__item">
                  <div className="device--detail__items--content">
                    <h3>Họ tên:</h3>
                    <h3>Tên dịch vụ:</h3>
                    <h3>Số thứ tự:</h3>
                    <h3>Thời gian cấp:</h3>
                    <h3>Hạn sử dụng:</h3>
                  </div>

                  <div>
                    <p>Nguyễn Thị Dung</p>
                    <p>Khám tim mạch</p>
                    <p>2001201</p>
                    <p>14:35 - 07/11/2021</p>
                    <p>18:00 - 07/11/2021</p>
                  </div>
                </div>

                <div className="device--detail__items__item">
                  <div>
                    <h3>Nguồn cấp:</h3>
                    <h3>Trạng thái:</h3>
                    <h3>Số điện thoại:</h3>
                    <h3>Địa chỉ Email:</h3>
                  </div>

                  <div>
                    <p>Kiosk</p>
                    <p>Đang chờ</p>
                    <p>0948523623</p>
                    <p>nguyendung@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* <div className="device--detail__description">
                <h3>Dịch vụ sử dụng:</h3>
                <p>
                  Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô
                  hấp, Khám tổng quát.
                </p>
              </div> */}
            </div>
          </div>

          <Link to="/givenumber" className="device--detail--update__btn">
            <img src={icons.backSquare} alt="backSquare" />
            <h4>Quay lại</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GiveNumDetail;
