import { ColumnBase as Column, Validators } from 'ng-mazdik-lib';

export function getColumnsEspacios(): Column[] {
  const columnsEspacios: Column[] = [
    {
      title: 'Código',
      name: 'ID_ESPACIO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 175,
      type: 'text',
    },
    {
      title: 'Centro',
      name: 'ID_CENTRO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 125,
      type: 'text'
    },
    {
      title: 'Pabellón',
      name: 'COD_PABELLON',
      sortable: true,
      filter: true,
      frozen: true,
      width: 50,
      type: 'text'
    },
    {
      title: 'Planta',
      name: 'COD_PLANTA',
      sortable: true,
      filter: true,
      frozen: true,
      width: 50,
      type: 'text'
    },
    {
      title: 'Espacio',
      name: 'COD_ESPACIO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 70,
      type: 'text'
    },
    {
      title: 'Activo',
      name: 'ACTIVO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 50
    },  
    {
      title: 'Tipo',
      name: 'ID_TIPO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 100
    },
    {
      title: 'Descripción',
      name: 'DESCRIPCION',
      sortable: true,
      filter: true,
      frozen: true,
      width: 200,
      validatorFunc: Validators.get({ required: true, minLength: 2, maxLength:199, pattern: '^[a-zA-ZáÁéÉíÍóÓúÚ/.123456789ñÑ ]+$' }),
    },
    {
      title: 'Largo',
      name: 'LARGO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 70,
      type: 'number',
    },
    {
      title: 'Ancho',
      name: 'ANCHO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 70,
      type: 'number',
    },
    {
      title: 'Alto',
      name: 'ALTO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 70,
      type: 'number',
    },
    {
      title: 'Clima',
      name: 'COD_TIPO_CLIMA',
      sortable: true,
      filter: true,
      frozen: true,
      width: 60,
      type: 'text'
    },
    {
      title: 'Techo',
      name: 'COD_TIPO_TECHO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 60,
      type: 'text'
    },
    {
      title: 'Pared',
      name: 'COD_TIPO_PARED',
      sortable: true,
      filter: true,
      frozen: true,
      width: 60,
      type: 'text'
    },
    {
      title: 'Porc. Uso',
      name: 'PORC_US',
      sortable: true,
      filter: true,
      frozen: true,
      width: 60,
      type: 'number',
    },
    {
      title: 'Puertas',
      name: 'NPUERTAS',
      sortable: true,
      filter: true,
      frozen: true,
      width: 50,
      type: 'number',
    }
  ];
  return columnsEspacios;
}

export function getTreeColumns(): Column[] {
  return [
    {
      title: 'Node',
      name: 'node',
      frozen: true,
      width: 250,
    },
    {
      title: 'Name',
      name: 'name',
      editable: true,
      validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
      width: 250,
    },
    {
      title: 'Gender',
      name: 'gender',
      editable: true,
      type: 'radio',
      options: [
        { id: 'MALE', name: 'MALE' },
        { id: 'FEMALE', name: 'FEMALE' },
      ],
      width: 250,
    },
    {
      title: 'Cube_size',
      name: 'cube_size',
      editable: true,
      width: 250,
      type: 'number',
    },
    {
      title: 'Exp',
      name: 'exp',
      editable: true,
      width: 250,
    }
  ];
}