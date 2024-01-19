import React from "react";


export const Box: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = (props) => {
  return (
      <div
          style={{
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03),0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
            borderRadius: 10,
            padding: 20,
            margin: 20,
          }}
      >
        {props.children}
      </div>
  );
};