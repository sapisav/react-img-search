import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }
    render(props) {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} photos
            </div>
        )
    }
}

export default App;