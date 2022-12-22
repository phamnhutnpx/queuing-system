import React from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Link } from 'react-router-dom';

import SearchCoponent from '../../components/Search';
// import Operating from '../../components/DropdownComponent/Operating';
// import Connection from '../../components/DropdownComponent/Connection';

import './styles.scss';
import icons from '../../shared/assests/icons';
import Operating from '../../components/DropdownComponent/Operating';
import Connection from '../../components/DropdownComponent/Connection';
// import SearchCoponent from '../../components/Searrch';

interface DataType {
  key: string;
  deviceId: string;
  name: string;
  IPaddress: any;
  status: string[] | any[];
  statusConnect: string[] | any[];
  services: string;
  // tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã thiết bị',
    dataIndex: 'deviceId',
    key: 'deviceId',
    width: '103px',
    render: text => <>{text}</>,
  },

  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
    width: '110px',
    key: 'name',
  },

  {
    title: 'Địa chỉ IP',
    dataIndex: 'IPaddress',
    key: 'IPaddress',
    width: '138px',
  },

  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'status',
    key: 'status',
    width: '180px',
    // render: (_, { status }) => (
    //   <>
    //     {status.map((stt: any) => {
    //       let textStt = stt.length > 10 ? "Ngưng hoạt động" : "Hoạt động";
    //       if (stt.length > 10) {
    //         <div>
    //           <img src="img" alt="stt" />
    //           <span>{textStt}</span>
    //         </div>;
    //       }
    //     })}
    //   </>
    // ),
  },

  {
    title: 'Trạng thái kết nối',
    dataIndex: 'statusConnect',
    key: 'statusConnect',
    width: '155px',
  },

  {
    title: 'Dịch vụ sử dụng',
    dataIndex: 'services',
    key: 'services',
    width: '268px',
  },

  {
    title: '',
    dataIndex: 'detail',
    key: 'detail',
    render: () => <Link to="/device/detail">Chi tiết</Link>,
    width: '82px',
  },

  {
    title: '',
    dataIndex: 'update',
    key: 'update',
    render: () => <Link to="/device/update">Cập nhật</Link>,
    width: '106px',
  },

  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },

  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data: DataType[] = [
  {
    key: '1',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["nice", "developer"],
  },
  {
    key: '2',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["loser"],
  },
  {
    key: '3',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["cool", "teacher"],
  },
  {
    key: '4',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["nice", "developer"],
  },
  {
    key: '5',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["loser"],
  },
  {
    key: '6',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["cool", "teacher"],
  },
  {
    key: '7',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["nice", "developer"],
  },
  {
    key: '8',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["loser"],
  },
  {
    key: '9',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["cool", "teacher"],
  },

  {
    key: '10',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // services:
    //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
    // tags: ["nice", "developer"],
  },
  // {
  //   key: '11',
  //   deviceId: 'KIO_01',
  //   name: 'Kiosk',
  //   IPaddress: '192.168.1.10',
  //   status: ['Ngưng hoạt động', 'Hoạt động'],
  //   statusConnect: ['Kết nối', 'Mất kết nối'],
  //   services: 'Khám tim mạch, Khám mắt...',
  //   // services:
  //   //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
  //   // tags: ["loser"],
  // },
  // {
  //   key: '12',
  //   deviceId: 'KIO_01',
  //   name: 'Kiosk',
  //   IPaddress: '192.168.1.10',
  //   status: ['Ngưng hoạt động', 'Hoạt động'],
  //   statusConnect: ['Kết nối', 'Mất kết nối'],
  //   services: 'Khám tim mạch, Khám mắt...',
  //   // services:
  //   //   'Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.',
  //   // tags: ["cool", "teacher"],
  // },
];

const paginationConfig = {
  className: 'device--tables__pagination',
  responsive: true,
  pageSize: 10,
  total: 100,
  showSizeChanger: false,
  showQuickJumper: false,
};

const Device: React.FC = () => {
  return (
    <>
      <div className="device">
        <div className="device--title">
          <h2>Danh sách thiết bị</h2>
        </div>
        <div className="actions">
          <div className="actions--operating">
            <div className="actions--operating__text actions--default">Trạng thái hoạt động</div>
            <Operating />
          </div>

          <div className="actions--connect">
            <div className="actions--connect__text actions--default">Trạng thái kết nối</div>
            <Connection />
          </div>

          <div className="actions--search">
            <div className="actions-search__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>

        <div className="device--tables">
          <Table bordered columns={columns} dataSource={data} pagination={paginationConfig} />

          <Link to="/device/add" className="device--add__btn">
            <img src={icons.addSquareIcon} alt="addDevice" />
            <h4>Thêm thiết bị</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Device;
