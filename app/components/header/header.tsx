import type { ReactNode } from "react";

interface HeaderProps {
    logo: ReactNode;
    userInfo?: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export function Header({ logo, userInfo, actions, className = "" }: HeaderProps) {
    return (
        <nav className={`header ${className}`}>
            <div className="header-container">
                <div className="header-content">
                    <div className="header-logo">{logo}</div>
                    <div className="header-actions">
                        {userInfo && <div className="header-user-info">{userInfo}</div>}
                        {actions && <div className="header-buttons">{actions}</div>}
                    </div>
                </div>
            </div>
        </nav>
    );
}
