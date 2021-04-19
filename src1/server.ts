import * as express from "express";
import * as bodyParser from "body-parser";
const app = express();
import Post from "./posts/post.interface";
import postsController from "./posts/posts.controller";

app.use(bodyParser.json());
function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

app.use(loggerMiddleware);

app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.use('/', postsController)

app.post("/", (request, response) => {
    console.log(request.body);
  response.send(request.body);
});
app.listen(5000);