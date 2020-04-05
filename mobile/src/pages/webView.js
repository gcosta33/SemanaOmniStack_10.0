import React from 'react';

import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
   
    return(
        <WebView
            geolocationEnabled={true}
            style={{ flex:1 }}
            source={{ uri: 'http://192.168.100.24:3000'}}
        ></WebView>
    )
}

export default Profile;
