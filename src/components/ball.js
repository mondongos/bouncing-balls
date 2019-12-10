import React from 'react' 

export default class Ball extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ballStyle = {
            display: 'block', 
            position: 'absolute', 
            width: 20,
            height: 20, 
            backgroundColor: '#00ff00',
            borderRadius: '50%',
        }
        return (
            <div style={{
                ...ballStyle
            }}>
                
            </div>
        )
    }
}