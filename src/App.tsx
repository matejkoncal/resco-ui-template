import '@resconet/jsbridge';
import { useEffect, useState } from 'react';

type ClientInfo = {
  status: 'preview' | 'connecting' | 'connected' | 'error';
  message: string;
  version?: string;
};

const previewInfo: ClientInfo = {
  status: 'preview',
  message: 'Browser preview. Open the deployed page in a Resco client to use JSBridge.',
};

export default function App() {
  const [clientInfo, setClientInfo] = useState<ClientInfo>(() =>
    MobileCRM.bridge
      ? { status: 'connecting', message: 'Reading Resco client configuration…' }
      : previewInfo,
  );

  useEffect(() => {
    if (!MobileCRM.bridge) return;

    // Replace this example with the Resco data your UI needs.
    MobileCRM.Configuration.requestObject(
      (configuration) => {
        setClientInfo({
          status: 'connected',
          message: `Connected to Resco ${MobileCRM.bridge.platform}`,
          version: configuration.applicationVersion,
        });
      },
      (error) => {
        setClientInfo({ status: 'error', message: `JSBridge: ${error}` });
      },
    );
  }, []);

  function showBridgeAlert() {
    if (MobileCRM.bridge) {
      MobileCRM.bridge.alert('Hello from your React UI!');
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand" aria-label="Resco UI starter">
          <span className="brand-mark">R</span>
          <span>Resco UI starter</span>
        </div>
        <span className="topbar-label">React + JSBridge</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow">YOUR OFFLINE HTML APP</div>
        <h1 id="hero-title">Make this space your own.</h1>
        <p>
          A small starting point for a custom Resco screen. Edit the React components,
          push your changes, then release the branch from App Builder in Studio.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={showBridgeAlert} disabled={!MobileCRM.bridge}>
            Try JSBridge alert <span aria-hidden="true">↗</span>
          </button>
          <span className="hero-hint">
            {MobileCRM.bridge ? 'Opens a native Resco dialog' : 'Available inside a Resco client'}
          </span>
        </div>
      </section>

      <section className="content" aria-label="Starter information">
        <article className="status-card">
          <div className="card-heading">
            <div>
              <span className="section-label">JSBRIDGE STATUS</span>
              <h2>Client connection</h2>
            </div>
            <span className={`status-dot status-dot--${clientInfo.status}`} aria-hidden="true" />
          </div>
          <p role="status">{clientInfo.message}</p>
          {clientInfo.version && <span className="version">App version {clientInfo.version}</span>}
        </article>

        <article className="next-card">
          <span className="section-label">START BUILDING</span>
          <h2>Three places to start</h2>
          <ol>
            <li>
              <strong>Design your screen</strong>
              <span>Replace the sample layout in <code>src/App.tsx</code>.</span>
            </li>
            <li>
              <strong>Use client data</strong>
              <span>Call JSBridge in response to your UI and handle errors.</span>
            </li>
            <li>
              <strong>Ship an update</strong>
              <span>Release your GitHub branch from App Builder in Studio.</span>
            </li>
          </ol>
        </article>
      </section>

      <footer>Built for Resco Offline HTML · Ready for your next idea</footer>
    </main>
  );
}
