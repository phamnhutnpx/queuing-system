import React, { ReactNode } from 'react';
import { Col, Layout, Row, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { CaretLeftOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons/lib/icons';

import './style.scss';
import DateTime from './component/DateTime';
import icons from '../../shared/assests/icons';

interface DataType {
  key: React.Key;
  id: string;
  name: string;
  providedTime: string;
  status: string | any;
  source: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Số thứ tự',
    dataIndex: 'id',
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'name',
  },
  {
    title: 'Thời gian cấp',
    dataIndex: 'providedTime',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
  },
  {
    title: 'Nguồn cấp',
    dataIndex: 'source',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id: `KIO_${i + 1}`,
    name: `Kiosk ${i}`,
    providedTime: `${i}:00 17/12/2022`,
    status: (
      <span>
        <img src={icons.dotYellowIcon} alt="" />
        &nbsp; Đang hoạt động
      </span>
    ),
    source: `Hệ thống ${i}`,
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

const download = (csv: string, filename: string) => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const handleDownload = () => {
  const csv = 'column1,column2\nvalue1,value2\n';
  download(csv, 'myfile.csv');
};
const Report = () => {
  return (
    <Layout className="report">
      <Row className="report__content">
        <Col className="report__content-data w-100">
          <Row className="content__filter">
            <Col className="content__filter-element w-100">
              <Row className="w-100">
                <Col className="content__filter-element-2" flex={3}>
                  <label>Chọn thời gian</label>
                  <DateTime />
                </Col>
              </Row>
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
        <Col className="report__content-add">
          <Link className="btn-download" to="/report" onClick={handleDownload}>
            <img src={icons.documentDownload} alt="" />
            <p>Tải về</p>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default Report;
