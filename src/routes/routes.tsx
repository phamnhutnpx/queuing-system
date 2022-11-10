import Home from '../pages/Home';
import Device from '../pages/Device';
import SignIn from '../pages/SignIn';
import { RoleManagement, AccountManagement, LogUser } from '../pages/Setting';
import Report from '../pages/Report';
import GiveNumber from '../pages/GiveNumber';
import Service from '../pages/Service';
import AddService from '../pages/Service/AddService';
import AddDevice from '../pages/Device/AddDevice';
import Detail from '../pages/Device/Detail';
import UpdateDevice from '../pages/Device/UpdateDevice';

const publicRoutes = [
  { path: '/signin', component: <SignIn />, layout: null },
  { path: '/', component: <Home /> },
  { path: '/device', component: <Device /> },
  { path: '/device/add', component: <AddDevice /> },
  { path: '/device/detail', component: <Detail /> },
  { path: '/device/update', component: <UpdateDevice /> },
  { path: '/service', component: <Service /> },
  { path: '/service/add', component: <AddService /> },
  { path: '/givenumber', component: <GiveNumber /> },
  { path: '/report', component: <Report /> },
  { path: '/setting/role', component: <RoleManagement /> },
  { path: '/setting/account', component: <AccountManagement /> },
  { path: '/setting/user', component: <LogUser /> },
];

export { publicRoutes };
