import { Select, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss';
import icons from '../../shared/assests/icons';

const { Option } = Select;

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
    smooth: true,
  };
  return (
    <Row className="dashboard">
      <Col className="dashboard__left">
        <h2 className="dashboard__left-title">Biểu đồ cấp số</h2>
        <Row className="dashboard__left-statistical">
          <Col span={6 - 0.1} className="statistical__item ant-card-bordered">
            <Row>
              <img className="statistical__item-icon" src={icons.sttDaCapIcon} alt="" />
              <p
                className="statistical__item-title"
                style={{
                  width: '60px',
                }}
              >
                Số thứ tự đã cấp
              </p>
            </Row>
            <Row className="statistical__item-row-2 row-data">
              <div className="" style={{ fontWeight: '700', fontSize: '30px' }}>
                4.221
              </div>
              <span
                style={{
                  borderRadius: '7px',
                  background: 'rgb(255, 149, 0, 0.15)',
                  height: '15px',
                  fontSize: '8px',
                  margin: '0 auto',
                  padding: '2px 5px',
                  display: 'flex',
                }}
              >
                <img src={icons.muiTenLenIcon} alt="" style={{ padding: '1px 3px' }} />
                <span style={{ color: '#FF9138', fontWeight: 'bold' }}>32,14%</span>
              </span>
            </Row>
          </Col>
          <Col span={6 - 0.1} className="statistical__item ant-card-bordered">
            <Row>
              <img className="statistical__item-icon" src={icons.sttDaSuDungIcon} alt="" />
              <p
                className="statistical__item-title"
                style={{
                  width: '75px',
                }}
              >
                Số thứ tự đã sử dụng
              </p>
            </Row>
            <Row className="statistical__item-row-2 row-data">
              <div className="" style={{ fontWeight: '700', fontSize: '30px' }}>
                3.721
              </div>
              <span
                style={{
                  borderRadius: '7px',
                  background: 'rgb(255, 149, 0, 0.15)',
                  height: '15px',
                  fontSize: '8px',
                  margin: '0 auto',
                  padding: '2px 5px',
                  display: 'flex',
                }}
              >
                <img src={icons.muiTenLenIcon} alt="" style={{ padding: '1px 3px' }} />
                <span style={{ color: '#FF9138', fontWeight: 'bold' }}>32,14%</span>
              </span>
            </Row>
          </Col>
          <Col span={6 - 0.1} className="statistical__item ant-card-bordered">
            <Row>
              <img className="statistical__item-icon" src={icons.sttDangChoIcon} alt="" />
              <p
                className="statistical__item-title"
                style={{
                  width: '60px',
                }}
              >
                Số thứ tự đang chờ
              </p>
            </Row>
            <Row className="statistical__item-row-2 row-data">
              <div className="" style={{ fontWeight: '700', fontSize: '30px' }}>
                468
              </div>
              <span
                style={{
                  borderRadius: '7px',
                  background: 'rgb(255, 149, 0, 0.15)',
                  height: '15px',
                  fontSize: '8px',
                  margin: '0 auto',
                  padding: '2px 5px',
                  display: 'flex',
                }}
              >
                <img src={icons.muiTenLenIcon} alt="" style={{ padding: '1px 3px' }} />
                <span style={{ color: '#FF9138', fontWeight: 'bold' }}>32,14%</span>
              </span>
            </Row>
          </Col>
          <Col span={6 - 0.1} className="statistical__item ant-card-bordered">
            <Row>
              <img className="statistical__item-icon" src={icons.sttDaBoQuaIcon} alt="" />
              <p
                className="statistical__item-title"
                style={{
                  width: '75px',
                }}
              >
                Số thứ tự đã bỏ qua
              </p>
            </Row>
            <Row className="statistical__item-row-2 row-data">
              <div className="" style={{ fontWeight: '700', fontSize: '30px' }}>
                32
              </div>
              <span
                style={{
                  borderRadius: '7px',
                  background: 'rgb(255, 149, 0, 0.15)',
                  height: '15px',
                  fontSize: '8px',
                  margin: '0 auto',
                  padding: '2px 5px',
                  display: 'flex',
                }}
              >
                <img src={icons.muiTenLenIcon} alt="" style={{ padding: '1px 3px' }} />
                <span style={{ color: '#FF9138', fontWeight: 'bold' }}>32,14%</span>
              </span>
            </Row>
          </Col>
        </Row>
        <div className="dashboard__left-area">
          <div className="area__header">
            <div className="area__header-item-1">
              <p>Bảng thống kê theo ngày</p>
              <p>Tháng 11/2021</p>
            </div>
            <div className="area__header-item-2">
              <p>Xem theo</p>
              <Select defaultValue="day" style={{ width: 106 }}>
                <Option value="day">Ngày</Option>
                <Option value="week">Tuần</Option>
                <Option value="month">Tháng</Option>
              </Select>
            </div>
          </div>
          <Area
            {...config}
            style={{
              borderRadius: '10px',
              padding: '10px',
            }}
          />
        </div>
      </Col>
      <Col className="dashboard__right">
        <h2 style={{ fontWeight: 'bold', color: '#FF9138' }}>Biểu đồ cấp số</h2>
        <Row
          className="dashboard__right-element"
          style={{
            borderRadius: '12px',
            padding: '10px',
            boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          }}
        >
          <Col>
            <img src={icons.circleOrangeIcon} style={{ width: '48px' }} alt="" />
          </Col>
          <Col>
            <p
              style={{
                fontSize: '24px',
                width: '75px',
                fontWeight: '700',
                margin: '0 12px',
                padding: '3px 0',
              }}
            >
              4221
            </p>
            <div style={{ fontSize: '14px', color: '#FF7506' }}>
              <img
                className="icon-circle"
                src={icons.desktopIcon}
                alt=""
                style={{ marginRight: '5px' }}
              />
              Thiết bị
            </div>
          </Col>
          <Col className="element__item-3">
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotYellowIcon} alt="" style={{ marginRight: '3px' }} />
              Đang hoạt động{' '}
              <span style={{ color: '#ff7506', fontSize: '14px', fontWeight: '700' }}>3.799</span>
            </p>
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotGrayIcon} alt="" style={{ marginRight: '3px' }} />
              Ngưng hoạt động{' '}
              <span style={{ color: '#ff7506', fontSize: '14px', fontWeight: '700' }}>422</span>
            </p>
          </Col>
        </Row>
        <Row
          className="dashboard__right-element"
          style={{
            borderRadius: '12px',
            padding: '10px',
            boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          }}
        >
          <Col>
            <img src={icons.circleBlueIcon} style={{ width: '48px' }} alt="" />
          </Col>
          <Col>
            <p
              style={{
                fontSize: '24px',
                width: '75px',
                fontWeight: '700',
                margin: '0 12px',
                padding: '3px 0',
              }}
            >
              276
            </p>
            <div style={{ fontSize: '14px', color: '#4277FF' }}>
              <img src={icons.serviceIcon} alt="" style={{ marginRight: '5px' }} />
              Dịch vụ
            </div>
          </Col>
          <Col className="element__item-3">
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotYellowIcon} alt="" style={{ marginRight: '3px' }} />
              Đang hoạt động{' '}
              <span style={{ color: '#4277FF', fontSize: '14px', fontWeight: '700' }}>210</span>
            </p>
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotGrayIcon} alt="" style={{ marginRight: '3px' }} />
              Ngưng hoạt động{' '}
              <span style={{ color: '#4277FF', fontSize: '14px', fontWeight: '700' }}>66</span>
            </p>
          </Col>
        </Row>
        <Row
          className="dashboard__right-element"
          style={{
            borderRadius: '12px',
            padding: '10px',
            boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          }}
        >
          <Col>
            <img src={icons.circleGreenIcon} style={{ width: '48px' }} alt="" />
          </Col>
          <Col>
            <p
              style={{
                fontSize: '24px',
                width: '75px',
                fontWeight: '700',
                margin: '0 12px',
                padding: '3px 0',
              }}
            >
              4221
            </p>
            <div style={{ fontSize: '14px', color: '#35C75A' }}>
              <img src={icons.numberLevelIcon} alt="" style={{ marginRight: '5px' }} />
              Cấp số
            </div>
          </Col>
          <Col className="element__item-3">
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotYellowIcon} alt="" style={{ marginRight: '3px' }} />
              Đã sử dụng{' '}
              <span style={{ color: '#35C75A', fontSize: '14px', fontWeight: '700' }}>3.799</span>
            </p>
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotGrayIcon} alt="" style={{ marginRight: '3px' }} />
              Đang chờ{' '}
              <span style={{ color: '#35C75A', fontSize: '14px', fontWeight: '700' }}>422</span>
            </p>
            <p style={{ fontSize: '12px' }}>
              <img src={icons.dotGrayIcon} alt="" style={{ marginRight: '3px' }} />
              Bỏ qua{' '}
              <span style={{ color: '#35C75A', fontSize: '14px', fontWeight: '700' }}>422</span>
            </p>
          </Col>
        </Row>
        <Row className="calendar">
          <Calendar />
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
