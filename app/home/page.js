import Image from "next/image";
import ourStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ourStoryPic}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
          <h1>Welcome to Home Page</h1>
          <h2>
            <Link href="/blog">Blog</Link>
          </h2>
          <h2>
            <Link href="/settings">Settings</Link>
          </h2>
          <h2>
            <Link href="/conference">Conference</Link>
          </h2>
      
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>
  );
}
