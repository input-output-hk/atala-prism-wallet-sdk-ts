import styled from 'styled-components';


export const CredentialRecords = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  overflow: auto;
`;

export const CredentialOfferRecord = styled.div`
  margin: 0;
  padding: 2rem;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

export const CredentialIssuedRecord = styled.div`
  margin: 0;
  padding: 2rem;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

export const Select = styled.select`
  margin: 0;
  padding: 1rem;
`;