import React from 'react';
import { Button } from 'antd';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Button onClick={this.props.onClick} type='primary' size='large'>
                    Start!
                </Button>
            </div>
        )
    }
}

export default Home;