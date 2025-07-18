const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong!',
    error: err.message || 'Internal Server Error'
  });
};

export default errorHandler;