import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className='loader'>
      <ReactLoading
        type='spin'
        color='black'
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
