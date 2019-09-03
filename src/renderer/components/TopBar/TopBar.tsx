import * as React from 'react';

//@ts-ignore
import { TitleBar } from 'react-desktop/macOs';
import './TopBar.scss';
import SearchBar from '../SearchBar/SearchBar';
import Button from '@material-ui/core/Button';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import RefreshIcon from '@material-ui/icons/Refresh';

import { IconButton } from '@material-ui/core';

export interface ITopBarProps {
}

export interface ITopBarState {
}

export default class TopBar extends React.Component<ITopBarProps, ITopBarState> {
    constructor(props: ITopBarProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <TitleBar
                // title="untitled text 5"
                controls
                transparent={true}
                //isFullscreen={this.state.isFullscreen}
                onCloseClick={() => console.log('Close window')}
                onMinimizeClick={() => console.log('Minimize window')}
                onMaximizeClick={() => console.log('Mazimize window')}
                //onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
                className='header'
            >
                <IconButton>
                    <LeftIcon />
                </IconButton>
                <IconButton>
                    <RightIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <SearchBar />
            </TitleBar>
        );
    }
}
