import styles from "./BannerLogoStyle.module.css";
import Logo from "../../assets/logos/logo-ivory.png"

export default function BannerLogo() {
  return (
    <div className={styles.containerBannerLogo}>
      <img
        src={Logo}
        alt="The logo represents the name ivory"
      />
    </div>
  );
}
