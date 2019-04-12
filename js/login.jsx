import React from "react";
import {connect} from "dva";
import styles from "../index.css";
import {Form,Input,Icon,Button,Message} from "antd";

function Login({ dispatch , login }){
	let {
		namespace,
		btnLoading
	} = login;
	
	function submit(payload){
		dispatch({ type : `${namespace}/login` , payload })
	}
	
	let LoginFormProps = {
		btnLoading,
		submit,
	}

	
	
	return(
		<div style={{background:`url(${require("../assets/loginBackground.png")})`}} className={styles.loginBackground}>
			<div className={styles.loginBox}>
				<div className={styles.loginLogo}>
					<img src={require("../assets/loginHeader.png")}/>
					<img src={require("../assets/logo.png")}/>
				</div>
				<span style={{display:"block"}} className={styles.kedufuduanLogin}>{"客服端登录>>"}</span>
				<div className={styles.guanliyuandenglu}>
					<span>{"管理员登录"}</span>
				</div>
				<LoginForm { ...LoginFormProps }/>
			</div>
		</div>
	)
}


function loginForm({ 
	submit,
	btnLoading,
	form : {
		getFieldDecorator,
        validateFieldsAndScroll,
	}
}){
	
	function formSubmit(){
		validateFieldsAndScroll((err, val) => {
			if( !!err ){
				return;
			}
			//在这里可以处理值
			console.info('val',val)
			submit(val);
		})	
	}
	
	return(
		<div className={styles.userNameAndPassword}>
			<Form.Item { ...formItemLayout } label = '账号' className = 'common_form_item' >
				{ getFieldDecorator('userName', {
					initialValue : undefined,
					rules : [
						{ required : true, message : '请输入账号' , whitespace : true }
					]
				})(
					<Input prefix={<Icon type="user" style={{ color:"rgba(0,0,0,.25)"}}/>} placeholder="请输入账号"/>
				)}
			</Form.Item>
			<Form.Item { ...formItemLayout } label = '密码' className = 'common_form_item' >
				{ getFieldDecorator('password', {
					initialValue : undefined,
					rules : [
						{ required : true, message : '请输入密码' , whitespace : true }
					]
				})(
					<Input prefix={<Icon type="user" style={{ color:"rgba(0,0,0,.25)"}}/>} placeholder="请输入密码" type="password" />
				)}
			</Form.Item>
			<Button onClick = { formSubmit } disabled = { btnLoading } loading = { btnLoading }>提交</Button>
		</div>
	)
}


let LoginForm = Form.create()(loginForm)

function mapStateToProps({ login }){
    return { login };
}

export default connect(mapStateToProps)(Login);