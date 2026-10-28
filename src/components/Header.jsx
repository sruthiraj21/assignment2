export default function Header({ total, interviews, offers }) {
    return (
        <header className="header">
            <h1>Job Application Tracker</h1>
            <p>Total Applications: {total}</p>
            <p>Interviews: {interviews}</p>
            <p>Offers: {offers}</p>
        </header>
    );
}