import { Parallax } from 'react-parallax'
const CoverPage = ({title, bannerImg, heading}) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bannerImg}
        bgImageAlt="banner img"
        strength={-200}
    >
       <div style={{height:'600px'}}>
        <div className='hero min-h-screen'>
            <div className='text-center bg-black bg-opacity-30 px-20 py-20 text-white w-1/2 mx-auto'>
            <h1 className="text-7xl font-semibold my-3">{title}</h1>
            <h6 >{heading}</h6>
            </div>
        </div>
       </div>
        
    </Parallax>
    </div>
  );
};

export default CoverPage;