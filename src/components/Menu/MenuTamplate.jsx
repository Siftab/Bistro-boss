
const MenuTamplate = ({menu}) => {
    return (
        <div className=" grid md:grid-cols-2 gap-7">
            {/* {menu.length} */}
            {menu.map(item=> <div key={item._id} className="flex space-x-4 "> 
                <img src={item.image } className="h-24 rounded-b-full rounded-tr-full w-28"  alt="" />
                <div>
                    <h3 className="text-xl uppercase">{item.name}</h3>
                    <p className="text-[#737373] text-base">{item.recipe}</p>
                </div>

                <p className="text-[#BB8506] text-xl"> &#36;{item.price}</p>
            </div>)}
            
        </div>
    );
};

export default MenuTamplate;