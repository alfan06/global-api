import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from  'register-service-worker';
import MahasiswaPost from "./container/MahasiswaPost/MahasiswaPost";
// import BlogPost from "./container/BlogPost/BlogPost";


ReactDOM.render(<MahasiswaPost />, document.getElementById('content'));
// ReactDOM.render(<BlogPost/>, document.getElementById('content'));

serviceWorker.unregister();
