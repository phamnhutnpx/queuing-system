import { Table } from 'antd';
import { Link } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';

import './styles.scss';
import icons from '../../../shared/assests/icons';
import SearchCoponent from '../../../components/Search';
import RoleName from '../../../components/DropdownComponent/RoleName';

const paginationConfig = {
  responsive: true,
  pageSize: 6,
  total: 100,
  showSizeChanger: false,
  showQuickJumper: false,
};
const AccountManagement = () => {
  interface DataType {
    key: string;
    userName: string;
    name: string;
    phoneNumber: string;
    email: string;
    role: string;
    status: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'userName',
      key: 'username',
      render: text => <>{text}</>,
    },

    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
      render: text => <>{text}</>,
    },

    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phonenumber',
      render: text => <>{text}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <>{text}</>,
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: text => <>{text}</>,
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'status',
      key: 'status',
      render: text => <>{text}</>,
    },
    {
      title: '',
      dataIndex: 'update',
      key: 'update',
      render: () => <Link to="/setting/account/update">Cập nhật</Link>,
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '2',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '3',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '4',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '5',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '6',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '7',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '8',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '9',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
    {
      key: '10',
      userName: 'xuannhut.it',
      name: 'Phạm Xuân Nhựt',
      phoneNumber: '03838473783',
      email: 'xuannhut.it@gmail.com',
      role: 'Admin',
      status: 'Hoạt động',
    },
  ];
  return (
    <>
      <div className="account-management">
        <div className="actions">
          <div className="account-management--title">
            <h2>Danh sách tài khoản</h2>
          </div>
        </div>
        <div className="actions--search">
          <div>
            <div className="actions-search__text actions--default">Tên vai trò</div>
            <RoleName />
          </div>
          <div>
            <div className="actions-search__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>
        <div className="account-management--tables">
          <Table bordered columns={columns} dataSource={data} pagination={paginationConfig} />

          <Link to="/setting/account/add" className="device--add__btn">
            <img src={icons.addSquareIcon} alt="Add acount" />
            <h4>Thêm tài khoản</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountManagement;
