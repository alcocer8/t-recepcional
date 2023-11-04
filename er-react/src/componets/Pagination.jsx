import { Button } from "@material-tailwind/react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2">
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            variant="outlined"
            size="sm"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
