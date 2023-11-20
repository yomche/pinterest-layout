"use client";
import { Button } from "@/ui/button";
import { useGrid } from "./useGrid";
import styles from "./grid.module.scss";
import { Loader } from "@/ui/loader";

export const Grid = () => {
  const { error, images, isInitLoading, handleButtonClick } = useGrid();

  return (
    <>
      {isInitLoading && !error ? (
        <div className={styles.wrapper}>
          <Loader />
        </div>
      ) : (
        <div className={styles.container}>
          <>
            {images?.map((image: any, idx: number) => {
              return (
                <div className={styles.image} key={idx}>
                  <img src={image?.urls?.thumb} alt={image.alt_description} />
                </div>
              );
            })}
          </>
        </div>
      )}
      {error && (
        <div className={styles.wrapper}>
          <ErrorMessage />
        </div>
      )}
      {!error && (
        <Button
          position="center"
          title={"Load more"}
          action={handleButtonClick}
        />
      )}
    </>
  );
};

const ErrorMessage = () => (
  <div className={styles.error}>
    <h3>Unsplash API Error</h3>
    Looks like there is an error fetching images from the Unsplash API. This is
    likely due to exceeding their free API limit. <br />
    Please come back in 60 minutes.
  </div>
);
