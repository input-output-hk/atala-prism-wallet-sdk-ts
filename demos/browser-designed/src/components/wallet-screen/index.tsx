import {ReactElement} from 'react';

export default function WalletScreen({children}: { children: ReactElement }) {
  return (
      <div style={{position: "absolute", height: "100%"}}>
        {children}
      </div>
  );
}