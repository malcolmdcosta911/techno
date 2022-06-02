import React from 'react';


import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />

    );
}

export default App;