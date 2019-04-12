import React from 'react';
import { connect } from 'dva';

function Table({ dispatch , table }){
	
	let {
		namespace,
		dataSource
	} = table;
	
	const columns = [{
		key : 'id',
		dataIndex : 'id',
		title : 'id'
	},{
		key : 'checked',
		dataIndex : 'checked',
		title : '是否选中',
		render : (text, record, index) => (
			<Switch 
				style = {{ width : 50 }} 
				checked = { !!text } 
				size = 'small' 
				checkedChildren = '启用' 
				unCheckedChildren = '停用' 
				onClick = {() => dispatch({ type : `${namespace}/fetch`, payload : index })}
			/>
		)
	}];
	
	return(
		<Table 
			dataSource = { dataSource }
			columns = { columns }
		/>
	)
}

function mapStateToProps({ table }){
    return { table };
}

export default connect(mapStateToProps)(Table);