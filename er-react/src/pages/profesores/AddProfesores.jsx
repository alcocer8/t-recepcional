import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import InputForm from "../../componets/InputForm";

export function AddProfesores() {
  return (
    <Card
      className="container mx-auto items-center mt-10"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Añadir Profesor
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingrese los datos del profesor
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <InputForm label="Nombre" type="text" placeholder="Nombre" />
          <InputForm
            label="Apellido Paterno"
            type="text"
            placeholder="Apellido Paterno"
          />
          <InputForm
            label="Apellido Materno"
            type="text"
            placeholder="Apellido Materno"
          />
          <InputForm
            label="Correo Electronico"
            type="email"
            placeholder="Correo Electronico"
          />
          
        </div>
        <Button className="mt-6" fullWidth>
          Crear Profesor
        </Button>
        
      </form>
    </Card>
  );
}
