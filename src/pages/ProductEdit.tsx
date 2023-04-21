import React, { useEffect, useState } from 'react';

import UserInfo from '../Modules/UserInfo/UserInfo';
import Container from '../Shared/Container';
import Layout from '../Shared/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  fetchProductDetails,
  selectProduct,
  selectLoading,
  selectUpdateError,
  selectUpdateLoading,
  selectProductError,
  setName,
  setPicture,
  setDescription,
  fetchTrl,
  selectTrlSelector,
  setTrl,
  updateProduct,
  fetchConfig,
  selectInitialConfig,
  selectConfigLoading,
} from 'state/product/slice';
import ImageUploader from 'Components/ImageUploader/ImageUploader';
import RichTextEditor from 'Components/RichTextEditor/RichTextEditor';
import Dropdown from 'Components/DropDown/DropDown';
import { Trl } from 'types';

const Product = () => {
  const dispatch = useDispatch();

  const { description, type, name, picture, company, user, trl } =
    useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const productError = useSelector(selectProductError);
  const trls = useSelector(selectTrlSelector);

  const updateError = useSelector(selectUpdateError);
  const updateLoading = useSelector(selectUpdateLoading);

  const [title, setTitle] = useState('');
  const [trlValue, setTrlValue] = useState<Trl>(trl);

  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();
  const { hasUserSection, mainColor } = useSelector(selectInitialConfig);
  const configLoading = useSelector(selectConfigLoading);

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchTrl());
  }, [dispatch]);

  useEffect(() => {
    setTitle(name);
  }, [name]);

  useEffect(() => {
    setDetails(description);
  }, [description]);

  useEffect(() => {
    setImage(picture);
  }, [picture]);

  useEffect(() => {
    setTrlValue(trl);
  }, [trl]);

  const handleProductEdit = () => {
    dispatch(setPicture(image));
    dispatch(setName(title));
    dispatch(setDescription(details));
    dispatch(updateProduct());
  };

  const handleTrlEdit = () => {
    dispatch(setTrl(trlValue));
    dispatch(updateProduct());
  };

  const handleCancel = () => {
    setTitle('');
    setDetails('');
    setImage('');
  };

  if (loading || configLoading) return <h1>Loading</h1>;
  if (productError) return <h1>Error ! try again later</h1>;

  return (
    <Layout>
      <Link
        to={`/product/${id}`}
        className={`text-white px-4 py-2 rounded-lg`}
        style={{ backgroundColor: mainColor }}
      >
        View Offer
      </Link>
      <Container className="flex justify-between flex-col p-0 mt-6 mb-6 sm:flex-row">
        <div
          className={`w-[100%]  border-r-2 border-gray pb-6 ${
            hasUserSection ? 'sm:w-[70%]' : 'sm:w-[100%]'
          }`}
        >
          <ImageUploader
            handlePictureChange={(img) => setImage(img)}
            default={image}
            name={type.name}
          />
          <div className="px-6  mt-4">
            <input
              className="w-full box-border border border-gray p-2 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <RichTextEditor
            handleContentChange={(value) => setDetails(value)}
            content={details}
          />
          <div className="flex justify-end pr-6 gap-3 mt-4">
            <button
              className="text-secondary cursor-pointer"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              disabled={updateLoading}
              onClick={handleProductEdit}
              className={`text-white px-4 py-1 cursor-pointer rounded-lg ${
                updateLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{ backgroundColor: mainColor }}
            >
              Save
            </button>
          </div>
          {updateError && <p className="text-red-800 px-6 py-1">Error !</p>}
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

      <Container className="pb-6">
        <Dropdown
          trls={trls}
          handleTrlChange={(value) => setTrlValue(value)}
          initialValue={trl}
        />
        <button
          disabled={updateLoading}
          onClick={() => handleTrlEdit()}
          className={`text-white ml-6 px-4 py-1 cursor-pointer rounded-lg ${
            updateLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ backgroundColor: mainColor }}
        >
          Save
        </button>
      </Container>
    </Layout>
  );
};

export default Product;
