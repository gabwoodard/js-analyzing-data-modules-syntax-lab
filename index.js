/* Use DateJS globally */
require('datejs');

/**
 * combineUsers(...args)
 * - args: any number of arrays, each containing usernames (strings)
 * - returns: { users: string[], merge_date: string }
 *   where merge_date is in M/d/yyyy format (e.g., "9/20/2025")
 */
function combineUsers(...args) {
  // Step 2: initialize the return object
  const combinedObject = { users: [] };

  // Step 3 & 4: loop through args and merge into users using spread
  for (const arr of args) {
    if (Array.isArray(arr)) {
      combinedObject.users = [...combinedObject.users, ...arr];
    }
  }

  // Step 5: add today's date using DateJS in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return the object
  return combinedObject;
}

module.exports = { combineUsers };
