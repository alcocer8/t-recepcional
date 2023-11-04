import {
    Typography,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import { PencilIcon } from "@heroicons/react/24/outline";
  import PropTypes from 'prop-types'
  
  /*
  <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {date}
                </Typography>
              </td>
   */
  
  function TREgresados({ TABLE_ROWS, PAGE_LINK }) {
    return (
      <tbody>
        {TABLE_ROWS.map(({ matricula, nombre, a_paterno, a_materno, correo, telefono }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
          return (
            <tr key={index}>
              <td className={classes}>
                <div className="flex items-center gap-3">
                  {/* <Avatar src={image} alt={name} size="sm" /> */}
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {matricula}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {nombre}
                </Typography>
              </td>

              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {a_paterno}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {a_materno}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {correo}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {telefono}
                </Typography>
              </td>
  
              {/* <td className={classes}>
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={online ? "online" : "offline"}
                    color={online ? "green" : "blue-gray"}
                  />
                </div>
              </td> */}
  
              <td className={classes}>
                <Link to={PAGE_LINK + index}>
                  <Tooltip content="Editar">
                    <IconButton variant="text">
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  
  TREgresados.propTypes = {
      TABLE_ROWS: PropTypes.array,
      PAGE_LINK: PropTypes.string
  }
  
  TREgresados.defaultProps = {
      TABLE_ROWS: [],
      PAGE_LINK: "",
  }
  
  export default TREgresados;