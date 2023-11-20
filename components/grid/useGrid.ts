import axios from "axios";
import { useState, useEffect } from "react";

export const useGrid = () => {
  const [images, setImages] = useState<any>([]);
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [error, setError] = useState(null);
  const unsplashApiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=30&client_id=${unsplashApiKey}`;

  const fetchImages = async () => {
    axios
      .get(unsplashEndpoint)
      .then((res) => {
        setImages([...images, ...(res.data ?? [])]);
        setIsInitLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  const handleButtonClick = () => {
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { error, images, isInitLoading, handleButtonClick };
};
