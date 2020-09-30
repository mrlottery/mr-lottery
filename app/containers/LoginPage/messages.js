/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'MR LOTTERY!',
  },
  join: {
    id: `${scope}.join`,
    defaultMessage: 'Join To A Game',
  },
});
