import { createSlice } from '@reduxjs/toolkit';
import { fetchIssues } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState: {
    draggedItem: undefined,
    isLoading: false,
    error: null,
    lists: [
      {
        id: '0',
        title: 'To Do',
        issues: [
          {
            url: 'https://api.github.com/repos/facebook/react/issues/26660',
            repository_url: 'https://api.github.com/repos/facebook/react',
            labels_url:
              'https://api.github.com/repos/facebook/react/issues/26660/labels{/name}',
            comments_url:
              'https://api.github.com/repos/facebook/react/issues/26660/comments',
            events_url:
              'https://api.github.com/repos/facebook/react/issues/26660/events',
            html_url: 'https://github.com/facebook/react/pull/26660',
            id: 1673145770,
            node_id: 'PR_kwDOAJy2Ks5OlKHv',
            number: 26660,
            title:
              'chore[devtools/release-scripts]: update messages / fixed npm view com…',
            user: {
              login: 'hoxyq',
              id: 28902667,
              node_id: 'MDQ6VXNlcjI4OTAyNjY3',
              avatar_url:
                'https://avatars.githubusercontent.com/u/28902667?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/hoxyq',
              html_url: 'https://github.com/hoxyq',
              followers_url: 'https://api.github.com/users/hoxyq/followers',
              following_url:
                'https://api.github.com/users/hoxyq/following{/other_user}',
              gists_url: 'https://api.github.com/users/hoxyq/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/hoxyq/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/hoxyq/subscriptions',
              organizations_url: 'https://api.github.com/users/hoxyq/orgs',
              repos_url: 'https://api.github.com/users/hoxyq/repos',
              events_url: 'https://api.github.com/users/hoxyq/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/hoxyq/received_events',
              type: 'User',
              site_admin: false,
            },
            labels: [
              {
                id: 196858374,
                node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                name: 'CLA Signed',
                color: 'e7e7e7',
                default: false,
                description: null,
              },
              {
                id: 1775958285,
                node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                name: 'React Core Team',
                color: '9149d1',
                default: false,
                description: 'Opened by a member of the React Core Team',
              },
            ],
            state: 'open',
            locked: false,
            assignee: null,
            assignees: [],
            milestone: null,
            comments: 1,
            created_at: '2023-04-18T13:32:13Z',
            updated_at: '2023-04-18T16:33:55Z',
            closed_at: null,
            author_association: 'CONTRIBUTOR',
            active_lock_reason: null,
            draft: false,
            pull_request: {
              url: 'https://api.github.com/repos/facebook/react/pulls/26660',
              html_url: 'https://github.com/facebook/react/pull/26660',
              diff_url: 'https://github.com/facebook/react/pull/26660.diff',
              patch_url: 'https://github.com/facebook/react/pull/26660.patch',
              merged_at: null,
            },
            body: 'Some minor changes, observed while working on 24.7.5 release:\r\n- Updated numeration of text instructions\r\n- `reactjs.org` -> `react.dev`\r\n- Fixed using `npm view` command for node 16+, `publish-release` script currently fails if used with node 16+',
            reactions: {
              url: 'https://api.github.com/repos/facebook/react/issues/26660/reactions',
              total_count: 0,
              '+1': 0,
              '-1': 0,
              laugh: 0,
              hooray: 0,
              confused: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
            timeline_url:
              'https://api.github.com/repos/facebook/react/issues/26660/timeline',
            performed_via_github_app: null,
            state_reason: null,
          },
        ],
      },
      {
        id: '1',
        title: 'In Progress',
        issues: [
          {
            url: 'https://api.github.com/repos/facebook/react/issues/26660',
            repository_url: 'https://api.github.com/repos/facebook/react',
            labels_url:
              'https://api.github.com/repos/facebook/react/issues/26660/labels{/name}',
            comments_url:
              'https://api.github.com/repos/facebook/react/issues/26660/comments',
            events_url:
              'https://api.github.com/repos/facebook/react/issues/26660/events',
            html_url: 'https://github.com/facebook/react/pull/26660',
            id: 1673145770,
            node_id: 'PR_kwDOAJy2Ks5OlKHv',
            number: 26660,
            title:
              'chore[devtools/release-scripts]: update messages / fixed npm view com…',
            user: {
              login: 'hoxyq',
              id: 28902667,
              node_id: 'MDQ6VXNlcjI4OTAyNjY3',
              avatar_url:
                'https://avatars.githubusercontent.com/u/28902667?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/hoxyq',
              html_url: 'https://github.com/hoxyq',
              followers_url: 'https://api.github.com/users/hoxyq/followers',
              following_url:
                'https://api.github.com/users/hoxyq/following{/other_user}',
              gists_url: 'https://api.github.com/users/hoxyq/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/hoxyq/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/hoxyq/subscriptions',
              organizations_url: 'https://api.github.com/users/hoxyq/orgs',
              repos_url: 'https://api.github.com/users/hoxyq/repos',
              events_url: 'https://api.github.com/users/hoxyq/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/hoxyq/received_events',
              type: 'User',
              site_admin: false,
            },
            labels: [
              {
                id: 196858374,
                node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                name: 'CLA Signed',
                color: 'e7e7e7',
                default: false,
                description: null,
              },
              {
                id: 1775958285,
                node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                name: 'React Core Team',
                color: '9149d1',
                default: false,
                description: 'Opened by a member of the React Core Team',
              },
            ],
            state: 'open',
            locked: false,
            assignee: null,
            assignees: [],
            milestone: null,
            comments: 1,
            created_at: '2023-04-18T13:32:13Z',
            updated_at: '2023-04-18T16:33:55Z',
            closed_at: null,
            author_association: 'CONTRIBUTOR',
            active_lock_reason: null,
            draft: false,
            pull_request: {
              url: 'https://api.github.com/repos/facebook/react/pulls/26660',
              html_url: 'https://github.com/facebook/react/pull/26660',
              diff_url: 'https://github.com/facebook/react/pull/26660.diff',
              patch_url: 'https://github.com/facebook/react/pull/26660.patch',
              merged_at: null,
            },
            body: 'Some minor changes, observed while working on 24.7.5 release:\r\n- Updated numeration of text instructions\r\n- `reactjs.org` -> `react.dev`\r\n- Fixed using `npm view` command for node 16+, `publish-release` script currently fails if used with node 16+',
            reactions: {
              url: 'https://api.github.com/repos/facebook/react/issues/26660/reactions',
              total_count: 0,
              '+1': 0,
              '-1': 0,
              laugh: 0,
              hooray: 0,
              confused: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
            timeline_url:
              'https://api.github.com/repos/facebook/react/issues/26660/timeline',
            performed_via_github_app: null,
            state_reason: null,
          },
        ],
      },
      {
        id: '2',
        title: 'Done',
        issues: [
          {
            url: 'https://api.github.com/repos/facebook/react/issues/26660',
            repository_url: 'https://api.github.com/repos/facebook/react',
            labels_url:
              'https://api.github.com/repos/facebook/react/issues/26660/labels{/name}',
            comments_url:
              'https://api.github.com/repos/facebook/react/issues/26660/comments',
            events_url:
              'https://api.github.com/repos/facebook/react/issues/26660/events',
            html_url: 'https://github.com/facebook/react/pull/26660',
            id: 1673145770,
            node_id: 'PR_kwDOAJy2Ks5OlKHv',
            number: 26660,
            title:
              'chore[devtools/release-scripts]: update messages / fixed npm view com…',
            user: {
              login: 'hoxyq',
              id: 28902667,
              node_id: 'MDQ6VXNlcjI4OTAyNjY3',
              avatar_url:
                'https://avatars.githubusercontent.com/u/28902667?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/hoxyq',
              html_url: 'https://github.com/hoxyq',
              followers_url: 'https://api.github.com/users/hoxyq/followers',
              following_url:
                'https://api.github.com/users/hoxyq/following{/other_user}',
              gists_url: 'https://api.github.com/users/hoxyq/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/hoxyq/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/hoxyq/subscriptions',
              organizations_url: 'https://api.github.com/users/hoxyq/orgs',
              repos_url: 'https://api.github.com/users/hoxyq/repos',
              events_url: 'https://api.github.com/users/hoxyq/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/hoxyq/received_events',
              type: 'User',
              site_admin: false,
            },
            labels: [
              {
                id: 196858374,
                node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
                url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
                name: 'CLA Signed',
                color: 'e7e7e7',
                default: false,
                description: null,
              },
              {
                id: 1775958285,
                node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
                url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
                name: 'React Core Team',
                color: '9149d1',
                default: false,
                description: 'Opened by a member of the React Core Team',
              },
            ],
            state: 'open',
            locked: false,
            assignee: null,
            assignees: [],
            milestone: null,
            comments: 1,
            created_at: '2023-04-18T13:32:13Z',
            updated_at: '2023-04-18T16:33:55Z',
            closed_at: null,
            author_association: 'CONTRIBUTOR',
            active_lock_reason: null,
            draft: false,
            pull_request: {
              url: 'https://api.github.com/repos/facebook/react/pulls/26660',
              html_url: 'https://github.com/facebook/react/pull/26660',
              diff_url: 'https://github.com/facebook/react/pull/26660.diff',
              patch_url: 'https://github.com/facebook/react/pull/26660.patch',
              merged_at: null,
            },
            body: 'Some minor changes, observed while working on 24.7.5 release:\r\n- Updated numeration of text instructions\r\n- `reactjs.org` -> `react.dev`\r\n- Fixed using `npm view` command for node 16+, `publish-release` script currently fails if used with node 16+',
            reactions: {
              url: 'https://api.github.com/repos/facebook/react/issues/26660/reactions',
              total_count: 0,
              '+1': 0,
              '-1': 0,
              laugh: 0,
              hooray: 0,
              confused: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
            timeline_url:
              'https://api.github.com/repos/facebook/react/issues/26660/timeline',
            performed_via_github_app: null,
            state_reason: null,
          },
        ],
      },
    ],
  },
  extraReducers: builder => {
    builder.addCase(fetchIssues.pending, handlePending);
    builder.addCase(fetchIssues.rejected, handleRejected);
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.lists[0].issues = action.payload;
    });
  },
  reducers: {
    setIssues(state, action) {
      state.lists.issues = action.payload;
    },
  },
});

export const { setIssues } = issuesSlice.actions;
export const issuesReducer = issuesSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const issuesApi = createApi({
//   reducerPath: 'issues',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
//   endpoints: builder => ({
//     getReposIssues: builder.query({
//       query: name => `/repos/${name}/issues`,
//     }),
//   }),
// });

// export const { useGetReposIssuesQuery } = issuesApi;
