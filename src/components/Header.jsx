import React from 'react';
const bgHeader = "https://i.ibb.co/r2Lb687V/15.jpg";


const Header = () => {
    return (
        <div className='max-h-[120px] '
          style={{ backgroundImage: `url(${bgHeader})` }}>
            
           <div className='flex justify-center items-center gap-2 primary-font'>
            
            <img className='w-14' src="https://i.ibb.co/0RydLbzP/logo1.png" alt="" />
            <h1 className='text-white font-thin text-2xl'>Espresso Emporium</h1>
           </div >
        </div>
    );
};

export default Header;