function BookCard({ libro }) {
    return (
      <div className="book-card">
        <div className="portada">portada</div>
        <p><strong>{libro.titulo}</strong></p>
        <p>{libro.autor}</p>
        <span>{libro.leido ? '✅' : '📖'}</span>
      </div>
    );
  }
  
  export default BookCard;
  