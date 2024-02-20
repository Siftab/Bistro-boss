import FoodCard from "./FoodCard";

const OrderTab = ({data}) => {
    return (
        <div className='grid grid-cols-3 gap-6'>{
            data.map(item=> 
                <FoodCard key={item._id} item={item}></FoodCard>)
        }</div>
    );
};

export default OrderTab;