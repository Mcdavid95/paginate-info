
/**
 * @function calculateLimitAndOffset
 * @param {number} currentPage page number to get
 * @param {number} pageLimit number of items per page/request
 * @returns {object} returns object containing limit and offset
 */
const calculateLimitAndOffset = (currentPage, pageLimit = 20) => {
  const offset = (currentPage ? Number(currentPage) - 1 : 0) * Number(pageLimit);
  const limit = Number(pageLimit);
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
  const meta = {
    currentPage: Number(currentPage) || 1,
    pageCount: Math.ceil(count / Number(pageLimit)),
    pageSize: rows.length,
    count
  };
  return meta;
};

module.exports = { calculateLimitAndOffset, paginate }
