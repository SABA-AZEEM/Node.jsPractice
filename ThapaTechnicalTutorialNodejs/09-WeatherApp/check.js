// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   // Serve the index.html file when the root URL is requested
//   if (url === '/') {
//     const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(html);
//     return res.end();
//   }
//   // Serve the style.css file when the /style.css URL is requested
// if (url === '/style.css') {
//   const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
//   res.writeHead(200, { 'Content-Type': 'text/css' });
//   res.write(css);
//   return res.end();
// }
// // Serve the script.js file when the /script.js URL is requested
// if (url === '/script.js') {
//   const js = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf-8');
//   res.writeHead(200, { 'Content-Type': 'text/javascript' });
//   res.write(js);
//   return res.end();
// }


//   // Update the temperature when the /update URL is requested
//   if (url === '/update') {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?lat=31.582045&lon=74.329376&appid=22d51b2df0ac0eff68f8e308ba571c44';

//     http.get(url, response => {
//       let data = '';

//       // Append incoming data to a string
//       response.on('data', chunk => {
//         data += chunk;
//       });
//       // Once all the data has been received, parse it and update the HTML
//       response.on('end', () => {
//         const weatherData = JSON.parse(data);
//         const temperature = weatherData.main.temp;
//         const minTemperature = weatherData.main.temp_min;
//         const maxTemperature = weatherData.main.temp_max;
//         const icon = weatherData.weather[0].icon;
//         console.log(weatherData);
//         // Update the HTML
//         const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
        
//         const updatedHtml = html
//           .replace('26.49 C', `${temperature}°C`)
//           .replace('Min 26.49C', `Min ${minTemperature}°C`)
//           .replace('Max 26.49 C', `Max ${maxTemperature}°C`)
//           .replace('fa-sun', `fa-${icon}`);
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         console.log(updatedHtml);
//         res.write(updatedHtml);
//         return res.end();
//       });
//     }).on('error', err => {
//       console.error(err.message);
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.write('An error occurred while getting the weather data.');
//       return res.end();
//     });
//   }

//   // Serve a 404 page if the requested URL is not found
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.write('404 Not Found');
//   return res.end();
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
