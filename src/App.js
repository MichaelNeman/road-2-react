import React, { useEffect, useState } from 'react';
import './App.css';



const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https:\\reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https:\\redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 4,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const searchedStories =
    stories.filter(story => {
      return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />

    </div>
  );
};

const List = ({ list }) =>
  list.map(item => <Item key={item.objectID} {...item} />);

const Item = ({ title, url, author, num_comments, points }) => (
  <div>
    <span><a href={url}>{title}</a></span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />

  </div>

);

export default App;


