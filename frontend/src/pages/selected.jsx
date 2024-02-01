/* eslint-disable no-useless-catch */
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import Card from '../components/card';

const Selected = () => {
  
  const { title } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  const getSelected = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/users/selected/${title}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const filterKurungTegak = (obj) => {
    return obj.slice(1, obj.length - 2)
  }

  const filterPetik = (obj) => {
    if(obj[0] === ' '){
      return obj.slice(2, obj.length-1)
    }else{
      return obj.slice(1, obj.length-1)
    }
  }

  const getRecommendations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3003/api/users/recommendations/${title}`);
      let films = response.data.recommendations;
      films = filterKurungTegak(films)
      setRecommendations(films.split(','));
      setLoading(false);
    } catch (error) {
      throw error
    }
  };

  useEffect(() => {
    getSelected();
    getRecommendations();
  }, []);

  
    return (
      <div className="max-w-sm mx-auto mt-4 flex flex-col gap-y-4">
          <div>
            <button type="button" className="py-2 mb-4 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-300 text-black hover:bg-gray-400 shadow-md disabled:opacity-50 disabled:pointer-events-none w-fit" 
            onClick={() => window.history.back()}
            >
              back
            </button>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 ">
              <h3 className="text-lg font-bold text-gray-800 ">
                {data?.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase text-gray-600 ">
                {data?.tagline}
              </p>
              <p className="mt-2 text-gray-400 ">
                overview : {data?.overview}
              </p>
            </div>
          </div>
          <div className='text-sm text-white font-semibold bg-gray-700 p-2 w-fit rounded-sm'>
            Recomendations for you!
          </div>
          {
            (loading === true) && (<Spinner/>) 
          }
          {
            (loading !== true) &&   <div>
            {
              recommendations.map((recommendation, index) => (
                <Card key={index} title={filterPetik(recommendation)} />
              ))
            }
            </div> 
          }
      </div>
    )
}
  
export default Selected
