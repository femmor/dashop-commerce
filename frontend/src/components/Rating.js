import { ImStarHalf, ImStarFull, ImStarEmpty } from '../utils/icons';

const Rating = ({ value, color, text }) => {
  return (
    <div className='rating d-flex gap-1 align-items-center'>
      <span>
        {value >= 1 ? (
          <ImStarFull className={color} size={15} />
        ) : value >= 0.5 ? (
          <ImStarHalf className={color} size={15} />
        ) : (
          <ImStarEmpty className={color} size={15} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <ImStarFull className={color} size={15} />
        ) : value >= 1.5 ? (
          <ImStarHalf className={color} size={15} />
        ) : (
          <ImStarEmpty className={color} size={15} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <ImStarFull className={color} size={15} />
        ) : value >= 2.5 ? (
          <ImStarHalf className={color} size={15} />
        ) : (
          <ImStarEmpty className={color} size={15} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <ImStarFull className={color} size={15} />
        ) : value >= 3.5 ? (
          <ImStarHalf className={color} size={15} />
        ) : (
          <ImStarEmpty className={color} size={15} />
        )}
      </span>
      <span>
        {value === 5 ? (
          <ImStarFull className={color} size={15} />
        ) : value >= 4.5 ? (
          <ImStarHalf className={color} size={15} />
        ) : (
          <ImStarEmpty className={color} size={15} />
        )}
      </span>
      {<span>{text && text}</span>}
    </div>
  );
};
export default Rating;
