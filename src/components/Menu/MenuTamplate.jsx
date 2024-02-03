
const MenuTamplate = ({menu}) => {
    return (
        <div>
            {menu.length}
            {menu.map(item=> <div key={item._id}> this is card</div>)}
            
        </div>
    );
};

export default MenuTamplate;