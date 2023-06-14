import React from 'react';
import Layout from './layout';
import styles from './page.module.css';

const Page = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src="/images/aku.jpg" alt="Profil Saya" />
          <h2>Kevin Immanuel Harefa</h2>
          <h3>
            <a
              href="https://www.google.com/maps/place/Institut+Teknologi+Del/@2.3832152,99.1464441,17z/data=!3m1!4b1!4m6!3m5!1s0x302e00fdad2d7341:0xf59ef99c591fe451!8m2!3d2.3832152!4d99.1486328!16s%2Fg%2F12148s15?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Institut Teknologi Del
            </a>
          </h3>
          <p>
            I am a student at the Del Institute of Technology. I've developed my technical skills and soft skills from my
            course. I like to work in teams and problem-solving. Currently interested in Web Development.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/kevin-immanuel-harefa-67665224b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path/link.png" alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/people/Kevin-Immanuell/pfbid024bDCaraAv1PbuLCGnNNiZRPvMzxH3pavVaZzNzSwRySkvoYUNQSo78xAqQNaioorl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path/fcbk.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/keviin.n_/" target="_blank" rel="noopener noreferrer">
            <img src="/path/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
