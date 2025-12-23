import { useMemo, useState } from "react";

type PaginationType = {
  currentPage: number;
  totalPage: number;
};

type PageNode = {
  page: number | string;
  orbit: boolean;
};

const Pagination = (props: PaginationType) => {
  const { currentPage: initialCurrentPage, totalPage } = props;

  const [currentPage, setCurrentPage] = useState(initialCurrentPage);

  const calculatedTotalPage = useMemo((): PageNode[] => {
    let pages: PageNode[] = [];

    if (currentPage < 5) {
      const startPage = [
        { page: 1, orbit: false },
        { page: 2, orbit: false },
        { page: 3, orbit: false },
        { page: 4, orbit: false },
        { page: 5, orbit: false },
      ];
      const orbitPage = [{ page: "...", orbit: true }];

      const middlePages = [
        { page: Math.round(totalPage / 2), orbit: false },
        { page: Math.round(totalPage / 2) + 1, orbit: false },
      ];

      const lastPage = [
        { page: totalPage - 1, orbit: false },
        { page: totalPage, orbit: false },
      ];

      pages = [
        ...startPage,
        ...orbitPage,
        ...middlePages,
        ...orbitPage,
        ...lastPage,
      ];
    } else if (currentPage >= 5) {
      const startPage = [
        { page: 1, orbit: false },
        { page: 2, orbit: false },
      ];
      const orbitPage = [{ page: "...", orbit: true }];

      const middlePages = [
        { page: currentPage - 1, orbit: false },
        { page: currentPage, orbit: false },
        { page: currentPage + 1, orbit: false },
      ];

      const lastPage = [
        { page: totalPage - 1, orbit: false },
        { page: totalPage, orbit: false },
      ];

      pages = [
        ...startPage,
        ...orbitPage,
        ...middlePages,
        ...orbitPage,
        ...lastPage,
      ];
    }

    return pages || [];
  }, [currentPage, totalPage]);

  return (
    <div className="flex gap-2">
      <button className="px-2 py-1 rounded-md border bg-blue-600 w-9 h-9">
        {`<`}
      </button>
      {calculatedTotalPage.map((page) => (
        <button
          key={page.page}
          className={`px-2 py-1 rounded-md border w-9 h-9 cursor-pointer ${
            currentPage === page.page ? "bg-blue-400" : "bg-white-600"
          }`}
          onClick={() => {
            if (typeof page.page === "number") {
              setCurrentPage(page.page);
            }
          }}
          disabled={page.orbit}
        >
          {page.page}
        </button>
      ))}
      <button className="px-2 py-1 rounded-md border bg-blue-600 w-9 h-9">
        {`>`}
      </button>
    </div>
  );
};

export default Pagination;
