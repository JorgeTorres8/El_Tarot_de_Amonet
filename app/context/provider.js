'use client'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const TarotContext = createContext({});

export default function TarotProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [totalReadings, setTotalReadings] = useState(0);
    const [readings, setReadings] = useState([]);
    const [page, setPage] = useState(1);
  /*  const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});

    const dashboardRef = useRef(null);
    const swiperRef = useRef(null);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    useEffect(() => {
      const getCategories = async () => {
          setLoading(true);
          const {data} = await axios('../data/db.json')
          setCategories(data) 
          setLoading(false);
      }
      getCategories();
    }, [])

    
    useEffect(() => {
      setCurrentCategory(categories[0]);
    }, [categories])

    const handleClickCategory = id => {
      setLoading(true);
      const category = categories.filter( cat => cat.id === id);
      setCurrentCategory(category[0]);
      setLoading(false);

      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(0);
      }

      dashboardRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }*/
   
    useEffect(() => {
        const count = async () => {
          const url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/lists`
          const {data} = await axios(url);
          setTotalReadings(data.length);
        }
        count()
      }, [])

    useEffect(() => {
    const consultAPI = async () => {
        setLoading(true);
        // const url = `${process.env.NEXT_PUBLIC_API_URL}/lists?_sort=order:ASC&_start=${(page-1)*6}&_limit=6 OJOOO ?_start=${(page-1)*6}&_limit=6 Y [page]`
        const url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/lists?_start=${(page-1)*6}&_limit=6`
        const {data} = await axios(url);
        setReadings(data);
        setLoading(false);
    }
    consultAPI();
    }, [page])

    const handleChangePage = (value) => {
      setPage(value);
    }

  return (
    <TarotContext.Provider value={{
      isOpen,
      loading,
      totalReadings,
      readings,
      handleChangePage,
      page
    }}>
      {children}
    </TarotContext.Provider>)
};