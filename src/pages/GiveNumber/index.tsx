import React from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

import { Link } from 'react-router-dom';

// import BreadCrumb from '../../components/Breadcrumb';

import icons from '../../shared/assests/icons';
import Services from '../../components/DropdownComponent//Services';
import Supply from '../../components/DropdownComponent//Supply';
import Condition from '../../components/DropdownComponent/Condition';
import SearchCoponent from '../../components/Search';

import './styles.scss';
import TimeSelect from '../../components/DropdownComponent/TimeSelect';
interface DataType {
  key: string;
  stt: string;
  nameClient: string;
  nameServices: any;
  giveNumberTime: string;
  HSD: string;
  status: string;
  supply: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    width: '93px',
    render: text => <>{text}</>,
  },

  {
    title: 'Tên khách hàng',
    dataIndex: 'nameClient',
    key: 'nameClient',
    width: '162px',
  },

  {
    title: 'Tên dịch vụ ',
    dataIndex: 'nameServices',
    key: 'nameServices',
    width: '171px',
  },

  {
    title: 'Thời gian cấp',
    dataIndex: 'giveNumberTime',
    key: 'giveNumberTime',
    width: '161px',
  },

  {
    title: 'Hạn sử dụng',
    dataIndex: 'HSD',
    key: 'HSD',
    width: '174px',
  },

  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    width: '147px',
  },

  {
    title: 'Nguồn cấp',
    dataIndex: 'supply',
    key: 'supply',
    width: '120px',
  },

  {
    title: '',
    dataIndex: 'detail',
    key: 'detail',
    render: () => <Link to="/givenumber/detail">Chi tiết</Link>,
    width: '78px',
  },
];

const data: DataType[] = [
  {
    key: '1',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '2',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '3',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '4',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '5',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '6',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '7',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '8',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '9',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },

  {
    key: '10',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '11',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '12',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '13',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
  {
    key: '14',
    stt: '2010001',
    nameClient: 'Lê Huỳnh Ái Vân',
    nameServices: 'Khám tim mạch',
    HSD: '14:35 - 07/11/2021',
    giveNumberTime: '14:35 - 12/11/2021',
    status: 'Đang chờ',
    supply: 'Kiosk',
  },
];

const paginationConfig = {
  className: 'device--tables__pagination',
  responsive: true,
  pageSize: 9,
  showSizeChanger: false,
  showQuickJumper: false,
};

const GiveNumber: React.FC = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const customFormat: DatePickerProps['format'] = value =>
    `custom format: ${value.format(dateFormat)}`;

  const customWeekStartEndFormat: DatePickerProps['format'] = value =>
    `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
      .endOf('week')
      .format(weekFormat)}`;

  return (
    <>
      <div className="GN">
        <div className="GN--breadcrumb">{/* <BreadCrumb /> */}</div>
        <div className="GN--title">
          <h2>Quản lý cấp số</h2>
        </div>
        <div className="actions">
          <div className="actions--services">
            <div className="actions--services actions--default">Tên dịch vụ</div>
            <Services />
          </div>

          <div className="actions--condition">
            <div className="actions--condition__text actions--default">Tình trạng</div>
            <Condition />
          </div>

          <div className="actions--supply">
            <div className="actions--supply__text actions--default">Nguồn cấp</div>
            <Supply />
          </div>

          <div className="actions--date">
            <div className="actions--date__text actions--default">Chọn thời gian</div>

            {/* <div className="actions--date__group"> */}
            {/* <DatePicker
                suffixIcon={false}
                defaultValue={moment('2015/01/01', dateFormat)}
                format={dateFormat}
              />

              <div className="actions--date__group--icon">
                <img src={icons.rightTriangleIcon} alt="date_icon" />
              </div>

              <DatePicker
                suffixIcon={false}
                defaultValue={moment('2015/01/01', dateFormat)}
                format={dateFormat}
              /> */}
            <TimeSelect />
            {/* </div> */}

            {/* <RangePicker
              separator={false} // dấu phân cách giữa 2 date
              suffixIcon={false}
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            /> */}
          </div>

          <div className="actions--search">
            <div className="actions-search__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>

        <div className="GN--tables">
          <Table bordered columns={columns} dataSource={data} pagination={paginationConfig} />

          <Link to="/givenumber/add" className="GN--add__btn">
            <img src={icons.addSquareIcon} alt="addDevice" />
            <h4>Cấp số mới</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GiveNumber;
