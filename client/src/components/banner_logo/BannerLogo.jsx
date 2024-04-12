import styles from "./BannerLogoStyle.module.css";

export default function BannerLogo() {
  return (
    <div className={styles.containerBannerLogo}>
      <img
        src="../../assets/logos/logo-ivory.png"
        alt="The logo represents the name ivory"
      />
    </div>
  );
}
