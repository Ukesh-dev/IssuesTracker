import { defaultLabels } from '../helpers/defaultData';

export function Label({ label }) {
  const labelsQuery = defaultLabels.find(
    queryLable => queryLable.name === label.name
  );

  return <span className={`${label} ${label.color}`}>{labelsQuery.name}</span>;
}
