

const Section = ({subHeading,Heading}) => {
    return (
        <div className="text-center my-12 ">
            <p className="text-[#D99904] text-xl">--- {subHeading} ---</p>
            <h1 className="text-4xl border-y-4 w-fit mx-auto py-4 px-16 uppercase">{Heading}</h1>
            
        </div>
    );
};

export default Section;