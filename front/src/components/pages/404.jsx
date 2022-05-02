import Layout from "../common/Layout";
import bg from '../../images/new-exercise.jpg'
import { Link } from "react-router-dom";
const Error404 = () => {

  return (
    <Layout background={bg}>
    <div className="error-wrapper">
      <h1>404! Page not found!</h1>
      <Link to='/'>Go back home</Link>
    </div>
    </Layout>
  );
};

export default Error404;