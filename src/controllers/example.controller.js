export const getExample = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API!",
  });
};