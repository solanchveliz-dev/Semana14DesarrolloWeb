import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary-text mb-2">
        Error 404
      </p>
      <h1 className="text-4xl font-extrabold text-ink mb-4">Página no encontrada</h1>
      <p className="text-muted mb-8">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
