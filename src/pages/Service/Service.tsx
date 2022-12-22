import React, { ReactNode } from 'react';
import { Col, Input, Layout, Row, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './style.scss';
import icons from '../../shared/assests/icons';
import { Link } from 'react-router-dom';
import DateTime from './component/DateTime';
import { CaretLeftOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons/lib/icons';
import Operating from '../../components/DropdownComponent/Operating';
import SearchCoponent from '../../components/Search';

const { Option } = Select;
const { Search } = Input;

interface DataType {
  key: React.Key;
  id: string;
  name: string;
  description: string;
  status: string;
  detail: any;
  update: any;
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
    detail: <Link to="/service/detail">Chi tiết</Link>,
    update: <Link to="/service/update">Cập nhật</Link>,
  });
}
const itemRender = (_: any, type: string, originalElement: ReactNode) => {
  if (type === 'prev') {
    return (
      <>
        <CaretLeftOutlined />
      </>
    );
  }
  if (type === 'next') {
    return <CaretRightOutlined />;
  }
  return originalElement;
};
const Service = () => {
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
                  <Operating />
                </Col>
                <Col className="content__filter-element-2" flex={3}>
                  <label>Chọn thời gian</label>
                  <DateTime />
                </Col>
              </Row>
            </Col>
            <Col className="content__filter-element w-100">
              <p>Từ khóa</p>
              <SearchCoponent />
            </Col>
          </Row>
          <Row className="content__table">
            <Table
              columns={columns}
              dataSource={data}
              pagination={{
                pageSize: 9,
                itemRender: itemRender,
              }}
              bordered
            />
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
