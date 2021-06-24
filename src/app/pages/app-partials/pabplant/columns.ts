import { ColumnBase as Column, Validators } from 'ng-mazdik-lib';

export function getColumnsPabellones(): Column[] {
  const columnsPabellones: Column[] = [
    {
      title: 'Pabellón',
      name: 'ID_PABELLON',
      sortable: true,
      filter: true,
      frozen: true,
      width: 100,
      formHidden: true,
      type: 'number',
    },
    {
      title: 'Descripción',
      name: 'DESCRIPCION',
      sortable: true,
      filter: true,
      frozen: true,
      width: 200,
      validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
    },
    {
      title: 'Uso',
      name: 'COD_USO',
      sortable: true,
      filter: true,
      frozen: true,
      width: 200,
      validatorFunc: Validators.get({ required: true, minLength: 2, pattern: '^[a-zA-Z ]+$' }),
    },
    {
      title: 'Plantas',
      name: 'NPLANTAS',
      sortable: true,
      filter: true,
      frozen: true,
      width: 100,
      formHidden: true,
      type: 'number',
    },
    {
      title: 'Acciones',
      name: 'acciones',
      frozen: true,
      sortable: true,
      filter: true,
      type: 'radio',
      options: [
        { id: 'MALE', name: 'MALE' },
        { id: 'FEMALE', name: 'FEMALE' },
      ],
    }
  ];
  return columnsPabellones;
}

export function getColumnsPlantas(): Column[] {
  const columnsPlantas: Column[] = [
    { title: 'Pabellón', name: 'ID_PABELLON', width: 100, frozen: true, },
    { title: 'Planta', name: 'ID_PLANTA', width: 100, frozen: true, },
    { title: 'Nº Espacios', name: 'NESPACIOS', width: 100, frozen: true,},
    {
      title: 'Acciones',
      name: 'acciones',
      sortable: true,
      filter: true,
      frozen: true,
      type: 'radio',
      options: [
        { id: 'MALE', name: 'MALE' },
        { id: 'FEMALE', name: 'FEMALE' },
      ],
    }
  ];
  return columnsPlantas;
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