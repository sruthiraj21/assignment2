import { useState } from 'react';

function ApplicationForm({ onAdd }) {
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [appliedOn, setAppliedOn] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if (company.trim().length < 2 || company.trim().length > 60) {
            newErrors.company = 'Company must be 2-60 characters.';
        }
        if (role.trim().length < 2 || role.trim().length > 60) {
            newErrors.role = 'Role must be 2-60 characters.';
        }
        if (!appliedOn) {
            newErrors.appliedOn = 'Applied date is required.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const message = onAdd({
            company: company.trim(),
            role: role.trim(),
            appliedOn,
            priority
        });

        if (message) {
            setErrors({ duplicate: message });
            return;
        }

        setCompany('');
        setRole('');
        setAppliedOn('');
        setPriority('Medium');
        setErrors({});
    }
    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <h2>Add Application</h2>
            <label>Company</label>
            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
            <label>Role</label>
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={e => setRole(e.target.value)}
            />
            <label>Applied On</label>
            <input
                type="date"
                placeholder="Applied On"
                value={appliedOn}
                onChange={e => setAppliedOn(e.target.value)}
            />
            <label>Priority</label>
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Application</button>
        </form>
    );
}
export default ApplicationForm;