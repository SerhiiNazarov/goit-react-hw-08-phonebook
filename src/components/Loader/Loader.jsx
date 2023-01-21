import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="200"
      width="200"
      radius="12"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'block',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
