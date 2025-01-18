import '../styles/App.css'
import React, { useState, useEffect } from 'react';

function userInfoApi(accessToken){
	const [feeds, setData] = useState([]);
  	const link = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + accessToken;

      useEffect(() => {
        fetch(link)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);

      debugger;
      return feeds.email;
}

function GoogleLogin(){
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    const email = userInfoApi(accessToken);
    // window.location.href =  `https://www.googleapis.com/oauth2/v1/userinfo?access_token=ya29.a0ARW5m75adAeeeVEWk2-otg-sJLoRAx890gEbNujt2Waq7PFunXrgXpe1C9UAjYJQYd15ilwt3jKXMQRVxsPJZe1HHVGPbaJmYpizPOY06gDsTdHilHSVR8E-9ermgDsFp1V3YCAg2FpjlKu1CwSm9QrrJunW13G2CwmU_EkdaCgYKAUwSARESFQHGX2Miwlo_aUf4KmT9Dokj8ZWmLA0175`
    //ya29.a0ARW5m75adAeeeVEWk2-otg-sJLoRAx890gEbNujt2Waq7PFunXrgXpe1C9UAjYJQYd15ilwt3jKXMQRVxsPJZe1HHVGPbaJmYpizPOY06gDsTdHilHSVR8E-9ermgDsFp1V3YCAg2FpjlKu1CwSm9QrrJunW13G2CwmU_EkdaCgYKAUwSARESFQHGX2Miwlo_aUf4KmT9Dokj8ZWmLA0175
    return (
    <div className="main">
        <div className='search'>
            {email}      
        </div>
    </div>
    );

}

export default GoogleLogin