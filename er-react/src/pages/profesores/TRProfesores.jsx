import {
  Typography,
  Avatar,
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

function TRProfesores({ TABLE_ROWS, PAGE_LINK }) {
  return (
    <tbody>
      {TABLE_ROWS.map(({ image, name, email }, index) => {
        const isLast = index === TABLE_ROWS.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={index}>
            <td className={classes}>
              <div className="flex items-center gap-3">
                <Avatar src={image} alt={name} size="sm" />
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                  >
                    {email}
                  </Typography>
                </div>
              </div>
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

TRProfesores.propTypes = {
    TABLE_ROWS: PropTypes.array,
    PAGE_LINK: PropTypes.string
}

TRProfesores.defaultProps = {
    TABLE_ROWS: [],
    PAGE_LINK: "",
}

export default TRProfesores;