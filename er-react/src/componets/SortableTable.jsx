import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export function SortableTable({
  PAGE_LINK,
  PAGE_TITLE,
  TABLE_HEAD,
  ITERATOR_ELEMENT,
  PAGINATION,
  func
}) {
  return (
    <Card className="w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Lista de {PAGE_TITLE}es
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Ve toda la infomacion de los {PAGE_TITLE}es
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Link to={PAGE_LINK + "add"}>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir{" "}
                {PAGE_TITLE}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" 
              />}
              onChange={e => func(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          {ITERATOR_ELEMENT}
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
  
        {PAGINATION}
      </CardFooter>
    </Card>
  );
}

SortableTable.PropTypes = {
  TABLE_HEAD: PropTypes.array,
  ITERATOR_ELEMENT: PropTypes.element,
  PAGE_TITLE: PropTypes.string,
  PAGE_LINK: PropTypes.string,
  func: PropTypes.func
};

SortableTable.defaultProps = {
  TABLE_HEAD: [],
  ITERATOR_ELEMENT: <tbody></tbody>,
  PAGE_TITLE: "",
  PAGE_LINK: "",
  func: () => {}
}