import React, { useEffect } from 'react';
import Details from '../Modules/OfferDetails/OfferDetails';
import VideoWrapper from '../Modules/VideoWrapper/VideoWrapper';
import UserInfo from '../Modules/UserInfo/UserInfo';
import ProductInfo from '../Modules/ProductInfo/ProductInfo';
import Container from '../Shared/Container';
import Layout from '../Shared/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  fetchProductDetails,
  selectProduct,
  selectLoading,
  selectProductError,
  selectConfigLoading,
  fetchConfig,
  selectInitialConfig,
} from 'state/product/slice';
import { getYoutubeId } from 'utils/getYoutubeId';

const Product = () => {
  const dispatch = useDispatch();
  const {
    description,
    type,
    name,
    picture,
    company,
    user,
    video,
    categories,
    trl,
    businessModels,
    investmentEffort,
  } = useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const productError = useSelector(selectProductError);
  const configLoading = useSelector(selectConfigLoading);
  const { hasUserSection, mainColor } = useSelector(selectInitialConfig);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading || configLoading) return <h1>Loading</h1>;
  if (productError) return <h1>Error ! try again later</h1>;

  return (
    <Layout>
      <Link
        to={`/product/edit/${id}`}
        className={`text-white px-4 py-2 rounded-lg mb-6`}
        style={{ backgroundColor: mainColor }}
      >
        Edit Offer
      </Link>
      <Container className="flex justify-between mt-6 flex-col p-0 mb-6 sm:flex-row">
        <div
          className={`w-[100%]  border-r-2 border-gray ${
            hasUserSection ? 'sm:w-[70%]' : 'sm:w-[100%]'
          }`}
        >
          <ProductInfo
            description={description}
            type={type}
            name={name}
            picture={picture}
          />
        </div>
        {hasUserSection && (
          <div className="w-[100%] p-6  sm:w-[30%]">
            <UserInfo
              lastName={user.lastName}
              profilePicture={user.profilePicture}
              firstName={user.firstName}
              companyName={company.name}
              location={company.address}
            />
          </div>
        )}
      </Container>

      <VideoWrapper videoId={getYoutubeId(video)} />

      <Details
        technology={{ name: 'Technology', data: categories }}
        trl={{ name: 'TRL', data: trl }}
        businessModel={{ name: 'Business Model', data: businessModels }}
        costs={{ name: 'Costs', data: investmentEffort }}
      />
    </Layout>
  );
};

export default Product;
