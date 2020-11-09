import React from 'react';

export default function Header() {
    return (
        <>
            <div className="sidebar-header-container">
                <span className="header-text">
                    <span className="text">Quantum-Web</span>
                    <span className="menu-icon">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-text-right"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </span>
                </span>
            </div>
            <div className="header-container">
                <header className="header">
                    <input
                        type="text"
                        className="header-search form-control"
                        placeholder="Search for transaction, account, contract hash."
                    />
                </header>
            </div>
        </>
    );
}
