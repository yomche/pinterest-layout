import axios from "axios";
import { useState, useEffect } from "react";

export const useGrid = () => {
  const [images, setImages] = useState<any>([]);
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [error, setError] = useState(null);
  const unsplashApiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=30&client_id=${unsplashApiKey}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(unsplashEndpoint);
      setImages([...images, ...(response.data ?? [])]);
      setIsInitLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(`Error: ${error}`);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { error, images, isInitLoading, handleButtonClick };
};
