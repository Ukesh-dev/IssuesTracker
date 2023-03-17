import {useState} from 'react'
import IssuesList from '../components/IssuesList'
import LabelList from '../components/LabelList'
import {possibleStatus} from '../helpers/defaultData'
export default function Issues() {
  const [labels, setLabels] = useState([])
  const [status, setStatus] = useState('')
  return (
    <div>
      <main>
        <section>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={label =>
              setLabels(current =>
                current.includes(label)
                  ? current.filter(crrlabel => crrlabel !== label)
                  : current.concat(label),
              )
            }
          />
          <h3>Status</h3>
          <StatusSelect
            status={status}
            onChange={e => setStatus(e.target.value)}
          />
        </aside>
      </main>
    </div>
  )
}
function StatusSelect({value, onChagne}) {
  const possibleStatusValue = possibleStatus
  return (
    <select value={value} onChange={onChagne} className='status-select'>
      <option value=''>Select a Status to filter</option>
      {possibleStatusValue.map(status => (
        <option value={status.id} key={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  )
}
