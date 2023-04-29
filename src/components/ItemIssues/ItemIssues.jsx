import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { ItemTypes } from 'ItemTypes';

// const style = {
//   border: '1px dashed gray',
//   padding: '0.5rem 1rem',
//   marginBottom: '.5rem',
//   backgroundColor: 'white',
//   cursor: 'move',
// };

export const ItemIssues = ({ data, id, index, moveItem }) => {
  const ref = useRef(null);
  const {
    number,
    created_at,
    title,
    user: { login },
  } = data;
  const [drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: () => console.log('Element dropped!'),
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      console.log('dragindex', dragIndex);
      console.log('hoverindex', hoverIndex);
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [drag] = useDrag({
    type: ItemTypes.ITEM,
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref}>
      <h3>{title}</h3>
      <p>#{number}</p>
      <p>
        {created_at} by {login}
      </p>
    </div>
  );
};

// return (
//   <div ref={drop}>
//     <ul>
//       {data.map(({ number, created_at, title, user: { login } }) => (
//         <div ref={drag}>
//           <li key={number}>

//           </li>
//         </div>
//       ))}
//     </ul>
//   </div>
// );
// style={{ ...style, opacity }} data-handler-id={handlerId}
