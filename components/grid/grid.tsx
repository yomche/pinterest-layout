"use client";
import { Button } from "@/ui/button";
import { useGrid } from "./useGrid";
import styles from "./grid.module.scss";

export const Grid = () => {
  const { error, images, handleButtonClick } = useGrid();
  return (
    <>
      <Button
        position="center"
        title={"Load more"}
        action={handleButtonClick}
      />
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
