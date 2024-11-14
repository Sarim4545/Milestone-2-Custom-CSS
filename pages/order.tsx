import React from 'react';
import Image from 'next/image'; 

const Order: React.FC = () => {
  return (
    <div className="order-container">
      <h1>Menu</h1>
      <p>Craving a Coffee? Order Your Perfect Brew Here!!</p>

      <div className="items-container">
        <div className="item">
          <Image 
            src="/americano.jpg" 
            alt="Coffee 1" 
            className="item-image" 
            width={400} 
            height={250} 
          />
          <h2>Classic Americano</h2>
          <p>Each sip of a Classic Americano offers a harmonious blend of deep, dark notes and a subtle hint of acidity, creating a refreshing and invigorating experience. Whether enjoyed black or with a touch of milk, the Americano is perfect for Office Workers.</p>
        </div>
        <div className="item">
          <Image 
            src="/cappuccino.jpg" 
            alt="Coffee 2" 
            className="item-image" 
            width={400} 
            height={250} 
          />
          <h2>Cappuccino</h2>
          <p>Indulge in the luxurious experience of a Cappuccino, a classic favorite among coffee enthusiasts. The result is a perfectly balanced beverage that showcases the robust flavors of the espresso while offering a creamy, smooth texture that’s simply irresistible.</p>
        </div>
        <div className="item">
          <Image 
            src="/latte.jpg" 
            alt="Coffee 3" 
            className="item-image" 
            width={400} 
            height={250} 
          />
          <h2>Latte</h2>
          <p>A Coffee Latte is a delightful combination of rich espresso and smooth, steamed milk, topped with a light layer of foam. This creamy beverage highlights the deep flavors of the espresso while adding a silky texture from the milk, creating a perfect balance of robust and mellow notes.</p>
        </div>
      </div>

      <button className="order-now-button">Order Now</button>
    </div>
  );
};

export default Order;
