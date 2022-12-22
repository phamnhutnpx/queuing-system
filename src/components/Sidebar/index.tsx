import React from 'react';
import { SelectInfo } from 'rc-menu/lib/interface';
import './styles.scss';
import icons from '../../shared/assests/icons/index';
import LogoAlta from '../LogoAlta';
import { MenuProps } from 'antd/es/menu';
import { Button, Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: string,
  icon?: React.ReactNode | null,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    icon,
    key,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Dashboard',

    '/',

    <img className="icon icon-sidebar" src={icons.dashboardIcon} alt="icon dashboard" />,
  ),
  getItem(
    'Thiết bị',

    '/device',

    <img className="icon icon-sidebar" src={icons.desktopIcon} alt="icon device" />,
  ),
  getItem(
    'Dịch vụ',

    '/service',

    <img className="icon icon-sidebar" src={icons.serviceIcon} alt="icon service" />,
  ),
  getItem(
    'Cấp số',

    '/givenumber',

    <img className="icon icon-sidebar" src={icons.numberLevelIcon} alt="icon number level" />,
  ),
  getItem(
    'Báo cáo',

    '/report',

    <img className="icon icon-sidebar" src={icons.reportIcon} alt="icon report" />,
  ),
  getItem(
    'Cài đặt',

    '#',
    <img className="icon icon-sidebar" src={icons.settingIcon} alt="icon setting" />,
    [
      getItem('Quản lý vai trò', '/setting/role'),
      getItem('Quản lý tài khoản', '/setting/account'),
      getItem('Nhật ký người dùng', '/setting/user'),
    ],
  ),
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnselect = (item: SelectInfo) => {
    navigate(`${item.key}`);
  };

  return (
    <>
      <Sider
        style={{ backgroundColor: '#fff', minHeight: '100vh', position: 'fixed', zIndex: '999' }}
      >
        <LogoAlta />
        <Menu
          onSelect={item => {
            handleOnselect(item);
          }}
          theme="light"
          selectedKeys={[location.pathname]}
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
