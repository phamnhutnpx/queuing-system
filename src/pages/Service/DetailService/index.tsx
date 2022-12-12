import { Col, Layout, Row, Select, Table, Typography } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import Search from 'antd/lib/input/Search';
import icons from '../../../shared/assests/icons';
import './style.scss';
import { ColumnsType } from 'antd/lib/table';
const { RangePicker } = DatePicker;
type RangeValue = [Moment | null, Moment | null] | null;
interface DataType {
  key: React.Key;
  id: string;
  status: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Số thứ tự',
    dataIndex: 'id',
  },

  {
    title: 'Trạng thái',
    dataIndex: 'status',
  },
];
const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id: `201000${i + 1}`,
    status: `Đang hoạt động`,
  });
}
const DetailService = () => {
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const disabledDate = (current: Moment) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 50;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 50;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <Layout className="service__detail">
      <h2 className="service__title">Quản lý dịch vụ</h2>

      <Row className="page-body-detail">
        <div className="page-description">
          <Row>
            <div>
              <div>
                <Typography.Title level={4} className="page-description-title">
                  Thông tin dịch vụ
                </Typography.Title>
              </div>

              <div className="page-description-item">
                <div className="label">Mã dịch vụ</div>
                <div className="content">201</div>
              </div>
              <div className="page-description-item">
                <div className="label">Tên dịch vụ</div>
                <div className="content">Khám tim mạch</div>
              </div>
              <div className="page-description-item">
                <div className="label">Mô tả</div>
                <div className="content">Chuyên các bệnh lý về tim</div>
              </div>

              <div>
                <Typography.Title level={4} className="page-description-title">
                  Quy tắc cấp số
                </Typography.Title>
              </div>
              <div className="page-description-item">
                <div className="label">Tăng tự động</div>
                <div className="content">
                  <span className="box">0001</span>
                  <span>đến</span>
                  <span className="box">1000</span>
                </div>
              </div>
              <div className="page-description-item">
                <div className="label">Surfix</div>
                <div className="content">
                  <span className="box">0001</span>
                </div>
              </div>
              <div className="page-description-item">
                <div className="label">Prefix</div>
                <div className="content">
                  <span className="box">0001</span>
                </div>
              </div>
              <div className="page-description-item">
                <div className="label">Reset mỗi ngày</div>
              </div>
            </div>
          </Row>
        </div>
        <div className="page-create-number">
          <Row className="devicepage__filter">
            <Col span={24} style={{ display: 'flex' }}>
              <div className="devicepage__filter-item">
                <Typography.Title level={5} className="devicepage__filter-item-title">
                  Trạng thái hoạt động
                </Typography.Title>
                <Select className="devicepage__filter-item-body" defaultValue={'Tất cả'}>
                  <Option value="">Tất cả</Option>
                  <Option value="1">Hoạt động</Option>
                  <Option value="2">Ngưng hoạt động</Option>
                </Select>
              </div>

              <div className="devicepage__filter-item">
                <Typography.Title level={5} className="devicepage__filter-item-title">
                  Trạng thái kết nối
                </Typography.Title>
                <RangePicker
                  value={dates || value}
                  disabledDate={disabledDate}
                  onCalendarChange={val => setDates(val)}
                  onChange={val => setValue(val)}
                  onOpenChange={onOpenChange}
                />
              </div>
              <div className="devicepage__filter-last-item">
                <div className="devicepage__filter-item">
                  <Typography.Title level={5} className="devicepage__filter-item-title">
                    Từ khóa
                  </Typography.Title>
                  <Search
                    placeholder="Nhập từ khóa"
                    allowClear
                    className="devicepage__filter-item-body"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="devicepage__body">
            <Col span={24} className="devicepage__body-table">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </div>
        <div>
          <div className="devicepage__body-modify-container">
            <div className="devicepage__body-modify-container-icon">
              <img src={icons.backSquare} alt="" />
            </div>
            <Link to={'/service/update'} className="devicepage__body-modify-container-label">
              Cập nhật danh sách
            </Link>
          </div>
        </div>
      </Row>
    </Layout>
  );
};

export default DetailService;
