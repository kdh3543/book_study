function Book(title, author, volume, price) {
  this.title = title
  this.author = author
  this.volume = volume
  this.price = price
}

var html = new Book('웹 표준', 'Ko', '605', '28,000')
var youtube = new Book('유투브', 'Kim', '368', '16,000')
var python = new Book('점프 투 파이썬', 'Park', '352', '18,800')

var bookList = [html, youtube, python]
document.write('<h2> 책 가격')
for (let i = 0; i < bookList.length; i++) {
  document.write(`<p>${bookList[i].price}</p>`)
}
document.write('</h2>')
