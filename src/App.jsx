
import { useState } from 'react';
import Header from './components/Header.jsx';
import Board from './components/Board.jsx';
import ApplicationForm from './components/ApplicationForm.jsx';
import './index.css';

const statuses = ['Applied', 'Interview', 'Offer', 'Rejected'];

function App() {
    const [apps, setApps] = useState([]);
    const [search, setSearch] = useState('');
    const [priority, setPriority] = useState('all');

    function addApplication(app) {
        const duplicate = apps.some(
            item =>
                item.company.toLowerCase() === app.company.toLowerCase() &&
                item.role.toLowerCase() === app.role.toLowerCase()
        );

        if (duplicate) {
            return 'This company and role already exist!';
        }

        setApps([
            ...apps,
            {
                ...app,
                id: crypto.randomUUID(),
                status: 'Applied'
            }
        ]);

        return '';
    }

    function moveApplication(id, newStatus) {
        setApps(
            apps.map(app =>
                app.id === id
                    ? { ...app, status: newStatus }
                    : app
            )
        );
    }

    const filteredApps = apps.filter(app => {
        const searchTerm = search.toLowerCase();

        const matchesSearch =
            app.company.toLowerCase().includes(searchTerm) ||
            app.role.toLowerCase().includes(searchTerm);

        const matchesPriority =
            priority === 'all' || app.priority === priority;

        return matchesSearch && matchesPriority;
    });

    const interviews = apps.filter(
        app => app.status === 'Interview'
    ).length;

    const offers = apps.filter(
        app => app.status === 'Offer'
    ).length;

    return (
        <main className="app">
            <Header
                total={apps.length}
                interviews={interviews}
                offers={offers}
            />

            <ApplicationForm onAdd={addApplication} />

            <section className="filters">
                <input
                    type="text"
                    placeholder="Search by company or role"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <label htmlFor="priority">
                    Filter by priority:
                </label>

                <select
                    id="priority"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="all">All priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </section>

            <Board
                statuses={statuses}
                applications={filteredApps}
                onMove={moveApplication}
            />
        </main>
    );
}

export default App;

