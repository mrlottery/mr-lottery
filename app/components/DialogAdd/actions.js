
import { CHANGE_NAME,CHANGE_DESC} from './constants';
import { func } from 'prop-types';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}

export function changeDesc(desc) {
    return {
      type: CHANGE_DESC,
      desc,
    };
  }