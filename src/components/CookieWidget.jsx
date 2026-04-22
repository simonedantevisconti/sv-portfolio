import { useEffect, useState } from "react";
import { FaCookieBite, FaXmark } from "react-icons/fa6";

const CookieWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("cookie-consent");
    if (savedChoice) {
      setHasChoice(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setHasChoice(true);
    setIsOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setHasChoice(true);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        className="cookie-floating-btn"
        onClick={handleToggle}
        aria-label="Preferenze cookie"
      >
        <FaCookieBite />
      </button>

      {isOpen && (
        <div className="cookie-popup">
          <div className="cookie-popup-header">
            <h3>Utilizzo dei cookie</h3>
            <button
              type="button"
              className="cookie-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi"
            >
              <FaXmark />
            </button>
          </div>

          <p className="cookie-popup-text">
            Questo sito utilizza cookie per migliorare la tua esperienza. Continuando
            a navigare su questo sito, accetti il nostro utilizzo dei cookie.
          </p>

          <div className="cookie-popup-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-accept"
              onClick={handleAccept}
            >
              Accetta
            </button>

            <button
              type="button"
              className="cookie-btn cookie-btn-reject"
              onClick={handleReject}
            >
              Rifiuta
            </button>
          </div>

          {hasChoice && (
            <p className="cookie-choice-label">Preferenza salvata.</p>
          )}
        </div>
      )}
    </>
  );
};

export default CookieWidget;