import { formatTimestamp } from "../../utils/format";

const VersionCard = ({ version }) => {
  const {
    id,
    timestamp,
    addedWords = [],
    removedWords = [],
    oldLength,
    newLength,
  } = version;

  const delta = newLength - oldLength;

  return (
    <article className="version-card">
      <header className="version-card-header">
        <div>
          <h3 className="version-id">Version {id.slice(0, 8)}</h3>
          <p className="version-timestamp">
            {formatTimestamp(timestamp)}
          </p>
        </div>
        <span
          className={
            "version-delta " +
            (delta > 0 ? "delta-positive" : delta < 0 ? "delta-negative" : "")
          }
        >
          {delta > 0 && `+${delta} chars`}
          {delta === 0 && "0 change"}
          {delta < 0 && `${delta} chars`}
        </span>
      </header>

      <div className="version-changes">
        <div className="change-block">
          <span className="change-label change-label-added">Added</span>
          {addedWords.length === 0 ? (
            <span className="change-empty">None</span>
          ) : (
            <div className="change-pill-row">
              {addedWords.map((w, i) => (
                <span key={i} className="pill pill-added">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="change-block">
          <span className="change-label change-label-removed">
            Removed
          </span>
          {removedWords.length === 0 ? (
            <span className="change-empty">None</span>
          ) : (
            <div className="change-pill-row">
              {removedWords.map((w, i) => (
                <span key={i} className="pill pill-removed">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="version-footer">
        <span className="version-meta">
          Old length: <strong>{oldLength}</strong>
        </span>
        <span className="version-meta">
          New length: <strong>{newLength}</strong>
        </span>
      </footer>
    </article>
  );
};

export default VersionCard;
