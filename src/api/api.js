// the structure of api is listed in ./helpers/defaultData.js

//api endpoints
//fetch users
// fetch(`/api/users/${userId}`)

// fetch issues
// fetch('/api/issues)

//structure of the issue response
// export const defaultIssue = [
//   {
//     id: 'issue_1',
//     title: 'Test Issue',
//     number: 1,
//     status: 'inProgress',
//     assignee: 'u_2',
//     comments: ['comment_1'],
//     createdBy: 'u_1',
//     createdDate: new Date(),
//     labels: [{id: '1', name: 'bug', color: 'red'}],
//   },
// ]

//fetch single issues based on the number not id
// fetch(`api/issues/${issueNumber}`)

//fetch comments of the issue
// fetch(`/api/issues/${issueNumber}/comments`)

// searchQuery
// fetch(`/api/search/issues?q=${searchValue}`)
// Must be of structure
//  {
//   count: 20,
//   {
//     id: 'issue_1',
//     title: 'Test Issue',
//     number: 1,
//     status: 'inProgress',
//     assignee: 'u_2',
//     comments: ['comment_1'],
//     createdBy: 'u_1',
//     createdDate: new Date(),
//     labels: [{id: '1', name: 'bug', color: 'red'}],
//   },
//  }

// fetch labels
// fetch('/api/labels')

//filtering with labels and status
// fetch(`api/issues?labels[]=${label}&status=${status}`)

const api = () => {
  return {
    get: (url, config = {}) => fetch(url, config).then(res => res.json()),
  }
}

export const fetchUsers = userId => {
  return api.get(`${URLS.fetchUsers}${userId}`)
}
export const fetchLabelIssue = labels => {
  const issueQueryString = labels.map(label => `labels[]=${label}`).join('&')
  return api.get(`${URLS.fetchIssue}?${issueQueryString}`)
}
export const fetchLabelIssueWithStatus = (labels, status) => {
  const labelStaus = status ? `&status=${status}` : ''
  const issueQueryString = labels.map(label => `labels[]=${label}`).join('&')
  return api.get(`${URLS.fetchIssue}?${issueQueryString}${labelStaus}`)
}

export default api()
