function DashboardPanel({ title, children }) {
    return (
        <div className="dashboard-panel">
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default DashboardPanel;