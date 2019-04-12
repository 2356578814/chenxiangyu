
let dataSource = [{ id : 1 , checked : true }, { id : 2 , checked : false }]


export default {
	namespace: 'table',

	state: {
		namespace : 'table',
		dataSource
	},

	subscriptions: {
		setup({ dispatch, history }) {  
			
		},
	},

	effects: {
		*fetch({ payload }, { call, put, select }) { 
			//取出state中的dataSource
			let dataSource = (yield select(state => state.table)).dataSource;
			dataSource[payload].checked = !dataSource[payload].checked;
			yield put({ type : 'updateState' , payload : { dataSource } })
		},
	},

	reducers: {
		updateState(state, action) {
			return { ...state, ...action.payload };
		},
	},
	
}