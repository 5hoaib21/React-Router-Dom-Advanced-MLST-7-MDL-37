import React from 'react';
import { useLoaderData } from 'react-router';

const Users3 = () => {
  const user3Data = useLoaderData()
  console.log('this data from user 3',user3Data);
  return (
    <div>
      <h2>this is users3 component</h2>
      <div>
        {
          
        }
      </div>
    </div>
  );
};

export default Users3;