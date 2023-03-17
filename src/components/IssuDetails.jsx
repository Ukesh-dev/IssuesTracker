import {useQueries} from '@tanstack/react-query'
import {GoIssueClosed, GoIssueOpened} from 'react-icons/go'
import {useParams} from 'react-router-dom'
import {
  defaultComments,
  defaultIssue,
  possibleStatus,
} from '../helpers/defaultData'
import {relativeDate} from '../helpers/relativeDate'
import {Comment} from './Comment'

export const IssueNumber = ({
  title,
  number,
  status = 'todo',
  createdBy,
  createdDate,
  comments,
}) => {
  const statusObject = possibleStatus.find(pstatus => pstatus.id === status)
  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={
            status === 'done' || status === 'cancelled' ? 'closed' : 'open'
          }
        >
          {status === 'done' || status === 'cancelled' ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusObject?.label}
        </span>
        <span className='created-by'>u_1</span>
        opened this issue {relativeDate(createdDate)} . {comments.length}{' '}
        comments
      </div>
    </header>
  )
}
export default function IssueDetails() {
  const {number} = useParams()
  const issueQuery = defaultIssue[0]
  const issueComments = defaultComments

  return (
    <div className='issue-details'>
      <IssueNumber {...issueQuery} />
      <main>
        <section>
          {issueComments &&
            issueComments.map(comments => (
              <Comment
                key={comments.id}
                comment={comments.comment}
                createdBy={comments.createdBy}
                createdDate={comments.createdDate}
              />
            ))}
        </section>
        <aside></aside>
      </main>
    </div>
  )
}
