import { defaultUsers } from '../helpers/defaultData';
import { relativeDate } from '../helpers/relativeDate';

export function Comment({ comment, createdBy, createdDate }) {
  const userQuery = defaultUsers[0];

  return (
    // <div>
    <div className='comment'>
      <img src={userQuery.profilePictureUrl} alt='Commenter' />
      <div>
        <div className='comment-header'>
          <span>{userQuery.name}</span> commented{' '}
          <span>{relativeDate(createdDate)}</span>
        </div>
        <div className='comment-body'>{comment}</div>
      </div>
    </div>
    // </div>
  );
}
