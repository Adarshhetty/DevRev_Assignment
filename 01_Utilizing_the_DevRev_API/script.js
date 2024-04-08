const axios = require('axios');

const API_KEY = process.env.API_KEY;

const workData = {
    type: 'issue', 
    applies_to_part: 'PROD-1', 
    owned_by: ['adarshetty18226'], 
    title: 'New Product' 
    
};

axios.post('https://api.devrev.ai/works.create', 
workData, 
{
    headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        console.log('Work item created successfully:', response.data);
    })
    .catch(error => {
        console.error('Error creating work item:', error.response.data);
    });
