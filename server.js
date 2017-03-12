var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
  `article-one : {
  title: 'Article One | Himanshu',
  heading: 'Article One',
  date: 'Jan 13,2017',
  content: '
            <p>
                Heyy Folks, This is my first webpage . Will be uploading content soon !!!!  Stay in touch ..Love u All
            </p>'
            
            
            }    ,

  `article-two : {
  title: 'Article Two | Himanshu',
  heading: 'Article Two',
  date: 'Jan 13,2000',
  content: `
            <p>
                Heyy Folks, This is my second Article . Will be uploading content soon !!!!  Stay in touch ...    Love u All :)
            
            </p>`
    
 },
  `article-three : {
  title: 'Article Three | Himanshu',
  heading: 'Article Three',
  date: 'Jan 13,2014',
  content: '
            <p>
                Heyy Folks, This is my third Article . Will be uploading content soon !!!!  Stay in touch ...    Love u All :)
            
            </p>'
    
 }
};

function createTemplate (data) {
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 

 var htmlTemplate = `
 <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
        
     </head>
     
    <body>
     <div class = "container">
         <a href = "/">HOME</a>
     </div>   
     <h3>
         ${heading}
     </h3>    
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        
    </body>
    
</html>
 `;
 
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
