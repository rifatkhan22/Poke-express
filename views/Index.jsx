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
                <nav>
                    <a href='/pokemon/new'>Create New Pokemon</a>
                </nav>
                <ul>
                    {pokemon.map((poke,i)=> {
                        return (
                            <li>
                                The {' '}
                                <a href = {`/pokemon/${poke._id}`}>
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