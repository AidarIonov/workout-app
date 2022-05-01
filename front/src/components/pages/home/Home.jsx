import bg from '../../../images/home-bg.webp';
import Button from '../../ui/button/Button';
import Layout from '../../common/Layout';
import styles from './home.module.scss';
import Counters from '../../common/header/counters/Counters';
const Home = () => {
  return (
    <Layout background={bg}>
    <div className={styles.wrapper}>
    <div className={styles.footer}>
    <Button>
      New
    </Button>
    <h1 className={styles.title}>EXERCISES FOR
      THE SHOULDERS</h1>
      <Counters/>
    </div>
    </div>
    </Layout>
  );
};

export default Home;