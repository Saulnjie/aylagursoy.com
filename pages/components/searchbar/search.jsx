import { useRef } from "react";
import liveSearch from "../livesearcher/livesearch";


interface Props<T> {
    items: T[]
    setItems: []
}

const SearchBar = () => {


// Legg inn arrayet her

// const Projects = ({ product})
//     const [hotels, setHotels] = useState("");
//     const [query, setQuery] = useState("");
  
//     const handleOnSearch = (event) => {
//       event.preventDefault();
//       setHotels(event.target.value);
//     };
  
//     const handleSearch = (event) => {
//       event.preventDefault();
//       setQuery(event.target.value);
//     };
  
//     const filterHotels = () => {
//       return hotel.filter(
//         (hotel) =>
//           hotel.name.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
//       );
//     };


// Over dette er searchbar 

    return (
        <div className="items-center flex justify-left" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Search Here..."
             
                    // oninput="liveSearch()"
                    id="searchbox"
                    // onChange={(event) => handleOnSearch(event)}
                />
            </div>
        </div>
    );
}

export default SearchBar