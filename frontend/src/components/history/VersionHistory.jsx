import VersionCard from "./VersionCard";

const VersionHistory = ({ versions, loading }) => {
  return (
    <div className="card history-card">
      <div className="card-header">
        <h2 className="card-title">Version History</h2>
        <p className="card-subtitle">
          Each version shows what changed compared to the previous save.
        </p>
      </div>

      <div className="card-body history-list">
        {loading && <p className="history-empty">Loading versions...</p>}

        {!loading && versions.length === 0 && (
          <p className="history-empty">No versions saved yet.</p>
        )}

        {!loading &&
          versions.map((v) => <VersionCard key={v.id} version={v} />)}
      </div>
    </div>
  );
};

export default VersionHistory;
