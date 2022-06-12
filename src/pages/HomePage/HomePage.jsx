import Section from 'shared/shared-components/section';

import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <Section title="Go ahead! You can manage your contacts">
      <iframe
        className={styles.gif}
        src="https://giphy.com/embed/26FfbEpKus6uPskM0"
        width="580"
        height="460"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/heyarnold-hey-arnold-nicksplat-26FfbEpKus6uPskM0"></a>
      </p>
    </Section>
  );
};

export default HomePage;
