import React from 'react';

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'inline',
                    alignItems: 'center'
                }}
            >
                <p style={{ maxWidth: 10000 }} alignItems={'center'}>
                    Simple Site by{' '}
                    <a href="https://twitter.com/tonnytg">Antonio Thomacelli</a>.{' '}<br/>
                </p>
            </div>
        );
    }
}

export default Bio;