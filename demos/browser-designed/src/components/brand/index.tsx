import {Link} from 'react-router-dom';

export default function Brand() {
  return (
      <Link to="/" style={{paddingLeft: "2rem"}}>
        <img src="/logo.svg" alt="atala prism"/>
      </Link>
  );
}