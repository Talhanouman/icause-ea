import FacebookLogin from 'react-facebook-login';
export default ({}) => {
    const handleResponse = (response) => {
    }
    return (
        <FacebookLogin
            // redirectUri=""
            appId="655233585859095"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleResponse}
            cssClass="fbbutton"
            textButton=""
            icon={<i className="fa fa-facebook"></i>}
        />
    )
}