// import { books } from './books'
// export default function handler(req, res) {
//   if (req.method === 'GET'){
//     res.status(200).json(books)
//   }
//   else  if(req.method === 'POST'){
//     console.log("from api")
//     const book = req.body.book
//     const newBook = {
//       id:Date.now(),
//       text:book
//     }
//     books.push(newBook)
//     res.status(201).json(newBook)
//   }
// }
