/**
 *
 * Alert
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SweetAlert from 'sweetalert2-react';

function Alert() {
  var state = true;
  return (
    <div>
      <SweetAlert id="alert-validation"
        show={state}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => ({ state: true })}
        />
    </div>
  );
}

Alert.propTypes = {};

export default memo(Alert);
