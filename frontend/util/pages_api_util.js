export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `/api/pages`
  });
};
