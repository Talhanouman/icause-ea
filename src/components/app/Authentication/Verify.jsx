import React, {useState, useEffect} from 'react';
import MetaTags from 'react-meta-tags';
import { Form, Input, Spin } from 'antd';
import { verificationCodeAction, verificationActionEmail, verificationActionPhone } from '../../../actions/user'
import { useDispatch } from 'react-redux';

const Verify = (props) => {
    const dispatch = useDispatch();
    const { history, user } = props;
    const loading = user?.loading ? user?.loading : false;
    const [form] = Form.useForm();
    const [isEmail, setIsEmail] = useState(true)
    const userInfo = props?.history?.location?.state?.signup;

    const onFinishFailed = (errorInfo) => {
        
    };
    const onFinish = (props, values, { resetFields, setFields }, history) => {
        const postCode = props?.history?.location?.state?.postCode;
        dispatch(verificationCodeAction(userInfo, history, values?.code, "signUp", postCode, isEmail));
    };

    const resend = ()=>{
        if(isEmail){
            dispatch(verificationActionEmail(userInfo))
        }
        else{
            dispatch(verificationActionPhone(userInfo))
        }
    }

    useEffect(()=>{
        if(isEmail){
            dispatch(verificationActionEmail(userInfo))
        }
        else{
            dispatch(verificationActionPhone(userInfo))
        }
    },[isEmail, userInfo, dispatch])

    return (
        <div className="signup-pg-wrap">
            <MetaTags>
                <meta name="description" content="Register with iCause to start making a difference through Australia’s newest online fundraising platform. Create a crowdfunding campaign or support a charity in a few easy steps." />
            </MetaTags>
            <section className="sign-up-page login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-12 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-7 mx-auto">
                                    <div className="form-wraper">
                                        <h3 className="text-center">{isEmail? "Verify OTP Via Email" : "Verify OTP Via Phone"}</h3>
                                        <p className="otp-dis">{isEmail?"To ensure the security of your account, please enter the code sent to your email.":"To ensure the security of your account, please enter the code sent to your phone."}</p>
                                        <Spin spinning={loading}>
                                            <Form
                                                form={form}
                                                layout="vertical"
                                                name="basic"
                                                onFinish={(values) => onFinish(props, values, form, history)}
                                                onFinishFailed={onFinishFailed}
                                            >
                                                <div className="form-group">
                                                    <h6 onClick={()=>setIsEmail(!isEmail)} className="switch-phone" style={{textAlign:'right',  cursor:'pointer'}}>{isEmail ? "Switch to Phone" : "Switch to Email"} <span><i className={isEmail? "fa fa-phone":"fa fa-envelope"}></i></span></h6>
                                                    <Form.Item
                                                    
                                                        label='Secure Code'
                                                        name="code"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please Enter Your Otp!',
                                                            },
                                                        ]}>
                                                        <Input placeholder='type your otp' />
                                                    </Form.Item>
                                                    <span><i className="fas fa-keyboard" style={{fontSize:'20px'}}></i></span>
                                                </div>
                                                <h6 onClick={resend} style={{textAlign:'right',  cursor:'pointer', marginBottom:15, color:"#3cb64f"}}>Resend OTP</h6>
                                                <button className="btn btn-success   text-uppercase d-block w-100" htmltype='submit'>Verify Code</button>
                                            </Form>
                                        </Spin>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Verify