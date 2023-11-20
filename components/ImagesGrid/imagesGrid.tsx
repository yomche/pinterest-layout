"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./imagesGrid.module.scss";
import { Button } from "@/ui/button";

export const ImagesGrid = () => {
  const [images, setImages] = useState<any>([]);
  const [error, setError] = useState(null);
  const unsplashApiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=15&client_id=${unsplashApiKey}`;

  const fetchData = async () => {
    axios
      .get(unsplashEndpoint)
      .then((res) => {
        setImages([...images, ...(res.data ?? [])]);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Button position="center" title={"Load more"} action={fetchData} />
      <div className={styles.container}>
        {error ? (
          <ErrorMessage />
        ) : (
          <>
            {images?.map((image: any, idx: number) => {
              return (
                <div className={styles.image} key={idx}>
                  <img src={image?.urls?.thumb} alt={image.alt_description} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const ErrorMessage = () => (
  <div className={"error"}>
    <div className="error-title">Unsplash API Error</div>
    Looks like there is an error fetching images from the Unsplash API. This is
    likely due to exceeding their free API limit. <br />
    Please come back in 60 minutes.
  </div>
);
