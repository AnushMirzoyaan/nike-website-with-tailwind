import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          height={24}
          width={24}
          alt="star"
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
