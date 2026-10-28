

import ApplicationCard from './ApplicationCard.jsx';

function Column({ status, applications, onMove }) {
    return (
        <section className="column">
            <h2>{status} ({applications.length})</h2>

            {applications.length === 0 ? (
                <p>Nothing here yet.</p>
            ) : (
                applications.map(app => (
                    <ApplicationCard
                        key={app.id}
                        application={app}
                        onMove={onMove}
                    />
                ))
            )}
        </section>
    );
}

export default Column;
