import { useEffect } from 'react';

import Container from '../Shared/Container';
import Layout from '../Shared/Layout/Layout';
import { fetchConfig, selectConfigLoading } from 'state/product/slice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const configLoading = useSelector(selectConfigLoading);
  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  if (configLoading) return <h1>Loading......</h1>;

  return (
    <Layout>
      <Container className="flex justify-between p-0 mb-6">Home</Container>
    </Layout>
  );
};

export default Home;
