import { Type } from 'types';
import styles from './ProductInfo.module.scss';
import { selectInitialConfig } from 'state/product/slice';
import { useSelector } from 'react-redux';

interface IProductInfo {
  description?: string;
  name?: string;
  picture?: string;
  type?: Type;
}

const ProductInfo = ({ description, picture, name, type }: IProductInfo) => {
  const { mainColor } = useSelector(selectInitialConfig);

  return (
    <div className="pb-6 ">
      <div className={styles.image_wrapper}>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={picture}
          alt="product"
        />
        <div
          className={`text-xl text-white absolute top-0 left-0 p-4 rounded-br-lg`}
          style={{ backgroundColor: mainColor }}
        >
          {type?.name}
        </div>
      </div>
      <h1 className="text-3xl font-bold underline text-left mb-4 mt-4 pl-6">
        {name}
      </h1>
      {description && (
        <div
          className="pl-6 pr-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default ProductInfo;
