import axios from './axios/index';

// 获取当前登录用户信息
export const getUserInfo = (v) => axios.get('/system/user/getUserInformation', v);
// 获取项目配置的按钮信息
export const getBtns = (v) => axios.get(`/system/menu/user/findUserButton/${v.uid}/${v.code}`);
// 获取文书列表
export const getTaskList = (v) => axios.postJson('/book_system/documentManagement/pageList', v);
// 获取 鉴定中心 列表
export const getDepartmentList = () => axios.get('/system/department/getIdentificationMechanism');
// 获取 鉴定专业 列表
export const getMajorList = (v) => axios.get(`/system/appraisalMajor/findMajorByAppraisalOrganId/${v.id}`);
// 获取 委托单位 列表 
export const getEntrustingPartyList = (v) => axios.get('/book_system/acceptInfo/getEntrustDeptByMajorId', v);
// 获取 受理人 列表
export const getReceiverList = (v) => axios.get('/book_system/acceptInfo/getAcceptUserByMajorId', v);
// 获取 检验人 列表
export const getSurveyorList = (v) => axios.get('/book_system/acceptEvidIdentificationResult/getSurveyorByMajorId', v);
// 获取 操作人 列表
export const getOperatorList = (v) => axios.postJson('/book_system/documentManagement/queryOperator', v);
