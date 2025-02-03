
const SectionHeading = ({title, heading}) => {
  return (
    <div className="mx-auto w-64 text-center my-10">
      <h4 className="text-orange-600 mb-4">---{title}---</h4>
      <hr />
      <h1 className="text-2xl font-bold my-4">{heading}</h1>
      <hr />
    </div>
  );
};

export default SectionHeading;