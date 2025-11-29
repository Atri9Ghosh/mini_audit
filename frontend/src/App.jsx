import AppLayout from "./components/layout/AppLayout";
import ContentEditor from "./components/editor/ContentEditor";
import VersionHistory from "./components/history/VersionHistory";
import useVersions from "./hooks/useVersions";

function App() {
  const {
    text,
    setText,
    versions,
    loading,
    saving,
    error,
    saveVersion,
  } = useVersions();

  return (
    <AppLayout>
      <div className="app-grid">
        <section className="editor-section">
          <ContentEditor
            value={text}
            onChange={setText}
            onSave={saveVersion}
            saving={saving}
          />
          {error && <p className="error-text">⚠ {error}</p>}
        </section>

        <section className="history-section">
          <VersionHistory versions={versions} loading={loading} />
        </section>
      </div>
    </AppLayout>
  );
}

export default App;
