import * as React from 'react';
import './ReactWeb.scss';
const WebView = require('react-electron-web-view');

export interface IReactWebProps {

}

export interface IReactWebState {
}

export default class ReactWeb extends React.Component<IReactWebProps, IReactWebState> {
  constructor(props: IReactWebProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <WebView 
        src="https://www.google.com"
        autosize={true}
        className='web'
        />
    );
  }
}
