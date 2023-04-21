import Tag from '../../Components/Tag/Tag';

const Offer = ({ data, title }: any) => {
  return (
    <div>
      <h1 className="text-xl font-bold underline text-left mb-4 mt-4">
        {title}
      </h1>
      <div className="flex  flex-wrap">
        {data.map((c: any) => (
          <Tag key={c.id} name={c.name} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
