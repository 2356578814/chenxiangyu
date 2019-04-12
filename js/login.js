
import {delay} from "dva/saga";
import {routerRedux} from "dva/router";
import { message } from 'antd';

function login(params){
	//这里应该是异步请求函数 这里模拟一个同步请求
	let flag = Math.random(0, 1) > 0.5;
	if(flag){
		return { errorCode : 0 , success : true , errorMessage : '登陆成功' }	
	}
	return { errorCode : 3000 , success : false , errorMessage : '登陆失败' }
}

export default {

    namespace : "login",

    state : {
		namespace : 'login',
        btnLoading : false
    },

    subscriptions : {
        a(obj){
            
        }
    },

    effects : {
		*'login'({ payload }, { call , put , select }){
			yield put({ type : 'updateState' , payload : { btnLoading : true } });
			let res = yield call(login, payload);
			if(res && res.errorCode === 0){
				message.success('登陆成功');
				yield put(routerRedux.push({
                    pathname : "/home",
                }))
			}else{
				message.error(ret && ret.errorMessage ? ret.errorMessage : '登陆失败')	
			}
			yield put({ type : 'updateState' , payload : { btnLoading : false } });
		}
    },

    reducers : {
		updateState( state, action ) {
            return { ...state, ...action.payload };
        },
    }
}