const http = require('http');
const url = 'http://api.weatherstack.com/forecast?access_key=8259feb5173b340124db6d6b8e653a8e&query=40,-32&units=f'

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
        console.log(JSON.parse(data));
    })

    response.on('end', () => {

    })

    
})

request.on('error', (error) => {
    console.log('Error: ',error);
})

request.end();