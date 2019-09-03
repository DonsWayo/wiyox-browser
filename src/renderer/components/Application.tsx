import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import Counter from './Counter';
import TopBar from './TopBar/TopBar';
import ReactWeb from './ReactWeb/ReactWeb';

const Application = () => (
    <div>
        <TopBar/>
        <ReactWeb/>
    </div>
);

export default hot(Application);
