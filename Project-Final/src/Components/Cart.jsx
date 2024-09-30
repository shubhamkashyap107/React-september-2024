// // import React from 'react'
// // import {useSelector} from "react-redux"



// // const Cart = () => {

// //     const cartData = useSelector(store => store.cart)
// //     // console.log(cartData)



// //   return (
// //     cartData.map((item) => {

// //         const{name, price, description, imageId, quantity} = cartData

// //         return (
// //             <div>

// //             </div>
// //         )
// //     })
// //   )
// // }

// // export default Cart


// import React from 'react';
// import { useSelector } from "react-redux";
// import { Cloudinary_URL } from '../Constants';

// const Cart = () => {
//     const cartData = useSelector(store => store.cart);

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
//             {cartData.length === 0 ? (
//                 <p className="text-lg text-gray-600 text-center">Your cart is empty.</p>
//             ) : (
//                 <div className="space-y-4">
//                     {cartData.map((item, index) => {
//                         const { name, price, description, imageId, quantity } = item;

//                         return (
//                             <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-7/12 mx-auto" key={index}>
//                                 <img
//                                     className="w-24 h-24 object-cover rounded-md mr-4"
//                                     src={Cloudinary_URL + imageId} // Replace with your Cloudinary URL
//                                     alt={name}
//                                 />
//                                 <div className="flex-grow">
//                                     <h2 className="text-xl font-semibold">{name}</h2>
//                                     <p className="text-gray-500">{description}</p>
//                                     <p className="text-lg font-medium text-green-600 mt-2">
//                                         ${price / 100} x {quantity}
//                                     </p>
//                                 </div>
                                
//                             </div>
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;


import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Cloudinary_URL } from '../Constants';
import {addItem, removeItem} from "../Utils/CartSlice"

const Cart = () => {
    const cartData = useSelector(store => store.cart);
    const dispatch = useDispatch()


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            {cartData.length === 0 ? (
                <p className="text-lg text-gray-600 text-center">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartData.map((item, index) => {
                        const { name, price, description, imageId, quantity } = item;

                        return (
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-7/12 mx-auto" key={index}>
                                <img
                                    className="w-24 h-24 object-cover rounded-md mr-4"
                                    src={Cloudinary_URL + imageId}
                                    alt={name}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold">{name}</h2>
                                    <p className="text-gray-500">{description}</p>
                                    <p className="text-lg font-medium text-green-600 mt-2">
                                        ${price / 100} x {quantity}
                                    </p>
                                </div>

                                {/* Quantity control */}
                                <div className="flex items-center">
                                    <button onClick={() => {
                                        dispatch(removeItem(item))
                                    }}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg"
                                        // Placeholder for decrement functionality
                                    >
                                        -
                                    </button>
                                    <span className="mx-4 text-lg">{quantity}</span>
                                    <button onClick={() => {
                                        dispatch(addItem(item))
                                    }}
                                        className="bg-green-500 text-white px-3 py-1 rounded-lg"
                                        // Placeholder for increment functionality
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cart;
