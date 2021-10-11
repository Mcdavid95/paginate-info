
/** Calculates the offset for the query
 * @function calculateLimitAndOffset
 * @param {number} currentPage page number to get
 * @param {number} pageLimit number of items per page/request
 * @returns {object} returns object containing limit and offset
 */
 const calculateLimitAndOffset = (currentPage = 1, pageLimit = 20) => {
  const offset = (Math.round(currentPage) - 1) * Math.round(pageLimit);
  const limit = Math.round(pageLimit);
  return { offset, limit };
};

/**
 * @function paginate
 * @param {number} currentPage page number to get
 * @param {number} count total number of items
 * @param {array} rows items
 * @param {number} pageLimit number of items per page/request
 * @returns {object} return the meta for pagination
 */
const paginate = (currentPage, count, rows, pageLimit = 20) => {
  return rows ? {
    currentPage: Math.round(currentPage) || 1,
    pageCount: Math.ceil(count / Math.round(pageLimit)),
    pageSize: rows.length,
    count
  } : null;
};

module.exports = { calculateLimitAndOffset, paginate }
