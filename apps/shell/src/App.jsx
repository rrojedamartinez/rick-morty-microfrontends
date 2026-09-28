import { lazy, Suspense } from "react";

import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

const Characters = lazy(() => {
  return import("characters/Characters");
});

const CharacterDetail = lazy(() => {
  return import("characterDetail/CharacterDetail");
});

function CharactersPage() {
  const navigate = useNavigate();

  function openCharacter(characterId) {
    navigate(`/character/${characterId}`);
  }

  return <Characters onSelectCharacter={openCharacter} />;
}

function CharacterDetailPage() {
  const { id } = useParams();

  return (
    <>
      <Link to="/" className="btn btn-link ps-0 mb-3">
        Regresar
      </Link>
      <CharacterDetail characterId={id} />
    </>
  );
}

function NotFoundPage() {
  return (
    <div className="alert alert-warning">
      <p>La página no existe.</p>
      <Link to="/" className="btn btn-dark">
        Ir al inicio
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />

      <div className="container py-4 flex-grow-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<CharactersPage />} />

            <Route path="/character/:id" element={<CharacterDetailPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
