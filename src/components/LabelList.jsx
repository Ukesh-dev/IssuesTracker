import {defaultLabels} from '../helpers/defaultData'

export default function LabelList({selected, toggle}) {
  console.log(selected)
  //TODO Comes from api
  const labelsquery = defaultLabels
  return (
    <div className='labels'>
      <h3>Labels</h3>
      <ul>
        {labelsquery.map(label => (
          <li key={label.id}>
            <button
              onClick={() => toggle(label.id)}
              className={`${label.color} ${
                selected.includes(label.id) ? 'selected' : ''
              } label`}
            >
              {label.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
