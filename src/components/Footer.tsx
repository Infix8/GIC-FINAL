import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a0a0f] border-t border-[#8B7BB5]/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-[#EAEAEA]/40 text-sm">
                        © 2026 St. Martin's Engineering College. All rights reserved.
                    </p>
                    
                    {/* Legal Links */}
                    <div className="flex items-center gap-4 text-sm">
                        <Link to="/terms" className="text-[#EAEAEA]/40 hover:text-[#8B7BB5] transition-colors">
                            Terms & Conditions
                        </Link>
                        <span className="text-[#EAEAEA]/20">|</span>
                        <Link to="/privacy" className="text-[#EAEAEA]/40 hover:text-[#8B7BB5] transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="text-[#EAEAEA]/20">|</span>
                        <Link to="/refund" className="text-[#EAEAEA]/40 hover:text-[#8B7BB5] transition-colors">
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
