const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>See all Pokemon</h1>
                <div style={myStyle}>My First React Component!</div>
            </div>
        )
    }
}

module.exports = Index