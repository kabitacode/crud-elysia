import { Elysia } from "elysia";

const app = new Elysia()
.get('/', () => "hello")
.get('/hi',()=> "HAI")
.listen(4000)