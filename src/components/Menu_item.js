const Menu_item = () =>{
    return(
        <div>
            <div className="flex justify-between m-5 border-solid border-b-2 border-gray-300">
            <div className="w-[85%]">
                <h2 className="text-red-500 font-serif">🔴 ⭐Bestseller</h2>
                <h1>🟩 Panner roll</h1>
                <h2>₹ 90</h2>
                <h2>💚 3.8(150)</h2>
                <p>parathas
                    paneer tikka, bell peppers, and onions</p>
            </div> 
            <div className=" border-2 border-green-300 border-solid  text-green-600 m-6 px-7 py-4 rounded-lg w-[15%] style">
               <button className="font-bold ">
                Add +
               </button>
               
            </div>
        </div>
        <div className="flex justify-between m-5 border-solid border-b-2 border-gray-300">
            <div className="">
                <h2 className="text-red-500 font-serif">🔴 ⭐Bestseller</h2>
                <h1>Chicken Biryani</h1>
                <h2>₹ 260</h2>
                <h2>💚 3.4(15)</h2>
                <p>Biryani is a mixed rice dish, mainly popular in South Asia.</p>
            </div> 
            <div className=" border-2 border-green-300 border-solid  text-green-600 m-6 px-7 py-4 rounded-lg style">
               <button className="font-bold">
                Add +
               </button>
            </div>
        </div>
        <div className="flex justify-between m-5 border-solid border-b-2 border-gray-300">
            <div className="">
                {/* <h2 className="text-red-500 font-serif">🔴 ⭐Bestseller</h2> */}
                <h1>Egg curry</h1>
                <h2>₹ 120</h2>
                <h2>💚 3.2(15)</h2>
                <p>boiled eggs, onions, tomatoes, whole & ground spices and herbs</p>
            </div> 
            <div className=" border-2 border-green-300 border-solid  text-green-600 m-6 px-7 py-4 rounded-lg style">
               <button className="font-bold">
                Add +
               </button>
            </div>
        </div>
        <div className="flex justify-between m-5 border-solid border-b-2 border-gray-300">
            <div className="">
                <h2 className="text-red-500 font-serif">🔴 ⭐Bestseller</h2>
                <h1>Butter Panner</h1>
                <h2>₹ 260</h2>
                <h2>💚 4.2(105)</h2>
                <p>paneer, spices, onions, tomatoes, cashews and butter</p>
            </div> 
            <div className=" border-2 border-green-300 border-solid  text-green-600 m-6 px-7 py-4 rounded-lg style">
               <button className="font-bold">
                Add +
               </button>
            </div>
        </div>
        </div>
    )
}
export default Menu_item