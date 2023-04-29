import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { queryIssues } from 'redux/querySlice';
import { fetchIssues } from 'redux/operations';
import { getQuery } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();

  const query = useSelector(getQuery);

  useEffect(() => {
    dispatch(fetchIssues(query));
  }, [query, dispatch]);
  const hanleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements.url.value;
    const formSlice = form.slice(19);
    dispatch(queryIssues(formSlice));
  };
  return (
    <form autoComplete="off" onSubmit={hanleSubmit}>
      <input type="text" name="url" placeholder="Enter repo URL" />
      <button>Load issues</button>
    </form>
  );
};
