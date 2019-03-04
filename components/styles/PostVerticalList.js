import styled from 'styled-components';

export default styled.div`
  background-color: ${props => (props.primary ? '#ffffff' : '#000000')};
  max-width: 100px;
  padding-right: 10px;
  padding-left: 10px;
`;
