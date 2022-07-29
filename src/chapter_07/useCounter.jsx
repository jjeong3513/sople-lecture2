import React, { useState } from 'react';

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increasseCount = ()=> setCount((count)=> count +1);
    const decreaseCount = ()=> setCount((count)=> Math.max(count -1, 0));


    return [count, increasseCount, decreaseCount] ;
};

export default useCounter;