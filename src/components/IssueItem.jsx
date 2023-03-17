import { Link } from 'react-router-dom';
import { GoIssueOpened, GoIssueClosed, GoComment } from 'react-icons/go';
import { relativeDate } from '../helpers/relativeDate';
import { defaultUsers } from '../helpers/defaultData';
import { Label } from "./Label";


export function IssueItem({
  key, title, number, assignee, commentCount, createdBy, createdDate, labels, status,
}) {
  const assigneeUser = defaultUsers[0].name;
  const createdByUser = defaultUsers[0].name;
  return (
    <li>
      <div>
        {status === 'done' || status === 'cancelled' ? (
          <GoIssueClosed style={{ color: 'red' }} />
        ) : (
          <GoIssueOpened style={{ color: 'green' }} />
        )}
      </div>
      <div className='issue-content'>
        <span>
          <Link to={`/issue/${number}`}>
            {title}
          </Link>
          {labels.map(label => (
            <Label label={label} />
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}{' '}
          {/* {createdByUser.isSuccess ? `by ${createdByUser.data.name}` : ''} */}
          {`by ${createdBy}`}
        </small>
      </div>
      {assignee ? <div>{assignee}</div> : null}
      <span className='comment-count'>
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
