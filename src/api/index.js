import axios from './axios/index';

// 获取当前登录用户信息
export const getUserInfo = (v) => axios.get('/system/user/getUserInformation', v);
// 获取项目配置的按钮信息
export const getBtns = (v) => axios.get(`/system/menu/user/findUserButton/${v.uid}/${v.code}`);
// 获取文书列表
export const getTaskList = (v) => axios.post('/book_system/documentManagement/pageList', v);
