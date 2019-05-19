import request from "../../../utils/request"

const wechatApi = "http://wechat.yunbeisoft.com/index.php/home/api"
const material = "http://wechat.yunbeisoft.com/index.php/home/material"
const devTag = "http://wechat.yunbeisoft.com/index.php/home/tags"
const hsg = "http://wechat.yunbeisoft.com/index.php/home/hsgroup"
const wxxApi = "http://wxx.jutaobao.cc"
const wechat = " http://wechat.yunbeisoft.com/index.php/home"
const member = "http://wechat.yunbeisoft.com/index.php/home/members"
export function fetchDevices (body) {
    return request({
        method: "post",
        url: `${wechatApi}/getdevlists`,
        data: JSON.stringify(body),
    })
}

export function fetchUptoken () {
    return request({
        method: "get",
        url: `${wxxApi}/token.php`,
    })
}
export function fetchOrderByMobile (body) {
    return request({
        method: "post",
        url: `${wxxApi}/getOrderMsg/?time=${Math.round(new Date().getTime() / 1000)}`,
        data: JSON.stringify(body),
    })
}

export function fetchOrderInfoByMobile (body) {
    return request({
        method: "post",
        url: `${wxxApi}/wxGroupCtrl/?token=${Math.round(new Date().getTime() / 1000)}`,
        data: JSON.stringify(body),
    })
}

export async function sendCircle (body) {
    return request({
        method: "post",
        url: `${wechatApi}/dopengyouquan`,
        data: JSON.stringify(body),
    })
}

export function doQunFa (body) {
    return request({
        method: "post",
        url: `${wechatApi}/doqunfa`,
        data: JSON.stringify(body),
    })
}

export function doAddUser (body) {
    return request({
        method: "post",
        url: `${wechatApi}/doAddUser`,
        data: JSON.stringify(body),
    })
}

export function fetchLogs (body) {
    return request({
        method: "post",
        url: `${wechatApi}/getmsgfromsql`,
        data: JSON.stringify(body),
    })
}

export function sendMessage (body) {
    return request({
        method: "post",
        url: `${wechatApi}/domessage`,
        data: JSON.stringify(body),
    })
}

export function fetchMessages (body) {
    return request({
        method: "post",
        url: `${wechatApi}/get_stat_msg_history`,
        data: JSON.stringify(body),
    })
}

export function fetchUserList (body) {
    return request({
        method: "post",
        url: `${wechatApi}/dogetuserlists`,
        data: JSON.stringify(body),
    })
}
export function getUserLists (body) {
    return request({
        method: "post",
        url: `${wechatApi}/getuserlists`,
        data: JSON.stringify(body),
    })
}

export function contactPhoneWithWxid (body) {
    return request({
        method: "post",
        url: `${wechatApi}/phone_to_wxid`,
        data: JSON.stringify(body),
    })
}

export function contactWangwangWithWxid (body) {
    return request({
        method: "post",
        url: `${wechatApi}/ww_to_wxid`,
        data: JSON.stringify(body),
    })
}

export function modifyRemark (body) {
    return request({
        method: "post",
        url: `${wechatApi}/doEditRemark`,
        data: JSON.stringify(body),
    })
}
// 获取标签
export function getDevTags (body) {
    return request({
        method: "post",
        url: `${devTag}/gets?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 创建标签
export function createDevTags (body) {
    return request({
        method: "post",
        url: `${devTag}/create?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 批量为用户打标签
export function addUserLabel (body) {
    return request({
        method: "post",
        url: `${wechat}/members/batchtagging?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 删除标签
export function deleteDevTags (body) {
    return request({
        method: "post",
        url: `${devTag}/delete?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 编辑标签
export function editDevTags (body) {
    return request({
        method: "post",
        url: `${devTag}/update?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function getMyMaterial (body) {
    return request({
        method: "post",
        url: `${material}/get_material?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function getMaterial (body) {
    return request({
        method: "post",
        url: `${material}/get_ymaterial?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function shareMaterial (body) {
    return request({
        method: "post",
        url: `${material}/Share?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function delMaterial (body) {
    return request({
        method: "post",
        url: `${material}/del_material?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function addMyMaterial (body) {
    return request({
        method: "post",
        url: `${material}/add_news?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function addMaterial (body) {
    return request({
        method: "post",
        url: `${material}/add_news_ku?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 获取单一素材数据
export function getMaterials (body) {
    return request({
        method: "post",
        url: `${material}/materials?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function updateMaterial (body) {
    return request({
        method: "post",
        url: `${material}/update_material?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 关键词
export function fetchKeyPeply (body) {
    return request({
        method: "post",
        url: `${wechat}/keyword/gets?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
export function addKeyReply (body) {
    return request({
        method: "post",
        url: `${wechat}/keyword/create?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 搜索订单
export function searchOrder (body) {
    return request({
        method: "post",
        url: `${wxxApi}/getOrderMsg/ordersn_detail.php?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 新增话术组
export function addHsGroup (body) {
    return request({
        method: "post",
        url: `${hsg}/create?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 修改话术组名
export function editHsGroup (body) {
    return request({
        method: "post",
        url: `${hsg}/update?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 删除话术组
export function delHsGroup (body) {
    return request({
        method: "post",
        url: `${hsg}/delete?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 新增组内快速语
export function addMsg (body) {
    return request({
        method: "post",
        url: `${hsg}/create_msg?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 修改组内快速语
export function editMsg (body) {
    return request({
        method: "post",
        url: `${hsg}/update_msg?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 删除组内快速语
export function delMsg (body) {
    return request({
        method: "post",
        url: `${hsg}/delete_msg?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 获取话术组
export function getHsGroup (body) {
    return request({
        method: "post",
        url: `${hsg}/gets?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 获取快速语
export function getMsg (body) {
    return request({
        method: "post",
        url: `${hsg}/gets_ksy?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 获取用户身上的标签列表
export function getidlist (body) {
    return request({
        method: "post",
        url: `${member}/getidlist?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 批量为用户取消标签
export function delTags (body) {
    return request({
        method: "post",
        url: `${member}/batchuntagging?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 粉丝统计
export function fansDate (body) {
    return request({
        method: "post",
        url: `${wechat}/fans/gettotal?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 获取已经有的加好友规则
export function fetchUserRule (body) {
    return request({
        method: "post",
        url: `${wechat}/setting/getNewRule?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 设置加好友规则
export function setAddFriendRule (body) {
    return request({
        method: "post",
        url: `${wechat}/setting/setNewRule?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// // 编辑加好友规则
// export function editAddFriendRule (body) {
//     return request({
//         method: "post",
//         url: `${wechat}/setting/edit_rule?access_token=ACCESS_TOKEN`,
//         data: JSON.stringify(body),
//     })
// }
// 批量自动加好友
export function autoAddFriends (body) {
    return request({
        method: "post",
        // url: `${wechat}/setting/adduserlists?access_token=ACCESS_TOKEN`,
        url: `${wechat}/setting/addUserPhone?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 邀请指定的人进群
export function addUserGroup (body) {
    return request({
        method: "post",
        url: `${wechatApi}/domessage?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 被添加好友时自动回复
export function AutomaticReply (body) {
    return request({
        method: "post",
        url: `${wechat}/setting/doautomsg?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 获取加好友列表信息
export function AtuoList (body) {
    return request({
        method: "post",
        url: `${wechat}/file/get_lists?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 删除加好友列表信息
export function DeleteAtuoList (body) {
    return request({
        method: "post",
        url: `${wechat}/file/del_lists?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}

// 获取红包
export function RedPage (body) {
    return request({
        method: "post",
        url: "http://wxx.jutaobao.cc/yunbei_send_redpack/qr_code.php?code=1",
        data: JSON.stringify(body),
    })
}

// 获取红包记录
export function Record (body) {
    return request({
        method: "post",
        url: "http://wxx.jutaobao.cc/yunbei_send_redpack/qr_code.php?code=0",
        data: JSON.stringify(body),
    })
}

// 获取红包记录
export function RedSetting (body) {
    return request({
        method: "post",
        url: "http://wxx.jutaobao.cc/yunbei_send_redpack/qr_code.php?do=setMax",
        data: JSON.stringify(body),
    })
}

// 设备重命名
export function ReplaceName (body) {
    return request({
        method: "post",
        url: `${wechatApi}/reName?access_token=ACCESS_TOKE`,
        data: JSON.stringify(body),
    })
}
// 获取子账号权限
export function fetchAuth (body) {
    return request({
        method: "post",
        url: "http://wechat.yunbeisoft.com/index.php/home/users/getPermission?access_token=ACCESS_TOKEN",
        data: JSON.stringify(body),
    })
}
// 设置权限
export function setAuth (body) {
    return request({
        method: "post",
        url: "http://wechat.yunbeisoft.com/index.php/home/users/permission?access_token=ACCESS_TOKEN",
        data: JSON.stringify(body),
    })
}
// 群内加好友
export function groupAddFriends (body) {
    return request({
        method: "post",
        url: `${wechatApi}/doAddUser?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 获取群成员
export function groupMembers (body) {
    return request({
        method: "post",
        url: `${wechat}/qun/getQunUsers?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
// 获取群成员---刷新
export function groupMembersRef (body) {
    return request({
        method: "post",
        url: `${wechatApi}/doQunload?access_token=ACCESS_TOKEN`,
        data: JSON.stringify(body),
    })
}
