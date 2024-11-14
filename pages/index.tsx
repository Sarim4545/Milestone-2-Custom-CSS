import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <header className="navbar">
        <h1 className="logo">{process.env.NEXT_PUBLIC_CAFE_NAME}</h1>
        <nav>
          <Link href="#">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>

      <main className="content">
        <div className="text-content">
          <h2>Discover The Art Of Perfect Coffee</h2>
          <p>
            Experience the rich and bold flavors of our exquisite coffee blends, crafted to awaken your senses and start your day right. Our carefully selected beans and expert roasting techniques bring out the unique characteristics and nuances in every cup. Whether you prefer a strong espresso or a smooth latte, our coffee is designed to provide a perfect start to your day, a relaxing afternoon break, or a delightful end to your evening. Indulge in the artistry of our baristas and the quality of our ingredients, and discover why our coffee is a cut above the rest.
          </p>
          <div className="buttons">
            <Link href="/order">
              <button className="order-button">Buy a Coffee</button>
            </Link>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
        <div className="image-content">
          <Image 
            src="/espresso.jpg" 
            alt="Cup of Coffee" 
            className="inner-image" 
            width={500} 
            height={300} 
          />
        </div>
      </main>

      <footer className="stats">
        <div>
          <h3>50+</h3>
          <p>ITEM OF COFFEE</p>
        </div>
        <div>
          <h3>20+</h3>
          <p>Outlets Running</p>
        </div>
        <div>
          <h3>2k+</h3>
          <p>Happy Customers</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
