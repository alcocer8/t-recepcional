import { useEffect, useState } from "react";
import { SortableTable } from "../../componets/SortableTable";
import TableRow from "../../componets/TableRow";
import { search } from "../../funciones/app";
import Pagination from "../../componets/Pagination";

function Profesores() {
  const URL_API = "https://freetestapi.com/api/v1/teachers";

  // Buscar datos
  const [profesores, setProfesores] = useState([]);
  const [query, setQuery] = useState("");

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    fetch(URL_API)
      .then((resp) => resp.json())
      .then((json) => setProfesores(json));
  }, []);

  // Llaves por cuales buscar
  const keys = ["name", "email"];

  // Contenido del encabezado
  const TABLE_HEAD = ["Nombre", "Apellido", "Email", "Telefono", ""];

  // Paginacion
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const n_profesores = profesores.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="my-10">
      <SortableTable
        ITERATOR_ELEMENT={
          <TableRow
            TABLE_ROWS={search(n_profesores, keys, query)}
            PAGE_LINK="/profesores/"
          />
        }
        PAGE_LINK="/profesores/"
        PAGE_TITLE="Profesor"
        TABLE_HEAD={TABLE_HEAD}
        PAGINATION={
          <Pagination
            totalPosts={profesores.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        }
        func={setQuery}
      />
    </div>
  );
}

export default Profesores;
