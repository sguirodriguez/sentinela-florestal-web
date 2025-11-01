import EditAdress from '~/pages/edit-adress/edit-adress';

export function meta() {
  return [
    { title: 'Configurações - Sentinela Florestal' },
    { name: 'description', content: 'Configurações do usuário' },
  ];
}

export default function EditAdressRoute() {
  return <EditAdress/>;
}
