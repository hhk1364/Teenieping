import googleLoginLogo from '../assets/web_light_rd_ctn.svg'
import '../styles/App.css'

const GoogleLogin = () => {

  const REACT_APP_GOOGLE_AUTH_CLIENT_ID = '36836770867-j1dj09t45c4m1adr8bive33kksisrlig.apps.googleusercontent.com';
  const REACT_APP_GOOGLE_AUTH_REDIRECT_URI = 'http://localhost:5173/googleLogin';

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=token
		&scope=email`;

}

function LoginSetting(){
  return (
    <div className="main">
      <div className='search'>
        <img src={googleLoginLogo} id="googleLogin" onClick={GoogleLogin} />
      </div>
    </div>
  );
}

export default LoginSetting