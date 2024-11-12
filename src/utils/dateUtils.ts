export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const isWithinHours = (date: string | Date, hours: number): boolean => {
  const now = new Date();
  const compareDate = new Date(date);
  const diffInHours = Math.abs(now.getTime() - compareDate.getTime()) / 36e5;
  return diffInHours <= hours;
};

export const getTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const compareDate = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - compareDate.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};