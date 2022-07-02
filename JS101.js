let books = [[1, "Start with why", "Simon Sinek", 80.0, 13], 
             [2, "But how do it know", "J. Clark Scott", 59.9, 22], 
             [3, "Clean Code", "Robert Cecil Martin", 50.0, 5], 
             [4, "Zero to One", "Peter Thiel", 45.0, 12], 
             [5, "You don't know JS", "Kyle Simpson", 39.9, 9]];
let bookID = [books[0][0], books[1][0], books[2][0], books[3][0], books[4][0]];
let bookTitle = [books[0][1], books[1][1], books[2][1], books[3][1], books[4][1]];
let authorName = [books[0][2], books[1][2], books[2][2], books[3][2], books[4][2]];
let bookPrice = [books[0][3], books[1][3], books[2][3], books[3][3], books[4][3]];
let bookQuantity = [books[0][4], books[1][4], books[2][4], books[3][4], books[4][4]];

function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
    id = bookID.push(id);
    title = bookTitle.push(title);
    author = authorName.push(author);
    price = bookPrice.push(price);
    quantity = bookQuantity.push(quantity); 
} 
books.push(addBook(6, "Opreating Systems", "William Stallings", 60.5, 10));


 function deleteBook() {
 return books.pop()
}
deleteBook();


let search = "But how do it know";
function requestingBooks(bookTag){
    for (let i = 0; i < books.length; i++){
        for (let j = 0; j < books[i].length; j++) 
        if (bookTag === books[i][j] && bookTag === bookID[i] || bookTag === bookTitle[i] ||  bookTag === authorName[i]) {
            //if (bookTag === books[i][j]   

           return books[i];

        }
        
    }
    return console.log("we did not find the book!");
    
}
console.log(requestingBooks(search)); 
 


function sellingBook(bookTit, bookQuant, balance) {
    let book = requestingBooks(bookTit);
    let finalPrice = bookQuant * book[3];  
       
            
            if (bookQuant <= book[4]) {
                
            if (balance >= finalPrice) {
                
       return console.log(`Sale Invoice: 
        Book Title: ${bookTit} 
        Purchased Quantity = ${bookQuant} 
        The Payment = ${finalPrice}
        The Change = ${balance - finalPrice}
        Thank you for purchasing from our bookstore!`) + (book[4] = book[4] - bookQuant);

            }
            else if (bookQuant > book[4]) {
                return  console.log(`Sale Invoice: 
                  Book Title: ${bookTit} 
                  Purchased Quantity = Out OF STOCK! ` + book[4])
              }
              else if (balance < finalPrice) {
                  return console.log(`Sale Invoice: 
                  Book Title: ${bookTit} 
                  Purchased Quantity = ${bookQuant} 
                  The Payment = You DON'T Have Enough CASH! `)
      
              
          }
        
         else {
              return console.log('Sorry, We didn\'t found the book, Please Make sure your book title is correct!');
          }

        }
        

}
 

let balance = 350;
sellingBook(search, 2, balance);
    
    
    
   