import Settings from '~/pages/settings/settings';

export function meta() {
  return [
    { title: 'Configurações - Sentinela Florestal' },
    { name: 'description', content: 'Configurações do usuário' },
  ];
}

export default function SettingsRoute() {
  return <Settings />;
}
