import update from 'immutability-helper';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getIssues } from 'redux/selectors';
import { setIssues } from 'redux/issuesSlice';
import { ItemIssues } from 'components/ItemIssues/ItemIssues';
export const Column = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getIssues);
  console.log(columns);
  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const columnsSlice = prevCards =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        });
      const column = columnsSlice(columns[0].issues);
      console.log('column', column);
      dispatch(setIssues(column));
    },
    [columns, dispatch]
  );
  const renderItem = useCallback(
    (list, index) => {
      return (
        <ItemIssues
          key={list.number}
          index={index}
          id={list.number}
          data={list}
          moveItem={moveItem}
        />
      );
    },
    [moveItem]
  );
  return (
    <>
      {columns.map(column => (
        <div key={column.id}>
          <h2>{column.title}</h2>
          <ul key={column.id}>
            {column.issues.map((list, i) => renderItem(list, i))}
          </ul>
        </div>
      ))}
    </>
  );
};
