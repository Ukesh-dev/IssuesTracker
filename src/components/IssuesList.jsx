import {defaultIssue} from '../helpers/defaultData'
import {useEffect, useState} from 'react'
import { IssueItem } from './IssueItem'

export default function IssuesList({labels, status}) {
  const [searchValue, setsearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const issuesQuery = defaultIssue
  // TODO need a api endpoint
  useEffect(() => {
    if (searchValue.length > 0) {
      issuesQuery.filter(issues => {
        issues.title.toLowerCase() === searchValue.toLowerCase()
      })
    }
  }, [searchValue])
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          setsearchValue(event.target.elements.search.value)
        }}
      >
        <label htmlFor='search'>Search Issues</label>
        <input
          type='search'
          placeholder='Search'
          name='search'
          id='search'
          onChange={event => {
            if (event.target.value.length === 0) {
              setSearchValue('')
            }
          }}
        />
      </form>
      {/* <h2>
        Issues List {issuesQuery.fetchStatus === 'fetching' ? <Loader /> : null}
      </h2> */}
      {/* {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : issuesQuery.isError ? (
        <p>{issuesQuery.error.message}</p>
      ) : searchQuery.fetchStatus === 'idle' &&
        searchQuery.isLoading === true ? ( */}
      {issuesQuery && !searchValue ? (
        <>
          <ul className='issues-list'>
            {issuesQuery.map(issue => (
              <IssueItem
                key={issue.id}
                title={issue.title}
                number={issue.number}
                assignee={issue.assignee}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Search Results</h2>
          {searchResults.length === 0 ? (
            <p>No Data Found</p>
          ) : (
            <>
              <p>{issuesQuery.count} Results</p>
              <ul className='issues-list'>
                {issuesQuery.items.map(issue => (
                  <IssueItem
                    key={issue.id}
                    title={issue.title}
                    number={issue.number}
                    assignee={issue.assignee}
                    commentCount={issue.comments.length}
                    createdBy={issue.createdBy}
                    createdDate={issue.createdDate}
                    labels={issue.labels}
                    status={issue.status}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  )
}
