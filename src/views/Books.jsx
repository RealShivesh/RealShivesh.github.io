import { useState, useEffect } from 'react'
import '../styles/components/_books.scss'

export const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const searchBooks = async (query) => {
    if (!query) return
    setLoading(true)

    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`

    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setBooks(data.items || [])
    } catch (err) {
      console.error('Error fetching books:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="books" className="books">
      <h2>📚 Search for Books</h2>
      <p>A real-time global book search</p>

      {/* ✅ Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchBooks(searchQuery)}
        />
        <button onClick={() => searchBooks(searchQuery)}>🔍 Search</button>
      </div>

      {/* ✅ Display Books */}
      <div className="book-grid">
        {loading ? (
          <p>Loading...</p>
        ) : books.length > 0 ? (
          books.map((book, index) => {
            const volumeInfo = book.volumeInfo
            return (
              <div key={index} className="book-card">
                <img src={volumeInfo.imageLinks?.thumbnail || '/images/default-book.png'} alt={volumeInfo.title} />
                <h4>{volumeInfo.title}</h4>
                <p>{volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
              </div>
            )
          })
        ) : (
          <p>🔍 Search for books above!</p>
        )}
      </div>
    </section>
  )
}
