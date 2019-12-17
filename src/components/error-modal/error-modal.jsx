import React from 'react';
import {string, func} from 'prop-types';

const ErrorModal = ({errorMessage, onOk}) => (<div style={{
  position: `fixed`,
  width: `100vw`,
  height: `100vh`,
  backgroundColor: `rgba(0,0,0, .7)`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  zIndex: `1000`
}}>
  <div style={{
    height: `200px`,
    width: `300px`,
    backgroundColor: `white`,
    borderRadius: `5px`,
    padding: `10px`,
    overflow: `hidden`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`
  }}>
    <p style={{
      flexGrow: `1`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`
    }}>{errorMessage}</p>
    <button onClick={onOk} style={{
      width: `100px`,
      color: `white`,
      backgroundColor: `#4481c3`,
      borderRadius: `3px`,
      border: `0`
    }}>Ok</button>
  </div>
</div>);

ErrorModal.propTypes = {
  errorMessage: string,
  onOk: func
};

export default ErrorModal;
