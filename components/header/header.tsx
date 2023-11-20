import classNames from "classnames";
import styles from "./header.module.scss";
import { useHeader } from "./useHeader";

export const Header = () => {
  const { sticky, stickyRef } = useHeader();
  return (
    <>
      <div
        className={classNames(styles.header, sticky && styles.sticky)}
        ref={stickyRef}
      ></div>
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`,
          }}
        />
      )}
    </>
  );
};
