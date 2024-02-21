import React, { useState } from 'react'

const useTotalTask = () => {
 const [totalTask ,setTotalTask]= useState(0);

 return { totalTask}
}

export default useTotalTask