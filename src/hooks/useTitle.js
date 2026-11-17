import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} – Dera Baba Bhuman Shah Ji` : 'Dera Baba Bhuman Shah Ji – Sangar Sarista (Sirsa)';
  }, [title]);
}
