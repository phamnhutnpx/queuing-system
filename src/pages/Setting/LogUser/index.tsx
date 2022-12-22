import { Table } from 'antd';
import { Link } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';

import './styles.scss';
import icons from '../../../shared/assests/icons';
import SearchCoponent from '../../../components/Search';
import TimeSelect from '../../../components/DropdownComponent/TimeSelect';

const paginationConfig = {
  responsive: true,
  pageSize: 9,
  showSizeChanger: false,
  showQuickJumper: false,
};
const LogUser = () => {
  interface DataType {
    key: string;
    userName: string;
    time: string;
    implementedIP: string;
    operations: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'userName',
      key: 'username',
      render: text => <>{text}</>,
    },

    {
      title: 'Thời gian tác động',
      dataIndex: 'time',
      key: 'time',
      render: text => <>{text}</>,
    },

    {
      title: 'IP thực hiện',
      dataIndex: 'implementedIP',
      key: 'implementedip',
      render: text => <>{text}</>,
    },
    {
      title: 'Thao tác thực hiện',
      dataIndex: 'operations',
      key: 'operations',
      render: text => <>{text}</>,
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      userName: 'xuannhut.it',
      time: '01/12/2021 15:12:17',
      implementedIP: '192.168.3.1',
      operations: 'Cập nhật thông tin DV_01',
    },
    {
      key: '2',
      userName: 'xuannhut.it',
      time: '01/12/2021 15:12:17',
      implementedIP: '192.168.3.1',
      operations: 'Cập nhật thông tin DV_01',
    },
    {
      key: '3',
      userName: 'xuannhut.it',
      time: '01/12/2021 15:12:17',
      implementedIP: '192.168.3.1',
      operations: 'Cập nhật thông tin DV_01',
    },
  ];
  return (
    <>
      <div className="account-management">
        <div className="actions--search">
          <div>
            <div className="actions-search__text actions--default">Chọn thời gian</div>
            <TimeSelect />
          </div>
          <div>
            <div className="actions-search__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>
        <div className="account-management--tables">
          <Table bordered columns={columns} dataSource={data} pagination={paginationConfig} />
        </div>
      </div>
    </>
  );
};

export default LogUser;
