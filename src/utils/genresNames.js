const genresNames = (genres) => {
  const genresName = genres?.map((genre) => genre?.name);
  return genresName?.reduce((acc, curr) => `${acc}, ${curr}`);
};

export default genresNames;
