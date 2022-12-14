import Home from '../pages/Home';
import Device from '../pages/Device';
import SignIn from '../pages/Auth/SignIn';
import { RoleManagement, AccountManagement, LogUser } from '../pages/Setting';
import Report from '../pages/Report';
import GiveNumber from '../pages/GiveNumber';
import Service from '../pages/Service';
import AddService from '../pages/Service/AddService';
import AddDevice from '../pages/Device/AddDevice';
import GiveNumDetail from '../pages/GiveNumber/GiveNumDetail';
import UpdateDevice from '../pages/Device/UpdateDevice';
import GiveNewNum from '../pages/GiveNumber/GiveNewNum';
import AddRole from '../pages/Setting/RoleManagement/AddRole';
import Detail from '../pages/Device/Detail';
import UpdateService from '../pages/Service/UpdateService';
import DetailService from '../pages/Service/DetailService';
import UpdateRole from '../pages/Setting/RoleManagement/UpdateRole';
import AddAccount from '../pages/Setting/AccountManagement/AddAccount';
import UpdateAccount from '../pages/Setting/AccountManagement/UpdateAccount';

const publicRoutes = [
  { path: '/signin', component: <SignIn />, layout: null },

  { path: '/', component: <Home /> },

  { path: '/device', component: <Device /> },
  { path: '/device/add', component: <AddDevice /> },
  { path: '/device/detail', component: <Detail /> },
  { path: '/device/update', component: <UpdateDevice /> },
  { path: '/service', component: <Service /> },
  { path: '/service/add', component: <AddService /> },
  { path: '/service/update', component: <UpdateService /> },
  { path: '/service/detail', component: <DetailService /> },
  { path: '/givenumber', component: <GiveNumber /> },
  { path: '/givenumber/add', component: <GiveNewNum /> },
  { path: '/givenumber/detail', component: <GiveNumDetail /> },

  { path: '/report', component: <Report /> },

  { path: '/setting/role', component: <RoleManagement /> },
  { path: '/setting/role/add', component: <AddRole /> },
  { path: '/setting/role/update', component: <UpdateRole /> },
  { path: '/setting/account', component: <AccountManagement /> },
  { path: '/setting/account/add', component: <AddAccount /> },
  { path: '/setting/account/update', component: <UpdateAccount /> },
  { path: '/setting/user', component: <LogUser /> },
];

export { publicRoutes };
