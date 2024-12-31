import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import EntityForm from './components/EntityForm';
import EntityList from './components/EntityList';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Library Management</h1>
        <div className="mb-8">
          {/* <h2 className="text-2xl font-bold mb-4">Books</h2> */}
          <BookList />
          <BookForm />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Entities</h2>
          <EntityForm entity="publishers" />
          <EntityList entity="publishers" />
          <EntityForm entity="authors" />
          <EntityList entity="authors" />
          <EntityForm entity="library-branches" />
          <EntityList entity="library-branches" />
          <EntityForm entity="cards" />
          <EntityList entity="cards" />
          <EntityForm entity="book-lendings" />
          <EntityList entity="book-lendings" />
        </div>
      </div>
    </div>
  );
}

export default App;
