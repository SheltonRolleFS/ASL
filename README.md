# Description
This repository stores all my work that I've done in my "Advanced Server-Side Languages" class. This class lasted the entirety of August 2021 and introduced 
new skills such as creating RESTful APi's, using OAuth Authentication to let user's login with third-party accounts and creating full stack applications with 
ExpressJS and ReactJS.


### Week 1
During the first week, we started by learning about CRUD ( Create, Read, Update and Delete ) operations. This helped with getting an overall view of how our 
RESTful API should operate and the functionalities it should have. I then got starting learning routing in expressjs and building our RESTful API. This was
an API that responded with some pre-written data on Quizzes, Questions and Choices.

`npm install express`

### Week 2
During week 2, we moved away from our pre-written data and started learning how to implement ORM's ( Object Relational Mappers ). I used an ORM called 
sequelize to communicate with a MySQL database I ran locally. During this week we also learned about Models and Migrations letting us properly track changes 
to our Databases.

`npm install --save sequelize sequelize-cli`

### Week 3
During week 3, we dove into Templating Engines with ExpressJS. For this class, I used twig as my templating engine. 

`npm install --save twig`

I utalized twig to create browser access 
to the API. From the browser, the user would be able to perform all CRUD operations the database has for all its endpoints. I also implemented support for
multiple response-types. This means the database could respond with json data or the twig template depending on the type of request it receives. 

```javascript
router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll({
        include: Questions
    })
    if(req.headers.accept.indexOf('/json') > -1){
        res.json(quizzes)
    }else{
        res.render('quiz/index', { quizzes })
    }
})
```

### Week 4
In the fourth and final week, we used all of our new-found knowledge, and knowledge of reactjs from previous classes, to create a full stack application
that has ReactJS as it's front end and ExpressJS as it's backend. I first started by making some high-fidelity wireframes to get an idea of what I wanted 
the application to look like.

[* INSERT IMAGES HERE *]

Once the wireframes were done it was time to start building the React app. In this React app I made use of hooks and React Router Dom to deal with routing
and fetching / saving data from the API.

`npm install react-router-dom`

For styling I used SASS. I find that the import and nesting features of SASS make it so much easier not only to style my applications, but also to properly
organize my styling code so it's easy to read and understand what code affects what on the webpage.

`npm install --save node-sass`
