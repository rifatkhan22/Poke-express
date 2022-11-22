const React = require('react')

class Show extends React.Component {
    render() {
        const {name,img} = this.props
        return (
            <div>
                <h3>Show Page</h3>
                <div>
                    <h1>"Gotta Catch 'Em All"</h1>
                    <h2> The {name[0].toUpperCase() + name.slice(1)} is awesome</h2>
                    <img src ={img +".jpg"}/> <br></br>
                    <a href = {`/pokemon`}>Go Back </a>
                </div>
            </div>
        )
    }
}

module.exports = Show