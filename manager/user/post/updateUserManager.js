const updateUserManager = async (updateUser) => {
  try {
    return await updateUser.save();
  } catch (error) {
    return error;
  }
};

export { updateUserManager };
