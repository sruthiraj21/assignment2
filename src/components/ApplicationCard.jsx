
function ApplicationCard({ application, onMove }) {
    const nextStatus = {
        Applied: 'Interview',
        Interview: 'Offer'
    };

    return (
        <article className="card">
            <h3>{application.company}</h3>
            <p>Role: {application.role}</p>
            <p>Applied on: {application.appliedOn}</p>
            <p>Priority: {application.priority}</p>
            <p>Status: {application.status}</p>

            {nextStatus[application.status] && (
                <button
                    type="button"
                    onClick={() =>
                        onMove(
                            application.id,
                            nextStatus[application.status]
                        )
                    }
                >
                    Move to {nextStatus[application.status]}
                </button>
            )}

            {application.status !== 'Rejected' && (
                <button
                    type="button"
                    onClick={() =>
                        onMove(application.id, 'Rejected')
                    }
                >
                    Reject
                </button>
            )}
        </article>
    );
}

export default ApplicationCard;
