import React from 'react';
import ReactDOm from 'react-dom';
import YTSearch from  'youtube-api-search';


import SearchBar from './components/search_bar';

//1) Make the Component
//Create a new component.  This component should produce
// some HTML

const API_KEY = "AIzaSyD2F1OQxeR2AnicanzCcC8f1VluPoO0YtA";

YTSearch({key:API_KEY,term:'surfboards'},function(data){console.log(data);});
const App = () => {
	return <div>
	 	     <SearchBar/>
	       </div>;
}

// 2) Show it on the page (Render)
// Take this components generated HTML from REACT and put it
// on the page (in the DOM)

//FROm Soutce to Target
ReactDOm.render(<App/>,document.querySelector('.container'));
