import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import SessionHabis from "../components/session";
import Card from "../components/card";
import Spinner from "../components/spinner";

const Home = () => {
  const [nama, setNama] = useState("");
  const email = sessionStorage.getItem("email");
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([])
  let pageNumber = sessionStorage.getItem("pageNumber") ? parseInt(sessionStorage.getItem("pageNumber")) : 1;
  let pageSize = sessionStorage.getItem("pageSize") ? parseInt(sessionStorage.getItem("pageSize")) : 50;

  const getUsers = async (email) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/users/${email}`);
      setNama(response.data.nama);
    } catch (error) {
      console.error(error);
    }
  };
  
  const getFilms = async () => {
    try {
      const response = await axios.post(`http://localhost:3003/api/users/film`, { pageNumber});
      setFilms(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    pageNumber = pageNumber === 1 ? pageSize : pageNumber - 1;
    sessionStorage.setItem("pageNumber", pageNumber);
    getFilms(pageNumber);
    scrollToTop();
  }

  const handleNext = () => {
    pageNumber = pageNumber === pageSize ? 1 : pageNumber + 1;
    sessionStorage.setItem("pageNumber", pageNumber);
    getFilms(pageNumber);
    scrollToTop();
  }

  useEffect(() => {
    getUsers(email);
    getFilms(pageNumber);
  }, []);
  
  if (!email){
    return (
      <div className="max-w-sm mx-auto mt-4 flex flex-col gap-y-4">
        <SessionHabis />
      </div>
    );
  }else{
    return (
      <div className="max-w-sm mx-auto mt-4 flex flex-col gap-y-4">
        <Navbar nama={nama} />
        <div>
          <h1 className="text-xl font-semibold border-b pb-1">List Film</h1>
        </div>
        {loading && <Spinner />}
        {films.map((film, index) => (
            <Card key={index} title={film.title} tagline={film.tagline} />
          ))}
        <div className="flex justify-evenly mb-8">
          <button 
            type="button" 
            onClick={handlePrev} 
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-300 hover:bg-gray-400 shadow-xl  w-fit">
            prev
          </button>
          <button 
            type="button" 
            onClick={handleNext}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-300 hover:bg-gray-400 shadow-xl w-fit">
            next
          </button>
        </div>
      </div>
    );
  }
};

export default Home;
