/--- Start of MongoDB example --- /

/**
   * @function getAll
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Object} response object
   * @description gets all available results
   */
  const getAll = async (req, res) => {
    const {
      query: { currentPage, pageLimit }
    } = req;
    try {
      const count = await model.estimatedDocumentCount();
      const { limit, offset } = calculateLimitAndOffset(page, pageLimit);
      const rows = await model.find({})
        .limit(limit)
        .skip(offset);
      const meta = paginate(currentPage, count, rows, pageLimit);
      return handleServerResponse(res, 200, { rows, meta });
    } catch (error) {
      return handleServerError(res, error);
    }
  }
  /----End of MongoDB implementation---/




/** Start of PostgreSQL-SQL(sequelize) implementation**/

  /**
 * @function getAll
 * @param {Object} req - server request
 * @param {Object} res - server response
 * @returns {Object} - custom response
*/
const getAll = async (req, res) => {
  try {
    const {
      query: {
        currentPage, pageLimit
      }
    } = req;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageLimit);
    const { rows, count } = await model.findAndCountAll();
    const meta = paginate(currentPage, count, rows, pageLimit);
    return response(res, 200, 'success', { rows, meta });
  } catch (error) {
    return response(res, 500, 'error', serverError);
  }
};

/** End of PostgreSQL/SQL(sequelize) implementation */