import request from '@/utils/request'

// 上传
export function upload(path: any, data: any) {
  return new Promise((resolve, reject) => {
    // 可以在此上传到服务端
    const token = uni.getStorageSync('accessToken')
    const upload_url = import.meta.env.VUE_APP_BASE_URL

    uni.uploadFile({
      url: `${upload_url}/wapapi/Common/up`,
      filePath: path,
      name: 'file',
      formData: data,
      header: {
        'SCRM-TOKEN': token,
      },
      success: (res) => {
        const data = JSON.parse(res.data)
        resolve(data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
// 获取手机号码归属地 + 是否号码隐藏
export const callGetCusInfo = (data: any) => request.post('/wapapi/Customer/callGetCusInfo', data)
// 轮呼-公海轮呼-挂机抓取/下一通
export const zhuaquLunhu = (data: any) => request.post('/wapapi/Lunhu/zhuaquLunhu', data)
// 轮呼-公海轮呼-轮呼客户列表
export const cusLunhuList = (data: any) => request.post('/wapapi/Lunhu/cusLunhuList', data)
// 轮呼-公海轮呼-新建轮呼
export const setLunhu = (data: any) => request.post('/wapapi/Lunhu/setLunhu', data)
// 轮呼-公海轮呼-清空公海轮呼
export const delLunhu = (data: any) => request.post('/wapapi/Lunhu/delLunhu', data)
// 轮呼-公海轮呼-查询
export const getLhcount = (data: any) => request.post('/wapapi/Lunhu/getLhcount', data)
// 轮呼-获取客户详情
export const lunHuGetCus = (data: any) => request.post('/wapapi/Lunhu/getCus', data)
// 获取轮呼客户id列表
export const lunHuGetCusList = (data: any) => request.post('/wapapi/Lunhu/getCusList', data)
// 快捷语句列表
export const getUserFastwords = (data: any) => request.post('/wapapi/Tool/getUserFastwords', data)
// 我跟进的客户轮呼-获取轮呼时间
export const getGlobalTime = (data: any) => request.post('/wapapi/Customer/getGlobalTime', data)
// 验证手机号是否存在锦鲤
export const checkPhone = (data: any) => request.post('/wapapi/Manage/checkPhone', data)
// 短信发送接口
export const getVerifyCode = (data: any) => request.post('/wapapi/Manage/msg', data)
// 验证码登录
export const login = (data: any) => request.post('/wapapi/Manage/Check', data)
// 密码登录
export const pswLogin = (data: any) => request.post('/wapapi/Manage/pswLogin', data)
// 重置密码
export const editPsw = (data: any) => request.post('/wapapi/Manage/editPsw', data)
// 退出系统接口
export const logout = (data: any) => request.post('/wapapi/System/Logout', data)
// 个人信息
export const getUserInfo = (data: any) => request.post('/wapapi/Staff/getStaffRow', data)
// 数据概览
export const getUserDataOverview = (data: any) => request.post('/wapapi/Index/getUserDataOverview', data)
// 下发任务
export const getTaskList = (data: any) => request.post('/wapapi/Index/getTaskList', data)
// 客户动态
export const getDynamicList = (data: any) => request.post('/wapapi/Message/getDynamicList', data)
// 客户动态
export const getContentMaterial = (data: any) => request.post('/wapapi/Index/getContentMaterial', data)
// 客户列表
export const getCusList = (data: any) => request.post('/wapapi/Customer/cusList', data)
// 通过手机号验证员工是否已加入公司
export const isJoinCompany = (data: any) => request.post('xxx', data)
// 手动添加员工
export const addStaffToCompany = (data: any) => request.post('/wapapi/Staff/saveStaff', data)
// 新建客户
export const getCusFields = (data: any) => request.post('/wapapi/common/getcusfields', data)
// 新建客户 - 保存
export const addCus = (data: any) => request.post('/wapapi/Customer/addcus', data, { 'content-type': 'application/x-www-form-urlencoded' })
// 修改客户资料
export const updateCus = (data: any) => request.post('/wapapi/Customer/updateCus', data, { 'content-type': 'application/x-www-form-urlencoded' })
// 获取省市
export const getArea = (data: any) => request.post('/wapapi/staff/getArea', data)
// 打标签
export const getTagFields = (data: any) => request.post('/wapapi/common/getTagFields', data)
// 设置标签
export const saveTags = (data: any) => request.post('/wapapi/Customer/saveTags', data)
// 获取所有员工
export const getStaffAll = (data: any) => request.post('/wapapi/staff/getStaffAll', data)
// 获取所有部门
export const getDepData = (data: any) => request.post('/wapapi/Staff/getDepData', data)
// 获取所有角色
export const getRoleData = (data: any) => request.post('/wapapi/Staff/getRoleData', data)
// 获取自定义筛选
export const getFields = (data: any) => request.post('/wapapi/Common/getFields', data)
// 获取常用筛选项
export const getScreen = (data: any) => request.post('/wapapi/Common/getScreen', data)
// 选择常用筛选
export const getScreenDeploy = (data: any) => request.post('/wapapi/Common/getScreenDeploy', data)
// 获取客户类型
export const getPageType = (data: any) => request.post('/wapapi/Customer/getPageType', data)
// 获取客户详情
export const getCus = (data: any) => request.post('/wapapi/Customer/getCus', data)
// 改跟进人
export const updateCusUid = (data: any) => request.post('/wapapi/Customer/updateCusUid', data)
// 跟新客户阶段
export const updateCusFollowStage = (data: any) => request.post('/wapapi/Customer/updateCusFollowStage', data)
// 更新客户资料
export const saveStaffName = (data: any) => request.post('/wapapi/Staff/saveStaffName', data)
// 获取客户旅程
export const getCusJourney = (data: any) => request.post('/wapapi/Customer/getCusJourney', data)
// 添加跟进记录
export const addCusFollow = (data: any) => request.post('/wapapi/Customer/addCusFollow', data)
// 获取客户任务
export const getCusTask = (data: any) => request.post('/wapapi/Customer/getCusTask', data)
// 更新客户任务状态
export const updateCusTaskStatus = (data: any) => request.post('/wapapi/Customer/updateCusTaskStatus', data)
// 获取客户订单列表
export const getCusOrderList = (data: any) => request.post('/wapapi/Customer/getCusOrderList', data)
// 添加 & 编辑客户订单
export const editCusOrder = (data: any) => request.post('/wapapi/Customer/editCusOrder', data)
// 删除客户订单
export const delCusOrder = (data: any) => request.post('/wapapi/Customer/delCusOrder', data)
// 获取商品列表
export const getGoodsList = (data: any) => request.post('/wapapi/tool/getGoodsList', data)
// 获取微信聊天记录
export const getChatList = (data: any) => request.post('/wapapi/Index/wxrecord', data)
// 获取客户阶段输单原因和无效原因
export const getStage = (data: any) => request.post('/wapapi/Customer/getStage', data)
// 获取我下发的任务统计
export const getUserTaskStatistics = (data: any) => request.post('/wapapi/Task/getUserTaskStatistics', data)
// 获取我下发的任务
export const getUserTask = (data: any) => request.post('/wapapi/Task/getUserTask', data)
// 获取我待办的任务统计
export const getMyTaskStatistics = (data: any) => request.post('/wapapi/Task/getMyTaskStatistics', data)
// 获取我待办的任务
export const getMyTask = (data: any) => request.post('/wapapi/Task/getMyTask', data)
// 获取文章列表
export const getArticleList = (data: any) => request.post('/wapapi/Tool/getArticleList', data)
// 获取文件列表
export const getFileList = (data: any) => request.post('/wapapi/Tool/getFileList', data)
// 获取海报列表
export const getPosterList = (data: any) => request.post('/wapapi/Tool/getPosterList', data)
// 获取海报
export const getOnePoster = (data: any) => request.post('/wapapi/Tool/getOnePoster', data)
// 新增/编辑海报
export const editPoster = (data: any) => request.post('/wapapi/Tool/editPoster', data)
// 生成海报
export const downloadPoster = (data: any) => request.post('/wapapi/Tool/generatePoster', data)
// 二维码
export const returnPromotionCode = (data: any) => request.post('/wapapi/Common/returnPromotionCode', data)
// 获取小程序码
export const getWxacode = (data: any) => request.post('/wapapi/Wxstation/getWxacode', data)
// 获取微名片码
export const getUsercode = (data: any) => request.post('/wapapi/Wxstation/getUsercode', data)
// 获取表单列表
export const getFormList = (data: any) => request.post('/wapapi/Tool/getFormList', data)
// 获取员工列表
export const staffManage = (data: any) => request.post('/wapapi/Staff/staffManage', data)
// 添加客户任务
export const addCusTask = (data: any) => request.post('/wapapi/Customer/addCusTask', data)
// 获取任务详情
export const getTaskRecord = (data: any) => request.post('/wapapi/Task/getTaskRecord', data)
// 获取消息提醒
export const getMessageNotice = (data: any) => request.post('/wapapi/Message/getMessageNotice', data)
// 获取任务权限菜单
export const getTaskMenu = (data: any) => request.post('/wapapi/Task/getTaskMenu', data)
// 修改任务
export const updateTask = (data: any) => request.post('/wapapi/Task/updateTask', data)
// 修改任务状态
export const updateTaskStatus = (data: any) => request.post('/wapapi/Task/updateTaskStatus', data)
// 删除任务
export const delTask = (data: any) => request.post('/wapapi/Task/delTask', data)
// 结束任务
export const endTask = (data: any) => request.post('/wapapi/Task/endTask', data)
// 获取客户数据
export const getChoiceCusList = (data: any) => request.post('/wapapi/Customer/getCusList', data)
// 获取公司数据
export const getCompanyInfo = (data: any) => request.post('/wapapi/Staff/companyInfo', data)
// 获取数据报表的搜索条件
export const getDataParams = (data: any) => request.post('/wapapi/Datareport/getDataParams')
// 数据报表 客户统计
export const getCusAnalysis = (data: any) => request.post('/wapapi/Datareport/getCusAnalysis', data)
// 数据报表 互动统计
export const contentShareStatistics = (data: any) => request.post('/wapapi/Datareport/contentShareStatistics', data)
// 数据报表 互动统计 内容分析
export const staffFollowAnalysis = (data: any) => request.post('/wapapi/Datareport/staffFollowAnalysis', data)
// 数据报表 成交统计
export const cusBarChart = (data: any) => request.post('/wapapi/Datareport/cusBarChart', data)
// 数据报表 成交统计 - 员工排名
export const dealCusUsersRank = (data: any) => request.post('/wapapi/Datareport/dealCusUsersRank', data)
// 数据报表 员工效率
export const getStaffReport = (data: any) => request.post('/wapapi/Datareport/getStaffReport', data)
// 修改客户状态
export const updateCusState = (data: any) => request.post('/wapapi/Customer/updateCusState', data)
// 批量修改客户
export const batchUpdateCus = (data: any) => request.post('/wapapi/Customer/batchUpdateCus', data)
// 认定为有效
export const cognizanceCus = (data: any) => request.post('/wapapi/Customer/cognizanceCus', data)
// 获取通话记录
export const addCallRecording = (data: any) => request.post('/wapapi/Customer/addCallRecording', data)
// 上传通话录音
export const uploadCallRecord = (data: any) => request.post('/wapapi/Customer/uploadCallRecord', data)
// 企业小站
export const getWxSetting = (data: any) => request.post('/wapapi/Wxstation/getWxSetting', data)
// 微名片
export const getCardInfo = (data: any) => request.post('/wapapi/Tool/getCardInfo', data)
// 获取公司列表
export const getCompanyList = (data: any) => request.post('/wapapi/Staff/getCompanyList', data)
// 切换公司
export const checkScrmComp = (data: any) => request.post('/wapapi/Staff/checkScrmComp', data)
// 验证登录
export const checkLogin = (data: any) => request.post('/wapapi/Manage/checkLogin', data)
// 通话设置
export const getCallType = (data: any) => request.post('/wapapi/Index/getCallType', data)
// 通话设置
export const callTypeSave = (data: any) => request.post('/wapapi/Index/callTypeSave', data)
// 电销卫士检测
export const checkrisk = (data: any) => request.post('/wapapi/Index/checkrisk', data)
// 强制拨打
export const forceCall = (data: any) => request.post('/wapapi/Index/forceCall', data)
// 添加黑名单
export const addblack = (data: any) => request.post('/wapapi/Index/addblack', data)
// 回拨外呼
export const mobilePhone = (data: any) => request.post('/wapapi/Index/mobilePhone', data)
// 绑定websocket
export const wokerBind = (data: any) => request.post('/wapapi/Wokerso/bind', data)
// 获取呼叫设置
export const getAppCall = (data: any) => request.post('/wapapi/Index/getAppCall', data)
// app外呼选择双卡自动切卡
export const getCallAutomaticCard = (data: any) => request.post('/wapapi/Index/getCallAutomaticCard', data)
// 获取版本升级
export const getUpgradeVersion = (data: any) => request.post('/wapapi/Login/getUpgradeVersion', data)
// 设置呼叫类型数据
export const setUserAppCall = (data: any) => request.post('/wapapi/Index/setUserAppCall', data)
// 添加微信
export const addWechat = (data: any) => request.post('/wapapi/Brocadechat/wxdh', data)
// 批量通话记录
export const batchAddCallRecording = (data: any) => request.post('/wapapi/Customer/batchAddCallRecording', data)
// 通话记录
export const getCallList = (data: any) => request.post('/wapapi/Tool/callList', data)
// 通话详情
export const getCallDeatil = (data: any) => request.post('/wapapi/Tool/callDetail', data)
// 多公海获取
export const getOpensea = (data: any) => request.post('/wapapi/Common/getOpensea', data)
// 扫码授权登录
export const setLoginCode = (data: any) => request.post('/wapapi/Index/setLoginCode', data)
