  //require the built-in modules
const http=require('http');
const fs=require('fs');
const requests=require('requests');
const html=fs.readFileSync('index.html','utf-8');
  
  //start the server
const server=http.createServer((req,res)=>{
  const url=req.url;
      if(url==='/'){
        requests("https://api.openweathermap.org/data/2.5/weather?lat=31.582045&lon=74.329376&appid=22d51b2df0ac0eff68f8e308ba571c44").on('data',chunk=>{
          const weatherData=JSON.parse(chunk);
          const city=weatherData.name;
          const country=weatherData.sys.country;
          const temperature = weatherData.main.temp;
          const minTemperature = weatherData.main.temp_min;
          const maxTemperature = weatherData.main.temp_max;
          
          const updateHtml=html.replace(`Pune`,`${city}`)
          .replace('In',`${country}`)
          .replace('26.49 C', `${temperature}°C`)
          .replace('Min 26.49C', `Min ${minTemperature}°C`)
          .replace('Max 26.49 C', `Max ${maxTemperature}°C`)
          
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(updateHtml);
          return res.end();
        })
        .on('end',(err)=>{
          console.log(err);

        });
      }
      if (url === '/style.css') {
        const css = fs.readFileSync('style.css', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(css);
        return res.end();
      }
      // Serve the script.js file when the /script.js URL is requested
      if (url === '/script.js') {
        const js = fs.readFileSync('script.js', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(js);
        return res.end();
      }
    });
//listen the port
server.listen(5000)