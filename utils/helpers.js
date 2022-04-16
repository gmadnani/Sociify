module.exports = {
  upper_case: (str) => {
    return str.toUpperCase();
  },
  privacy_check: (priv) => {
    if (priv === "public") {
      return true;
    }
  },
};
