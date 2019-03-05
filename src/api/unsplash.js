import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8d3528a16b4ec496b022c3ee3b00ad8c86b85b2499490483031827476bf1f22e'
    }
})