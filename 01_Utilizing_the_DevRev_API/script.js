const axios = require('axios');
require("dotenv")
const API_KEY = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzExNzNnZDE5Qm46ZGV2dS8xIiwiZXhwIjoxODA3MDgwMzc5LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufGZ0bzA0UGhmQzMiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxmdG8wNFBoZkMzIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xMTczZ2QxOUJuIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMTE3M2dkMTlCbiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImFkYXJzaGV0dHkxODIyNiIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJhZGFyc2hldHR5MTgyMjZAZ21haWwuY29tIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IkFkYXJzaCBKIFNoZXR0eSIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTI0NzIzNzksImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzExNzNnZDE5Qm46dG9rZW4vMldEUXoybUsiLCJvcmdfaWQiOiJvcmdfbzBFRXdaWE5hYVFCdE1XMSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xMTczZ2QxOUJuOmRldnUvMSJ9.W5lk0TQ2UcutXwlz0rG9Ar9CdwGIQZa_BagQpnWpmH4kZfpMLNLhI8DMNuK805TbpD5jkjIS_8HXbr-l8TWIZiEpWlGFhjL5r7jjJ9AaeI247Ux1gmiRf2HtJWl5iR5He2lzmc5fKFpqL7wHrpCCSfDstoCptWQXi0ljYJ7d8C6XPWCrDd6QzUaJR_I14r_QL0rM_JdNk6w6MCq5Sxra3j1DA3ed8R9471IeOfw4j_2rnF2hger8eGwucN_y3YGNnJcm05v9G8e64OPjs-0pPh811s-YlzDQL7Ns-jkxNOC627cmT_NVe9UZHTk5YULk4uV_RbmV0ftVVkwJbiH2Lw'; 

const workData = {
    type:"issue",
    owned_by:["DEVU-1"],
    title:"New Work",
    applies_to_part:"PROD-1",
    
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
