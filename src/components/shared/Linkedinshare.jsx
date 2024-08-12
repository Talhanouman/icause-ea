// import { useLinkedIn } from 'react-linkedin-login-oauth2';,

import LinkedinSDK from 'react-linkedin-sdk'
export default ({ }) => {
    const Callback = (response) => {}
    return (
        <LinkedinSDK
            clientId="86ue6zr18cqazb"
            callBack={Callback}
            fields="name,email,picture"
            className={'fbbutton'}
            loginButtonText={''}
            buttonType={'button'}
            icon={<i className="fab fa-linkedin-in" aria-hidden="true"></i>}
            getOAuthToken
        />
    )
}