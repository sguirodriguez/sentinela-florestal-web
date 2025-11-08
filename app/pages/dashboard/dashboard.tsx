import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth-context';
import { Button, Header } from '../../components';
import { getEvents, type Event } from '../../services/events';

export function DashboardPage() {
  const { logout } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const data = await getEvents();
      setEvents(data);
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (
      statusLower.includes('pendente') ||
      statusLower.includes('aguardando')
    ) {
      return 'status-pending';
    }
    if (
      statusLower.includes('em andamento') ||
      statusLower.includes('processando')
    ) {
      return 'status-processing';
    }
    if (
      statusLower.includes('resolvido') ||
      statusLower.includes('concluído')
    ) {
      return 'status-resolved';
    }
    return 'status-default';
  };

  const getPriorityColor = (priority?: string) => {
    if (!priority) return 'priority-default';
    const priorityLower = priority.toLowerCase();
    if (priorityLower.includes('alta') || priorityLower.includes('high')) {
      return 'priority-high';
    }
    if (priorityLower.includes('média') || priorityLower.includes('medium')) {
      return 'priority-medium';
    }
    if (priorityLower.includes('baixa') || priorityLower.includes('low')) {
      return 'priority-low';
    }
    return 'priority-default';
  };

  const getImageSrc = (image: { base64: string; type: string }) => {
    try {
      let base64Data = image.base64.trim();

      if (base64Data.startsWith('data:')) {
        return base64Data.replace(/\s/g, '');
      }

      const cleanBase64 = base64Data.replace(/\s/g, '');

      let mimeType = image.type || 'image/jpeg';
      if (!mimeType.startsWith('image/')) {
        if (mimeType.includes('jpeg') || mimeType.includes('jpg')) {
          mimeType = 'image/jpeg';
        } else if (mimeType.includes('png')) {
          mimeType = 'image/png';
        } else if (mimeType.includes('gif')) {
          mimeType = 'image/gif';
        } else if (mimeType.includes('webp')) {
          mimeType = 'image/webp';
        } else {
          mimeType = 'image/jpeg';
        }
      }

      return `data:${mimeType};base64,${cleanBase64}`;
    } catch (error) {
      console.error('Erro ao processar imagem base64:', error);
      return '';
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const container = target.closest('.event-image');
    if (container) {
      container.classList.add('image-error');
    }
    target.style.display = 'none';
  };

  return (
    <div className="dashboard-page">
      <Header
        logo={<h1>Sentinela Florestal</h1>}
        actions={
          <Button variant="danger" size="sm" onClick={logout}>
            Sair
          </Button>
        }
      />

      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div className="dashboard-title-section">
              <h2>Dashboard</h2>
              <p>Visualize e gerencie os eventos florestais reportados</p>
            </div>
            <div className="dashboard-actions">
              <Button variant="danger" size="lg">
                Reportar Evento
              </Button>
              <Button variant="primary" size="lg">
                Filtros
              </Button>
            </div>
          </div>

          <div className="events-section">
            <h3 className="events-title">Eventos Reportados</h3>

            {isLoading ? (
              <div className="events-loading">
                <div className="spinner"></div>
                <p>Carregando eventos...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="events-empty">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
                <p>Nenhum evento encontrado</p>
                <Button variant="primary" size="md">
                  Reportar Primeiro Evento
                </Button>
              </div>
            ) : (
              <div className="events-grid">
                {events.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-card-header">
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-badges">
                        <span
                          className={`event-status ${getStatusColor(event.status)}`}
                        >
                          {event.status}
                        </span>
                        {event.priority && (
                          <span
                            className={`event-priority ${getPriorityColor(event.priority)}`}
                          >
                            {event.priority}
                          </span>
                        )}
                      </div>
                    </div>

                    {event.images && event.images.length > 0 && (
                      <div className="event-images">
                        {event.images.slice(0, 3).map((image) => {
                          const imageSrc = getImageSrc(image);
                          if (!imageSrc) return null;

                          return (
                            <div key={image.id} className="event-image">
                              <img
                                src={imageSrc}
                                alt={`Imagem do evento ${event.title}`}
                                loading="lazy"
                                onError={handleImageError}
                              />
                            </div>
                          );
                        })}
                        {event.images.length > 3 && (
                          <div className="event-image-more">
                            +{event.images.length - 3}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="event-content">
                      {event.description && (
                        <p className="event-description">{event.description}</p>
                      )}

                      <div className="event-details">
                        <div className="event-detail-item">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.77 0-2.35-1.97-2.84-3.66-3.25z"
                              fill="currentColor"
                            />
                          </svg>
                          <span>{formatDate(event.createdAt)}</span>
                        </div>

                        {event.category && (
                          <div className="event-detail-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>
                              {event.category.name || 'Sem categoria'}
                            </span>
                          </div>
                        )}

                        {event.city && event.state && (
                          <div className="event-detail-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>
                              {event.city}, {event.state}
                            </span>
                          </div>
                        )}
                      </div>

                      {event.user && (
                        <div className="event-user">
                          <span>Reportado por: {event.user.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
