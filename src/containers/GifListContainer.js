import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }


    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch  fetchGifs={this.fetchGifs}/>
            </div>
        )
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }
}