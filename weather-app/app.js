//const request = require('postman-request')

/*weatherstack url accepts coordinates in query=Lat,Long format as a query string input
Accepts access_key/token as query string
Accepts unit format as optional query string*/


// const url = 'http://api.weatherstack.com/forecast?access_key=8259feb5173b340124db6d6b8e653a8e&query=37.8267,-122.4233&units=f'

// request({url: url, json: true},(error,response)=>{
    
//     /* If the program is not able to connect to webservice to get a response then
//     (e.g. no internet connection)
//     error object is instantiated with differnt properties
    
//     response object is undefined*/

//     if(error){
//         console.log('Unable to connect to WebSerivce', error.syscall)
//         console.log(response)
//     }

//     /*If the program is able to connect to webservice but unable to fetch results then
//     (e.g. missing Lat,Long query string values or access_key)
//     error object of respose.body is instantiated with
//     success;error(code,type[keyword],info[message string])
    
//     error object is null*/

//     else if(response.body.error){
//         console.log('Unable to fetch data for provided inputs')
//         // console.log(response.body)
//         console.log(error)
//     }

//     /*If the program is able to connect and fetch from WebService then
//     error object is null
//     */

//     else{
//         /*If json=true is not passed in the request argument then 
//         parse the response body for JSON*/

//         //const data = JSON.parse(response.body) 

//         /*If json=true is passed in the request argument then
//         the response.body is returned as JSON*/

//         const data = response.body

//         /*headers = response.rawHeaders(array), reponse.headers(object)
//         status = response.req.finished, .status*/
        
//         // console.log(data.current)
//         console.log(response.body.current.weather_descriptions[0],' It is currently ',response.body.current.temperature, ' degrees out. There is ',response.body.current.precip, '% chance of rain.')
//     }
// })


/*MapBox Geocoding accepts location in the url with the retuen format as as extension
Accepts token as query string*/

// const urlMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5raXRtc3JhIiwiYSI6ImNrOXMwYjh4YTB0Z2YzZWx6ZmNqdGVpdGcifQ.Nf6BJo1BTqipflVgRVYsOw'

// request({url:urlMap,json:true},(error, response)=>{
//     /*If the program is not able to connect to webservice to get a response then
//     (e.g. no internet connection)
//     error object is instantiated with differnt properties
    
//     response object is undefined*/

//     if(error){
//         console.log('No response from WebService. Check your connection.')
//     }

//     /*If query string value is missing then
//     response.body.message is instantiated with error message
    
//     message is undefined for successful response*/
    
//     if(response.body.message){
//         console.log('Missing token: ',response.body.message)
//     }

//     /*If no data matacheds for the mentioned input location then
//     fetaures array is returned with empty value
    
//     no response.body.error created*/

//     else if(response.body.features.length === 0){
//         console.log(response.body.features)
//         console.log('Inappropriate data')
//         // console.log(response.body.error.info)
//     }

//     /*If the uri dies nto have enough values to call and get values then
//     (e.g. missing .json extension)
//     repsonse.body.message is created*/

//     else if(response.body.message){
//         console.log(response.body.message)
//     }

//     /*If the program is able to connect and fetch from WebService then
//     error object is null
//     response.body.message is undefined*/

//     else{
//         console.log(response.body.features[0].geometry.coordinates[0], 'Lon')
//         console.log(response.body.features[0].geometry.coordinates[1], 'Lat')
//         console.log(response.body.message)
//     }
// })


const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2];
if(input === null || !input){
    console.log('Enter a place!');
}
else{
    geocode(input, (error, gData) => {
        if(error){
            return console.log('Error fetching geoLocation');
        }
        //console.log('Error: ',error);
        //console.log('data: ',data());
        forecast(gData().Lat,gData().Lon,(error,fData) => {
            if(error){
                return console.log('Error fetching forecast')
            }
            //console.log('Error: ',error);
            console.log('gData: ',gData());
            console.log('fData: ',fData);
        })
    })
}


    


