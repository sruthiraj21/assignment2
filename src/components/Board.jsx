import Column from './Column.jsx';
function Board({
    statuses,
    applications,
    onMove
}) {
    return (
        <section className="board">
            {statuses.map(status => {
                const columnApps = applications.filter(
                    app => app.status === status,
                );

                return (
                    <Column
                        key={status}
                        status={status}
                        applications={columnApps}
                        onMove={onMove}
                    />
                );
            })}
        </section>
    );
}

export default Board;
