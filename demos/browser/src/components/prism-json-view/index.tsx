import {JSONTree} from 'react-json-tree';
import jsonTreeTheme from '../../config/json-tree';

export default function PRISMJSONView({data}: { data: any }) {
  return (
      <JSONTree data={data} theme={jsonTreeTheme} hideRoot={true} invertTheme={true}
                shouldExpandNodeInitially={ab => true}/>
  );
}