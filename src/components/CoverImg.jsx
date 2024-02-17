
const CoverImg = ({img,heading,subHeading}) => {
    return (
        
        <div className='h-[800px] bg-cover flex items-center justify-center' style={{ backgroundImage: `url(${img})` }}>
            <div className='text-white bg-black text-center px-40 py-36 bg-opacity-50 '>
                <h1 className='font-bold text-[5.5rem] uppercase'>{heading}</h1>
                <p className='text-2xl font-semibold uppercase'>{subHeading}</p>
            </div>
        </div>
    );
};

export default CoverImg;