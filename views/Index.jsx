const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#1027D8',
    };
class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return (
            <div>
                <h1 style = {myStyle}>See all Pokemon</h1>
                <ul>
                    {pokemon.map((poke,i)=> {
                        return (
                            <li>
                                The {' '}
                                <a href = {`/pokemon/${i}`}>
                                    {poke.name.charAt(0).toUpperCase()+poke.name.substring(1)}
                                </a> 
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

module.exports = Index