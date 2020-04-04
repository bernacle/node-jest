module.exports = (sequilize, DataTypes) => {
  const User = sequilize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
  });

  return User;
};
