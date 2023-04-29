import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { ItemIssues } from 'components/ItemIssues/ItemIssues';

const style = {
  width: 400,
};

export const ToDoIssues = () => {
  // const moveItem = useCallback((dragIndex, hoverIndex) => {
  //   console.log(dragIndex);
  // });
  // const renderItem = useCallback((data, index) => {
  //   return (
  //     <ItemIssues
  //       key={data.number}
  //       data={data}
  //       index={index}
  //       moveItem={moveItem}
  //     />
  //   );
  // }, []);
  // return (
  //   <>
  //     <h2>To Do</h2>
  //     {data && (
  //       <div style={style}>{data.map((issue, i) => renderItem(issue, i))}</div>
  //     )}
  //   </>
  // );
};

// console.log('TODO', data);
// console.log(error);
// console.log(isLoading);
// return (
//   <>
//     <h2>To Do</h2>
//     {isLoading && <p>Loading.....</p>}
//     {data && <ItemIssues data={data} />}
//   </>
// );
