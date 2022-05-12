const getUsers = (req, res) => {
  console.log("desde el controller");
  res.send.json({ url: "desde controller user get" });
};

export { getUsers };
