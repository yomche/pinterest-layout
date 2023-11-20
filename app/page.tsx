"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [images, setImages] = useState<any>([]);
  const [page, setPage] = useState(1);

  const unsplashApiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=15&client_id=${unsplashApiKey}&page=${page}`;

  const fetchData = async () => {
    axios
      .get(unsplashEndpoint)
      .then((res) => {
        setImages([...images, ...(res.data ?? [])]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;

    if (userScrollHeight >= windowBottomHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      <div className={styles.container}>
        {images?.map((image: any, idx: number) => {
          return (
            <div className={styles.image} key={idx}>
              <img src={image?.urls?.thumb} alt={image.alt_description} />
            </div>
          );
        })}
      </div>
    </>
  );
}
