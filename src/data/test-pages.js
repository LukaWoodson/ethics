export const TestPages = () => {
  const pages = [];
  const COUNT = 30;
  for (let i = 0; i < COUNT; i++) {
    pages.push({
      isFlipped: false,
      id: i,
      zIndex: COUNT - i,
    });
  }
  return pages;
};
