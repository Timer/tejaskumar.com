import React, { ReactNode } from "react";
import styles from "./BlogPost.module.css";

export default function BlogPost({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { children?: ReactNode }) {
  return (
    <div {...rest} className={styles.div}>
      {children}
    </div>
  );
}
