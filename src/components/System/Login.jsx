import React from 'react';
import {
	Card,
	Form,
	Input,
	Button,
	Checkbox,
	Icon,
	Switch,
	message,
	Alert
} from 'antd';
const FormItem = Form.Item;
const Component = React.Component;
import styles from './Login.less';
import cookie from 'js-cookie';

const message_1 = <Alert message="账号或密码错误" type="error" showIcon />;

const _api = {
	login: "http://api.sense.letv.cn/backend-sense-portal/auth/access_token/basic"
};

function noop() {
	return false;
}

class Login extends Component {
	constructor() {
		super();
		var user_id = cookie.get("user_id") != "undefined" ? cookie.get("user_id") : "";
		var user_password = cookie.get("user_password") != "undefined" ? cookie.get("user_password") : "";
		this.state = {
			rememberMe: true,
			username: user_id,
			password: user_password
		};
	}

	handleSubmit(e) {
		message.loading('正在执行中...', 0);
		e.preventDefault();
		this.props.form.validateFields((errors, values) => {
			if (this.state.rememberMe) {
				cookie.set('user_id', values.name, {
					expires: 10000
				});
				cookie.set('user_password', values.passwd, {
					expires: 10000
				});
			}
			if (!!errors) {
				console.log('Errors in form!!!');
				return;
			}
			console.log('Submit!!!');
			console.log(values);
			console.log("rememberMe:" + this.state.rememberMe);
			if (values.name == "admin" && values.passwd == "123") {
				window.location.href = "./index";
			} else {
				console.log(values.name)
				console.log(values.passwd)
				message.destroy();
				message.error("账号或密码错误！");
			}
			/*$.post(_api.login, values, function(result) {
				if(result.head.ret==0){
					cookie.set('user_info', result.body.user_info);
					cookie.set('access_token_info', result.body.access_token_info.access_token,{
						expires: result.body.access_token_info.expires_in
					});
					cookie.set('refresh_token_info', result.body.refresh_token_info.refresh_token,{
						expires: result.body.refresh_token_info.expires_in
					});
					window.location.href = "./index";
				}else if(result.head.ret==100){
					message.error("账号或密码错误！");
				}
			}.bind(this));*/
			/*xFetch.xFetch(
				_api.login,
				{headers:values}},
				function(res){
				}
			);*/
		});
	}

	handerChange(e) {
		this.state = {
			rememberMe: e
		};
	}

	userExists(rule, value, callback) {
		if (!value) {
			callback();
		} else {
			setTimeout(() => {
				if (value === 'JasonWood') {
					callback([new Error('抱歉，该用户名已被占用。')]);
				} else {
					callback();
				}
			}, 800);
		}
	}

	render() {
		const formTitle = <div style={{fontSize:"20px"}}><Icon type="cloud-o" /> 欢迎使用</div>;
		const {
			getFieldProps,
			getFieldError,
			isFieldValidating
		} = this.props.form;
		const formItemLayout = {
			labelCol: {
				span: 7
			},
			wrapperCol: {
				span: 12
			},
		};
		const username = this.state.username;
		const password = this.state.password;
		const nameProps = getFieldProps('name', {
			initialValue: this.state.username,
			rules: [{
				required: true,
				min: 5,
				message: '用户名至少为 5 个字符'
			}, {
				validator: this.userExists
			}, ],
		});

		const userHelp = isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ');
		const passwdProps = getFieldProps('passwd', {
			initialValue: this.state.password,
			rules: [{
				required: true,
				whitespace: true,
				message: '请填写密码'
			}, {
				validator: this.checkPass
			}, ],
		});
		return (
			<div className={styles.main}>
			<Card title={formTitle} style={{width:500,margin:"0 auto"}}>
				<Form horizontal 
					form={this.props.form} 
					onSubmit={this.handleSubmit.bind(this)}>
					<FormItem 
						{...formItemLayout}
			          	label="用户名123"
			          	hasFeedback
			          	help={userHelp}>
			          	<Input 
			          		placeholder="请输入用户名"
			          		{...nameProps} />
			        </FormItem>
			        <FormItem 
			        	{...formItemLayout} 
			        	label="密码"
			        	hasFeedback>
						 <Input 
						 	type = "password"		
						 	placeholder = "请输入密码" 
						 	{...passwdProps}
							autoComplete = "off"
							onContextMenu = {noop}
							onPaste = {noop}
							onCopy = {noop}
							onCut = {noop}/>
			        </FormItem>
			        <FormItem 
			        	{...formItemLayout}
			        	label="记住我">
			        	<Switch {...getFieldProps('agreement') } onChange={this.handerChange.bind(this)} defaultChecked={this.state.rememberMe}/>
			        </FormItem>
			        <FormItem wrapperCol={{ span: 12, offset: 7 }} >
			          <Button type="primary" htmlType="submit">登录</Button>
			        </FormItem>
				</Form>
			</Card>
		</div>)
	}
}

Login = Form.create()(Login);

export default Login;