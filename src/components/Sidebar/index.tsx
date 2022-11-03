import React, { useState } from 'react';
import './styles.scss';
import icons from '../../shared/assests/icons/index';
import LogoAlta from '../LogoAlta';
import { MenuProps } from 'antd/es/menu';
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key | null,
  path?: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    path,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Dashboard',
    '1',
    '/',

    <img className="icon icon-sidebar" src={icons.dashboardIcon} alt="icon dashboard" />,
  ),
  getItem(
    'Thiết bị',
    '2',
    '/device',

    <img className="icon icon-sidebar" src={icons.desktopIcon} alt="icon device" />,
  ),
  getItem(
    'Dịch vụ',
    '3',
    '/service',

    <img className="icon icon-sidebar" src={icons.serviceIcon} alt="icon service" />,
  ),
  getItem(
    'Cấp số',
    '4',
    '/givenumber',

    <img className="icon icon-sidebar" src={icons.numberLevelIcon} alt="icon number level" />,
  ),
  getItem(
    'Báo cáo',
    '5',
    '/report',

    <img className="icon icon-sidebar" src={icons.reportIcon} alt="icon report" />,
  ),
  getItem(
    'Cài đặt',
    'sub1',
    '#',
    <img className="icon icon-sidebar" src={icons.settingIcon} alt="icon setting" />,
    [
      getItem('Quản lý vai trò', '6', '/setting/role'),
      getItem('Quản lý tài khoản', '7', '/setting/account'),
      getItem('Nhật ký người dùng', '8', '/setting/user'),
    ],
  ),
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');

  const handleNavigate: MenuProps['onClick'] = e => {
    items?.find((item: any) => {
      if (e.key === item.key) {
        return navigate(`${item.path}`);
      } else {
        item?.children?.find((itemChild: any) => {
          if (e.key === itemChild.key) {
            return navigate(`${itemChild.path}`);
          }
          return null;
        });
      }
      return null;
    });
    setCurrent(e.key);
  };

  return (
    <>
      <Sider style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
        <LogoAlta />
        <Menu
          onClick={handleNavigate}
          theme="light"
          defaultSelectedKeys={['1']}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
        <Link to={'/signin'} style={{ maxHeight: '50px' }}>
          <Button
            style={{
              color: '#FF7506',
              width: '176px',
              height: '48px',
              borderRadius: '8px',
              fontWeight: '600',
              left: '12px',
              background: '#FFF2E7',
              top: '130px',
              border: 'unset',
            }}
          >
            <img className="icon icon-logout" src={icons.logoutIcon} alt="Icon logout" />
            Đăng xuất
          </Button>
        </Link>
      </Sider>
    </>
  );
};

export default Sidebar;
