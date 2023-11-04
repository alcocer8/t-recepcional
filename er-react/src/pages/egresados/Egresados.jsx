import { useEffect, useState } from "react";
import { SortableTable } from "../../componets/SortableTable";

import { search } from "../../funciones/app";
import Pagination from "../../componets/Pagination";
import TREgresados from "./TREgresados";

function Egresados() {
  const URL_API = "http://localhost:8000/api/egresados";

  // Buscar datos
  const [egresados, setEgresados] = useState([]);
  const [query, setQuery] = useState("");

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  useEffect(() => {
    fetch(URL_API)
      .then((resp) => resp.json())
      .then((json) => setEgresados(json.egresados));
  }, []);

  // Llaves por cuales buscar
  const keys = ["nombre", "correo", "a_paterno", "a_materno"];

  // Contenido del encabezado
  const TABLE_HEAD = ["Matricula", "Nombre", "Apellido Paterno", "Apellido Materno", "Correo", "Telefono", ""];

  // Paginacion
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const n_egresados = egresados.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="my-10">
      <SortableTable
        ITERATOR_ELEMENT={
          <TREgresados
            TABLE_ROWS={search(n_egresados, keys, query)}
            PAGE_LINK="/egresados/"
          />
        }
        PAGE_LINK="/egresados/"
        PAGE_TITLE="Egresados"
        TABLE_HEAD={TABLE_HEAD}
        PAGINATION={
          <Pagination
            totalPosts={egresados.length}
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

export default Egresados;
