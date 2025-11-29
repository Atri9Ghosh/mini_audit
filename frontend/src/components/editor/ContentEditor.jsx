const ContentEditor = ({ value, onChange, onSave, saving }) => {
  const handleSubmit = () => {
    if (!value.trim()) return;
    onSave();
  };

  return (
    <div className="card editor-card">
      <div className="card-header">
        <h2 className="card-title">Content Editor</h2>
        <p className="card-subtitle">
          Type or paste text here. Each time you save, a new version will be
          recorded and diffed against the previous one.
        </p>
      </div>

      <div className="card-body">
        <textarea
          className="editor-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start typing here..."
        />

        <div className="editor-footer">
          <span className="editor-charcount">
            {value.length} characters
          </span>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={saving || !value.trim()}
          >
            {saving ? "Saving..." : "Save Version"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
