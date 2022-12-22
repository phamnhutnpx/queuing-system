import React from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Link } from 'react-router-dom';

import icons from '../../../shared/assests/icons';
import SearchCoponent from '../../../components/Search';

import './styles.scss';

const RoleManagement = () => {
  interface DataType {
    key: string;
    roleName: string;
    userId: string;
    desc: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên vai trò',
      dataIndex: 'roleName',
      key: 'roleName',
      width: '200px',
      render: text => <>{text}</>,
    },

    {
      title: 'Số người dùng',
      dataIndex: 'userId',
      key: 'userid',
      width: '200px',
      render: text => <>{text}</>,
    },

    {
      title: 'Mô tả',
      dataIndex: 'desc',
      key: 'description',
      width: '480px',
      render: text => <>{text}</>,
    },

    {
      title: '',
      dataIndex: 'update',
      key: 'update',
      render: () => <Link to="/setting/role/update">Cập nhật</Link>,
      width: '110px',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },

    {
      key: '2',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },

    {
      key: '3',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },

    {
      key: '4',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },

    {
      key: '5',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },

    {
      key: '6',
      roleName: 'Kế toán',
      userId: '6',
      desc: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },
  ];
  return (
    <>
      <div className="role">
        <div className="actions">
          <div className="role--title">
            <h2>Danh sách vai trò</h2>
          </div>
        </div>
        <div className="actions--search">
          <div>
            <div className="actions-search__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>
        <div className="role--tables">
          <Table bordered columns={columns} dataSource={data} />

          <Link to="/setting/role/add" className="device--add__btn">
            <img src={icons.addSquareIcon} alt="addDevice" />
            <h4>Thêm vai trò</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoleManagement;
