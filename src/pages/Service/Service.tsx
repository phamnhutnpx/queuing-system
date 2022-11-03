import React from 'react';
import { Col, DatePicker, Input, Layout, Row, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import './style.scss';
import icons from '../../shared/assests/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;
const { Search } = Input;

interface DataType {
  key: React.Key;
  id: string;
  name: string;
  description: string;
  status: string;
  detail: string;
  update: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Mã dịch vụ',
    dataIndex: 'id',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'name',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'status',
  },
  {
    title: '',
    dataIndex: 'detail',
  },
  {
    title: '',
    dataIndex: 'update',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id: `KIO_${i + 1}`,
    name: `Kiosk ${i}`,
    description: `Dịch vụ ${i} hoạt động`,
    status: `Đang hoạt động`,
    detail: `Chi tiết`,
    update: `Cập nhật`,
  });
}

const Service = () => {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const onSearch = (value: string) => console.log(value);

  return (
    <Layout className="service">
      <h2 className="service__title">Quản lý dịch vụ</h2>
      <Row className="service__content">
        <Col className="service__content-data w-100">
          <Row className="content__filter">
            <Col className="content__filter-element w-100">
              <Row className="w-100">
                <Col className="content__filter-element-1" flex={2}>
                  <label>Trạng thái hoạt động</label>
                  <Select defaultValue="all" style={{ minWidth: '200px' }}>
                    <Option value="all">Tất cả</Option>
                    <Option value="action">Hoạt động</Option>
                    <Option value="dormant">Ngưng hoạt động</Option>
                  </Select>
                </Col>
                <Col className="content__filter-element-2" flex={3}>
                  <label>Chọn thời gian</label>
                  <div className="element-item">
                    <DatePicker
                      defaultValue={moment('10/10/2021', dateFormatList[0])}
                      format={dateFormatList}
                    />
                    <img
                      style={{ padding: '0 10px' }}
                      src={icons.rightTriangleIcon}
                      alt="rightTriangleIcon"
                    />
                    <DatePicker
                      defaultValue={moment('18/10/2021', dateFormatList[0])}
                      format={dateFormatList}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="content__filter-element w-100">
              <label htmlFor="searchId">Từ khóa</label>
              <Search id="searchId" placeholder="Nhập từ khóa" onSearch={onSearch} />
            </Col>
          </Row>
          <Row className="content__table">
            <Table columns={columns} dataSource={data} />
          </Row>
        </Col>
        <Col className="service__content-add">
          <Link className="btn-addService" to="/service/add">
            <img src={icons.addSquareIcon} alt="" />
            <p>Thêm dịch vụ</p>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default Service;
