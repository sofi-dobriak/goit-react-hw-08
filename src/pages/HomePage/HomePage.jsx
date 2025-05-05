import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 style={styles.title}>
        Contact book welcome page
        <span role='img' aria-label='Greeting icon'>
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
