const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            <div>
                <h1>See all Pokemon</h1>
                <ul>
                    {pokemon.map((pokemon,i)=> {
                        return (
                            <li>
                                The {' '}
                                <a href = {'/pokemon/${i}'}>
                                    {pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1)}
                                </a> {' '}
                                is cool <br></br>
                            </li>
                        )

                    })}

                </ul>
            </div>
        )
    }
}

module.exports = Index