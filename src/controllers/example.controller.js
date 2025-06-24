// GET example
export const getExample = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API!",
  });
};

// POST example
export const postExample = (req, res) => {
  const { name, email, age } = req.body;

  res.status(201).json({
    success: true,
    message: "Data received successfully",
    data: { name, email, age },
  });
};