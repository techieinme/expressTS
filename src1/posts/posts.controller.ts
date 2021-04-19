import * as express from "express";
import Post from "./post.interface";

class PostsController {
  public path = "/posts";
  public router = express.Router();

  private posts: Post[] = [
    {
      author: "Marcin",
      content: "Dolor sit amet",
      title: "Lorem Ipsum"
    }
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPost);
    this.router.post(this.path, this.createPost);
  }

  getAllPost = (req: express.Request, res: express.Respose) => {
    res.send(this.posts);
  };

  createPost = (req: express.Request, res: express.Respose) => {
    const post: Post = req.body;
    this.posts.push(post);
    res.send(this.posts);
  };
}

export const postsController = new PostsController();
