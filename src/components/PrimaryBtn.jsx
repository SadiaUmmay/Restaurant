
const PrimaryBtn = ({title}) => {
  return (
    <div className="flex justify-center my-5">
      <button className="btn bg-white border-b-4 border-b-black hover:border-b-black uppercase hover:bg-black hover:text-white">{title}</button>
    </div>
  );
};

export default PrimaryBtn;