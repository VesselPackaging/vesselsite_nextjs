'use client';
import { useOrderStore } from 'utils/state/store/Order.js';

const Type = () => {
    const order = useOrderStore(state => state.order);
    const setField = useOrderStore(state => state.setField);
    const renderComponent = (selectedOption) => {
        switch (selectedOption) {
          case 'All In One':
            return <AllInOne />;
          case 'Blank Cans':
            return <BlankCans  />;
          case 'Can App':
            return <CanApp />;
          case 'Labels Only':
            return <LabelsOnly />;
          case 'Supplies':
            return <Supplies />;
          default:
            return null;
        }
      };
    const handleClick = (e) => {
        e.preventDefault()
        setField('orderType', e.target.value)
        renderComponent(e.target.value)
        console.log(order)
    }
    return (
        <div className="flex justify-center items-center min-h-screen pb-64">
            <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-40 md:px-14">
                <div
                    onClick={handleClick}
                    value="All In One"
                    className="w-full h-36 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <h1>All In One</h1>
                    <div className="vessel_sub_text text-center px-4 py-4">Order your label, can and application in one</div>
                </div>
                <div
                    onClick={handleClick}
                    value="Labels Only"
                    className="w-full h-36 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <div>Labels Only</div>
                    <div className="vessel_sub_text text-center px-4 py-4">Order flexographic Shrink Sleeves</div>
                </div>
                <div
                    onClick={handleClick}
                    value="Can App"
                    className="w-full h-36 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <div>Can App</div>
                    <div className="vessel_sub_text text-center px-4 py-4">Book application of customer-owned labels</div>
                </div>
                <div
                    onClick={handleClick}
                    value="Blank Cans"
                    className="w-full h-36 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <div>Blank Cans</div>
                </div>
                <div
                    onClick={handleClick}
                    value="Supplies"
                    className="w-full h-36 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <div>Supplies</div>
                </div>
            </div>
        </div>
    );
    
    
    
}

export default Type