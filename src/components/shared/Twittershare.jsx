import TwitterLogin from "react-twitter-login";


export default ({}) => {
    const Callback = (err, response) => {}
    return (
        <TwitterLogin
            callbackUrl="https://icause.com.au/news"
            authCallback={Callback}
            consumerKey={"m3pH7YdMjmYJEzMZpUxBllcht"}
            consumerSecret={"bD8LwRNKE7wVfnbiZ2Kk97zQcoWyhx9tlp5oFZy83yddI2J5ac"}
            className="fbbutton"
            children={<i className="fa fa-twitter"></i>}
        />
    )
}