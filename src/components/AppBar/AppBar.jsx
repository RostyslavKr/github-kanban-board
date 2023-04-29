import { Form } from 'components/Form/Form';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://api.github.com';
// const token = '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';
// axios.defaults.headers.common['Authorization'] = token;

// async function requestReposIssues(name) {
//   const res = await axios.get(`/repos/${name}/issues`);
//   console.log(res.data);
//   return res.data;
// }
// const requestReposIssues = name => {
//   fetch(`https://api.github.com/repos/${name}/issues`, {
//     headers: {
//       Accept: 'application/vnd.github.v3+json',
//       Authorization: `token ${token}`,
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// };

export const AppBar = () => {
  return (
    <header>
      <Form />
    </header>
  );
};
