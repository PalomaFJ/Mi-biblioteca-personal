import BookCard from './BookCard';

function BookList({ libros }) {
  return (
    <div className="book-list">
      {libros.map((libro) => (
        <BookCard key={libro.id} libro={libro} />
      ))}
    </div>
  );
}

export default BookList;
