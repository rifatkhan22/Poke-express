const React = require('react')

class Show extends React.Component {
    render() {
        const {name,img} = this.props
        return (
            <div>
                <h1>Show Page</h1>
                <div>
                    <p> The {name} is awesome</p>
                    <img src ={img +".jpg"}/>
                </div>
            </div>
        )
    }
}

module.exports = Show